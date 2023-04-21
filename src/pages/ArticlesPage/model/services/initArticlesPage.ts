import { createAsyncThunk } from "@reduxjs/toolkit";

import { IThunkConfig } from "app/providers/StoreProvider";

import { TSortOrder } from "shared/types";
import { EArticleSortField } from "entities/Article";
import { getArticlesPageInited } from "../selectors/articlesPageSelectors";
import { articlesPageAction } from "../slices/articlesPageSlice";

import { fetchArticlesList } from "./fetchArticlesList";

export const initArticlesPage = createAsyncThunk<
	void,
	URLSearchParams,
	IThunkConfig<string>
>(
	"articlesPage/initArticlesPage",
	async (searchParams, { getState, dispatch }) => {
		const inited = getArticlesPageInited(getState() as any);

		if (!inited) {
			const orderFromUrl = searchParams.get("order");
			if (orderFromUrl) {
				dispatch(articlesPageAction.setOrder(orderFromUrl as TSortOrder));
			}

			const sortFromUrl = searchParams.get("sort");
			if (sortFromUrl) {
				dispatch(articlesPageAction.setSort(sortFromUrl as EArticleSortField));
			}

			const searchFromUrl = searchParams.get("search");
			if (searchFromUrl) {
				dispatch(articlesPageAction.setSearch(searchFromUrl as TSortOrder));
			}

			dispatch(articlesPageAction.initState());
			dispatch(fetchArticlesList({}));
		}
	}
);
