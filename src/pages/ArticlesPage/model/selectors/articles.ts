import { IStateSchema } from "app/providers/StoreProvider";
import { EArticleView } from "entities/Article";

export const getArticlesPageIsLoading = (state: IStateSchema) =>
	state.articlePage?.isLoading;

export const getArticlesPageError = (state: IStateSchema) =>
	state.articlePage?.error;

export const getArticlesPageView = (state: IStateSchema) =>
	state.articlePage?.view || EArticleView.Small;
