// NB: all these are partial types! There is more data available in responses, but these
// types specify only what is needed

export type Person = {
  id: number,
  name: string,
  profile_path: string | null
};

export type PersonSearchResult = {
  id: number,
  name: string,
  profile_path: string | null
};

export type PersonSearchResponse = {
  results: PersonSearchResult[],
  page: number,
  total_results: number,
  total_pages: number,
};

export type CastCredit = {
  credit_id: string,
  character: string,
  id: number // NB - represents Movie ID
};

export type MovieCreditsResponse = {
  cast: CastCredit[]
};

export type Movie = {
  id: number,
  title: string,
  poster_path: string | null,
  release_date: string,
  status: string
};
