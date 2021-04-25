import { TMDBAPI } from '../data-sources/tmdb';

export { typeDef as baseTypeDef } from './type-def';

export type GraphQLContext = {
  dataSources: {
    tmdbAPI: TMDBAPI
  }
}
