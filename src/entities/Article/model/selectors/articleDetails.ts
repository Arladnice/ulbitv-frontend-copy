import { IStateSchema } from "app/providers/StoreProvider";

import { IArticle } from "../types/article";

export const getArticleDetailsData = (
	state: IStateSchema
): IArticle | undefined => state.articleDetails?.data;

export const getArticleDetailsIsLoading = (
	state: IStateSchema
): boolean | undefined => state.articleDetails?.isLoading;

export const getArticleDetailsError = (
	state: IStateSchema
): string | undefined => state.articleDetails?.error;
