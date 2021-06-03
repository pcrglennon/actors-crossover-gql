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

  extend type Query {
    actorSearch(queryString: String!, page: Int!): ActorSearchResponse!
  }
`;
