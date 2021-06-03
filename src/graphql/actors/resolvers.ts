import { QueryResolvers } from '../../generated/graphql';
import { GraphQLContext } from '../index';

type ActorsResolvers = {
  Query: QueryResolvers<GraphQLContext>;
}

export const resolvers: ActorsResolvers = {
  Query: {
    actorSearch: async (_root, { queryString, page }, { dataSources: { tmdbAPI } }) => {
      return tmdbAPI.searchActors(queryString, page);
    },
  },
};
