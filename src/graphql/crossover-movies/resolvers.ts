import { intersection } from 'lodash';

import { QueryResolvers } from '../../generated/graphql';
import { GraphQLContext } from '../index';

type CrossoverMoviesResolvers = {
  Query: QueryResolvers<GraphQLContext>;
}

export const resolvers: CrossoverMoviesResolvers = {
  Query: {
    crossoverMovies:  async (_root, { actorIds }, { dataSources: { tmdbAPI } }) => {
      const actors = await Promise.all(actorIds.map(actorId => {
        return tmdbAPI.getActor(actorId);
      }));

      const groupedMovieCastCredits = await Promise.all(actors.map(actor => {
        return tmdbAPI.getMovieCastCredits(actor);
      }));

      const groupedMovieIds = groupedMovieCastCredits.map(castCredits => {
        return castCredits.map(credit => credit.movieId);
      });
      const crossoverMovieIds = intersection(...groupedMovieIds);

      const crossoverMovies = await Promise.all(crossoverMovieIds.map(movieId => {
        return tmdbAPI.getMovie(movieId);
      }));

      // filter credits down to just the crossover Movies
      const groupedCrossoverMovieCastCredits = groupedMovieCastCredits.map(movieCastCredits => {
        return movieCastCredits.filter(movieCastCredit => {
          return crossoverMovieIds.includes(movieCastCredit.movieId);
        });
      });

      return crossoverMovies.map(movie => {
        const castCredits = groupedCrossoverMovieCastCredits.map(castCredits => {
          return castCredits.find(castCredit => castCredit.movieId === movie.id);
        });

        return {
          ...movie,
          crossoverCredits: castCredits
        };
      });
    }
  },
};
