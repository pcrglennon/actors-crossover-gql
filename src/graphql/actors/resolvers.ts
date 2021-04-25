import { intersection, zipObject } from 'lodash';

import { CrossoverMovie, QueryResolvers } from '../../generated/graphql';
import { GraphQLContext } from '../index';

type ActorsResolvers = {
  Query: QueryResolvers<GraphQLContext>;
}

export const resolvers: ActorsResolvers = {
  Query: {
    actorSearch: async (_root, { queryString, page }, { dataSources: { tmdbAPI } }) => {
      return tmdbAPI.searchActors(queryString, page);
    },
    crossoverMovies:  async (_root, { actorIds }, { dataSources: { tmdbAPI } }) => {
      const groupedMovieCastCredits = await Promise.all(actorIds.map(actorId => {
        return tmdbAPI.getMovieCastCredits(actorId);
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
          __typename: 'CrossoverMovie',
          crossoverCredits: castCredits
        };
      });
    }
  },
};
