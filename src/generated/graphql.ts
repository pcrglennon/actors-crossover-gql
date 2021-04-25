import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type ActorSearchResponse = {
  __typename?: 'ActorSearchResponse';
  results: Array<ActorSearchResult>;
  meta: ActorSearchResponseMeta;
};

export type ActorSearchResponseMeta = {
  __typename?: 'ActorSearchResponseMeta';
  page: Scalars['Int'];
  totalResults: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type ActorSearchResult = {
  __typename?: 'ActorSearchResult';
  id: Scalars['Int'];
  name: Scalars['String'];
  profilePath?: Maybe<Scalars['String']>;
};

export type CrossoverMovie = {
  __typename?: 'CrossoverMovie';
  id: Scalars['Int'];
  title: Scalars['String'];
  profilePath?: Maybe<Scalars['String']>;
  crossoverCredits: Array<MovieCastCredit>;
};

export type Movie = {
  __typename?: 'Movie';
  id: Scalars['Int'];
  title: Scalars['String'];
};

export type MovieCastCredit = {
  __typename?: 'MovieCastCredit';
  actorId: Scalars['Int'];
  movieId: Scalars['Int'];
  characterName: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  _?: Maybe<Scalars['Boolean']>;
  actorSearch: ActorSearchResponse;
  crossoverMovies: Array<CrossoverMovie>;
};


export type QueryActorSearchArgs = {
  queryString: Scalars['String'];
  page: Scalars['Int'];
};


export type QueryCrossoverMoviesArgs = {
  actorIds: Array<Scalars['Int']>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  ActorSearchResponse: ResolverTypeWrapper<ActorSearchResponse>;
  ActorSearchResponseMeta: ResolverTypeWrapper<ActorSearchResponseMeta>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  ActorSearchResult: ResolverTypeWrapper<ActorSearchResult>;
  String: ResolverTypeWrapper<Scalars['String']>;
  CrossoverMovie: ResolverTypeWrapper<CrossoverMovie>;
  Movie: ResolverTypeWrapper<Movie>;
  MovieCastCredit: ResolverTypeWrapper<MovieCastCredit>;
  Query: ResolverTypeWrapper<{}>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  ActorSearchResponse: ActorSearchResponse;
  ActorSearchResponseMeta: ActorSearchResponseMeta;
  Int: Scalars['Int'];
  ActorSearchResult: ActorSearchResult;
  String: Scalars['String'];
  CrossoverMovie: CrossoverMovie;
  Movie: Movie;
  MovieCastCredit: MovieCastCredit;
  Query: {};
  Boolean: Scalars['Boolean'];
}>;

export type ActorSearchResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ActorSearchResponse'] = ResolversParentTypes['ActorSearchResponse']> = ResolversObject<{
  results?: Resolver<Array<ResolversTypes['ActorSearchResult']>, ParentType, ContextType>;
  meta?: Resolver<ResolversTypes['ActorSearchResponseMeta'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ActorSearchResponseMetaResolvers<ContextType = any, ParentType extends ResolversParentTypes['ActorSearchResponseMeta'] = ResolversParentTypes['ActorSearchResponseMeta']> = ResolversObject<{
  page?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalResults?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalPages?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ActorSearchResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['ActorSearchResult'] = ResolversParentTypes['ActorSearchResult']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  profilePath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CrossoverMovieResolvers<ContextType = any, ParentType extends ResolversParentTypes['CrossoverMovie'] = ResolversParentTypes['CrossoverMovie']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  profilePath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  crossoverCredits?: Resolver<Array<ResolversTypes['MovieCastCredit']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieResolvers<ContextType = any, ParentType extends ResolversParentTypes['Movie'] = ResolversParentTypes['Movie']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieCastCreditResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieCastCredit'] = ResolversParentTypes['MovieCastCredit']> = ResolversObject<{
  actorId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  movieId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  characterName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  _?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  actorSearch?: Resolver<ResolversTypes['ActorSearchResponse'], ParentType, ContextType, RequireFields<QueryActorSearchArgs, 'queryString' | 'page'>>;
  crossoverMovies?: Resolver<Array<ResolversTypes['CrossoverMovie']>, ParentType, ContextType, RequireFields<QueryCrossoverMoviesArgs, 'actorIds'>>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  ActorSearchResponse?: ActorSearchResponseResolvers<ContextType>;
  ActorSearchResponseMeta?: ActorSearchResponseMetaResolvers<ContextType>;
  ActorSearchResult?: ActorSearchResultResolvers<ContextType>;
  CrossoverMovie?: CrossoverMovieResolvers<ContextType>;
  Movie?: MovieResolvers<ContextType>;
  MovieCastCredit?: MovieCastCreditResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
}>;


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
