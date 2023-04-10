import { createAsyncThunk } from "@reduxjs/toolkit";

import { IThunkConfig } from "app/providers/StoreProvider";
import { IArticle } from "entities/Article";

export const fetchArticlesList = createAsyncThunk<
	IArticle[],
	void,
	IThunkConfig<string>
>("articlesPage/fetchArticlesList", async (_, { extra, rejectWithValue }) => {
	try {
		const response = await extra.api.get<IArticle[]>("/articles", {
			params: {
				_expand: "user",
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
});
