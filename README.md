# Actors Crossover - GQL API
GraphQL API intended to perform the more complex logic in [actors-crossover frontend app](https://github.com/pcrglennon/actors-crossover).

## Example Queries
```gql
query ActorSearch {
  actorSearch(queryString: "Mark Hamill", page: 1) {
    results {
      id
      name
    }
    meta {
      totalResults
      totalPages
    }
  }
}

query CrossoverMovies {
  crossoverMovies(actorIds: [2, 3]) {
    id
    title
    crossoverCredits {
      actorId
      characterName
    }
  }
}
```
