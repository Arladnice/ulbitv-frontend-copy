import { createAsyncThunk } from "@reduxjs/toolkit";

import { IThunkConfig } from "app/providers/StoreProvider";

import { IArticle } from "../types/article";

export const fetchArticleById = createAsyncThunk<
	IArticle,
	string,
	IThunkConfig<string>
>(
	"articleDetails/fetchArticleById",
	async (articleId, { extra, rejectWithValue }) => {
		try {
			const response = await extra.api.get<IArticle>(`/articles/${articleId}`);

			if (!response.data) {
				throw new Error("something wrong");
			}

			return response.data;
		} catch (error) {
			console.error(error);
			return rejectWithValue("error");
		}
	}
);
