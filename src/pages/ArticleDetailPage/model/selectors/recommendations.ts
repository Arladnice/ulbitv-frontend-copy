import { IStateSchema } from "app/providers/StoreProvider";

export const getArticleRecommendationsIsLoading = (state: IStateSchema) =>
	state.articleDetailsRecommendations?.isLoading;

export const getArticleRecommendationsError = (state: IStateSchema) =>
	state.articleDetailsRecommendations?.error;
