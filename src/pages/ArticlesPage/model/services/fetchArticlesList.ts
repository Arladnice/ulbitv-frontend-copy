import { createAsyncThunk } from "@reduxjs/toolkit";

import { IThunkConfig } from "app/providers/StoreProvider";
import { IArticle } from "entities/Article";

import { getArticlesPageLimit } from "../selectors/articles";

interface IFetchArticlesListProps {
	page?: number;
}

export const fetchArticlesList = createAsyncThunk<
	IArticle[],
	IFetchArticlesListProps,
	IThunkConfig<string>
>(
	"articlesPage/fetchArticlesList",
	async (args, { extra, rejectWithValue, getState }) => {
		const { page = 1 } = args;

		const limit = getArticlesPageLimit(getState() as any);
		try {
			const response = await extra.api.get<IArticle[]>("/articles", {
				params: {
					_expand: "user",
					_limit: limit,
					_page: page,
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
