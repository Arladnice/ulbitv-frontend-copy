import { createAsyncThunk } from "@reduxjs/toolkit";

import { IThunkConfig } from "app/providers/StoreProvider";

import {
	getArticlesPageHasMore,
	getArticlesPageIsLoading,
	getArticlesPageNumber,
} from "../selectors/articles";
import { articlesPageAction } from "../slices/articlesPageSlice";

import { fetchArticlesList } from "./fetchArticlesList";

export const fetchNextArticlesPage = createAsyncThunk<
	void,
	void,
	IThunkConfig<string>
>("articlesPage/fetchNextArticlesPage", async (_, { getState, dispatch }) => {
	const hasMorePage = getArticlesPageHasMore(getState() as any);
	const currentPage = getArticlesPageNumber(getState() as any);
	const isLoading = getArticlesPageIsLoading(getState() as any);

	if (hasMorePage && !isLoading) {
		dispatch(articlesPageAction.setPage(currentPage + 1));
		dispatch(
			fetchArticlesList({
				page: currentPage + 1,
			})
		);
	}
});
