import { createAsyncThunk } from "@reduxjs/toolkit";

import { IThunkConfig } from "app/providers/StoreProvider";
import { getArticleDetailsData } from "entities/Article";
import { IComment } from "entities/Comment";
import { getUserAuthData } from "entities/User";

import { fetchCommentsByArticleId } from "./fetchCommentsByArticleId";

export const addCommentForArticle = createAsyncThunk<
	IComment,
	string,
	IThunkConfig<string>
>(
	"articleDetails/addCommentForArticle",
	async (text, { dispatch, extra, rejectWithValue, getState }) => {
		const userData = getUserAuthData(getState() as any);
		const article = getArticleDetailsData(getState() as any);

		if (!userData || !text || !article) {
			return rejectWithValue("Нет данных");
		}

		try {
			const response = await extra.api.post<IComment>("/comments", {
				articleId: article.id,
				userId: userData.id,
				text,
			});

			if (!response.data) {
				throw new Error("something wrong");
			}

			dispatch(fetchCommentsByArticleId(article.id));

			return response.data;
		} catch (error) {
			console.error(error);
			return rejectWithValue("Что-то пошло не так");
		}
	}
);
