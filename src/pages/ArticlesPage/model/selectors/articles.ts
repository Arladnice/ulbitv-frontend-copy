import { IStateSchema } from "app/providers/StoreProvider";
import { EArticleView } from "entities/Article";

export const getArticlesPageIsLoading = (state: IStateSchema) =>
	state.articlePage?.isLoading;

export const getArticlesPageError = (state: IStateSchema) =>
	state.articlePage?.error;

export const getArticlesPageView = (state: IStateSchema) =>
	state.articlePage?.view || EArticleView.Small;

export const getArticlesPageNumber = (state: IStateSchema) =>
	state.articlePage?.page || 1;

export const getArticlesPageLimit = (state: IStateSchema) =>
	state.articlePage?.limit || 9;

export const getArticlesPageHasMore = (state: IStateSchema) =>
	state.articlePage?.hasMore || true;

export const getArticlesPageInited = (state: IStateSchema) =>
	state.articlePage?._inited;
