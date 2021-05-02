import { ApolloServer } from 'apollo-server';

import { TMDBAPI } from './data-sources/tmdb';
import { baseTypeDef } from './graphql';
import { actorsResolvers, actorsTypeDef } from './graphql/actors';

const server = new ApolloServer({
  typeDefs: [
    baseTypeDef,
    actorsTypeDef
  ],
  resolvers: [
    actorsResolvers
  ],
  dataSources: () => {
    return {
      tmdbAPI: new TMDBAPI()
    };
  }
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
