import { createAsyncThunk } from "@reduxjs/toolkit";

import { IThunkConfig } from "app/providers/StoreProvider";
import { EArticleType, IArticle } from "entities/Article";

import { addQueryParams } from "shared/lib/url/addQueryParams";
import {
	getArticlesPageLimit,
	getArticlesPageNumber,
	getArticlesPageOrder,
	getArticlesPageSearch,
	getArticlesPageSort,
	getArticlesPageType,
} from "../selectors/articlesPageSelectors";

interface IFetchArticlesListProps {
	replace?: boolean;
}

export const fetchArticlesList = createAsyncThunk<
	IArticle[],
	IFetchArticlesListProps,
	IThunkConfig<string>
>(
	"articlesPage/fetchArticlesList",
	async (args, { extra, rejectWithValue, getState }) => {
		const limit = getArticlesPageLimit(getState() as any);
		const page = getArticlesPageNumber(getState() as any);

		const order = getArticlesPageOrder(getState() as any);
		const sort = getArticlesPageSort(getState() as any);
		const search = getArticlesPageSearch(getState() as any);
		const type = getArticlesPageType(getState() as any);

		try {
			addQueryParams({ sort, order, search, type });

			const response = await extra.api.get<IArticle[]>("/articles", {
				params: {
					_expand: "user",
					_limit: limit,
					_page: page,

					_sort: sort,
					_order: order,
					q: search,
					type: type === EArticleType.All ? undefined : type,
				},
			});

			if (!response.data) {
				throw new Error("something wrong");
			}

			return response.data;
		} catch (error) {
			console.error(error);
			return rejectWithValue("Что-то пошло не так");
		}
	}
);
