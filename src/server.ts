import { ApolloServer } from 'apollo-server';

import { TMDBAPI } from './data-sources/tmdb';
import { baseTypeDef } from './graphql';
import { actorsResolvers, actorsTypeDef } from './graphql/actors';
import { crossoverMoviesResolvers, crossoverMoviesTypeDef } from './graphql/crossover-movies';

const server = new ApolloServer({
  typeDefs: [
    baseTypeDef,
    actorsTypeDef,
    crossoverMoviesTypeDef
  ],
  resolvers: [
    actorsResolvers,
    crossoverMoviesResolvers
  ],
  dataSources: () => {
    return {
      tmdbAPI: new TMDBAPI()
    };
  },
  // enable playground in prod
  introspection: true,
  playground: true,
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
