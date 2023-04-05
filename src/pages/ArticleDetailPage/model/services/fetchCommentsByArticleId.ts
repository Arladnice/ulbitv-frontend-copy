import { createAsyncThunk } from "@reduxjs/toolkit";

import { IThunkConfig } from "app/providers/StoreProvider";
import { IComment } from "entities/Comment";

export const fetchCommentsByArticleId = createAsyncThunk<
	IComment[],
	string | undefined,
	IThunkConfig<string>
>("articleDetails/fetchCommentsByArticleId", async (articleId, thunkApi) => {
	const { extra, rejectWithValue } = thunkApi;

	if (!articleId) {
		return rejectWithValue("error");
	}

	try {
		const response = await extra.api.get<IComment[]>("/comments", {
			params: {
				articleId,
				_expand: "user",
			},
		});

		if (!response.data) {
			throw new Error();
		}

		return response.data;
	} catch (error) {
		console.error(error);
		return rejectWithValue("error");
	}
});
