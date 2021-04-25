import { gql } from 'apollo-server';

export const typeDef = gql`
  type ActorSearchResult {
    id: Int!
    name: String!
    profilePath: String
  }

  type ActorSearchResponseMeta {
    page: Int!
    totalResults: Int!
    totalPages: Int!
  }

  type ActorSearchResponse {
    results: [ActorSearchResult!]!
    meta: ActorSearchResponseMeta!
  }

  type MovieCastCredit {
    actorId: Int!
    movieId: Int!
    characterName: String!
  }

  type Movie {
    id: Int!
    title: String!
  }

  type CrossoverMovie {
    id: Int!
    title: String!
    profilePath: String
    crossoverCredits: [MovieCastCredit!]!
  }

  extend type Query {
    actorSearch(queryString: String!, page: Int!): ActorSearchResponse!
    crossoverMovies(actorIds: [Int!]!): [CrossoverMovie!]!
  }
`;