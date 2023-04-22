import { createAsyncThunk } from "@reduxjs/toolkit";

import { IThunkConfig } from "app/providers/StoreProvider";
import { IArticle } from "entities/Article";

export const fetchArticleRecommendations = createAsyncThunk<
	IArticle[],
	void,
	IThunkConfig<string>
>(
	"articleDetails/fetchArticleRecommendations",
	async (_, { extra, rejectWithValue }) => {
		try {
			const response = await extra.api.get<IArticle[]>("/articles", {
				params: {
					_limit: 4,
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
