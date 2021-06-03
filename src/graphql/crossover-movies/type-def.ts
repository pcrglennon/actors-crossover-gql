import { gql } from 'apollo-server';

export const typeDef = gql`
  type MovieCastCredit {
    actorId: Int!
    movieId: Int!
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
