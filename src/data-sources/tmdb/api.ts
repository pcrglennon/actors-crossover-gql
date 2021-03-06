import { RESTDataSource } from 'apollo-datasource-rest';
import 'dotenv/config';

import {
  ActorSearchResult,
  ActorSearchResponse,
  CrossoverMovie,
  MovieCastCredit
} from '../../generated/graphql';
import * as TMDB from './typings';

// TODO - look into using "Models" from graphql-codegen
type Movie = Pick<CrossoverMovie, 'id' | 'title' | 'releaseDate' | 'posterPath'>;

export class TMDBAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.themoviedb.org/3/';
  }

  async searchActors(queryString: string, page: number): Promise<ActorSearchResponse> {
    const response = await this.get<TMDB.PersonSearchResponse>(
      `search/person`,
      {
        api_key: process.env.TMDB_API_KEY,
        query: queryString,
        page,
        language: 'en-US',
        include_adult: false // keep it SFW
      }
    );

    return this.normalizeActorSearchResponse(response);
  }

  async getMovieCastCredits(actor: TMDB.Person): Promise<MovieCastCredit[]> {
    const response = await this.get<TMDB.MovieCreditsResponse>(
      `person/${actor.id}/movie_credits`,
      {
        api_key: process.env.TMDB_API_KEY
      }
    );

    return response.cast.map(castCredit => {
      return this.normalizeMovieCredit(castCredit, actor);
    });
  }

  async getMovie(id: number): Promise<Movie> {
    const response = await this.get<TMDB.Movie>(
      `movie/${id}`,
      {
        api_key: process.env.TMDB_API_KEY
      }
    );

    return this.normalizeMovie(response);
  }

  async getActor(actorId: number): Promise<TMDB.Person> {
    const response = await this.get<TMDB.Person>(
      `person/${actorId}`,
      {
        api_key: process.env.TMDB_API_KEY
      }
    );

    return response;
  }

  private normalizeActorSearchResponse(response: TMDB.PersonSearchResponse): ActorSearchResponse {
    const results = response.results.map(this.normalizeActorSearchResult);

    return {
      results,
      meta: {
        page: response.page,
        totalResults: response.total_results,
        totalPages: response.total_pages
      }
    };
  }

  private normalizeActorSearchResult(result: TMDB.PersonSearchResult): ActorSearchResult {
    return {
      id: result.id,
      name: result.name
    };
  }

  private normalizeMovieCredit(castCredit: TMDB.CastCredit, actor: TMDB.Person): MovieCastCredit {
    return {
      id: castCredit.credit_id,
      actorId: actor.id,
      actorName: actor.name,
      movieId: castCredit.id,
      characterName: castCredit.character
    };
  }

  private normalizeMovie(movie: TMDB.Movie): Movie {
    return {
      id: movie.id,
      title: movie.title,
      releaseDate: movie.release_date,
      posterPath: movie.poster_path
    };
  }
}
