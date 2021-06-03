import { gql } from 'apollo-server';

export const typeDef = gql`
  type MovieCastCredit {
    id: String!
    movieId: Int!
    actorId: Int!
    actorName: String!
    characterName: String!
  }

  type CrossoverMovie {
    id: Int!
    title: String!
    releaseDate: String!
    posterPath: String
    crossoverCredits: [MovieCastCredit!]!
  }

  extend type Query {
    crossoverMovies(actorIds: [Int!]!): [CrossoverMovie!]!
  }
`;
