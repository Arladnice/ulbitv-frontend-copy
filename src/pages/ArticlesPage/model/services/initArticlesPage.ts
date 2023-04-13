import { createAsyncThunk } from "@reduxjs/toolkit";

import { IThunkConfig } from "app/providers/StoreProvider";

import { getArticlesPageInited } from "../selectors/articles";
import { articlesPageAction } from "../slices/articlesPageSlice";

import { fetchArticlesList } from "./fetchArticlesList";

export const initArticlesPage = createAsyncThunk<
	void,
	void,
	IThunkConfig<string>
>("articlesPage/initArticlesPage", async (_, { getState, dispatch }) => {
	const inited = getArticlesPageInited(getState() as any);

	if (!inited) {
		dispatch(articlesPageAction.initState());
		dispatch(
			fetchArticlesList({
				page: 1,
			})
		);
	}
});
