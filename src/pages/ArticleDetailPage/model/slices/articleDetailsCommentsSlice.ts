import {
	createEntityAdapter,
	createSlice,
	PayloadAction,
} from "@reduxjs/toolkit";

import { IStateSchema } from "app/providers/StoreProvider";
import { IComment } from "entities/Comment";

import { fetchCommentsByArticleId } from "../services/fetchCommentsByArticleId";
import { IArticleDetailsCommentsSchema } from "../types/ArticleDetailsCommentsSchema";

const commentsAdapter = createEntityAdapter<IComment>({
	selectId: (comment) => comment.id,
});

export const getArticleComments = commentsAdapter.getSelectors<IStateSchema>(
	(state) => state.articleDetailsComments || commentsAdapter.getInitialState()
);

const initialState =
	commentsAdapter.getInitialState<IArticleDetailsCommentsSchema>({
		isLoading: false,
		error: undefined,
		ids: [],
		entities: {},
	});

const articleDetailsCommentsSlice = createSlice({
	name: "articleDetailsCommentsSlice",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchCommentsByArticleId.pending, (state) => {
				state.error = undefined;
				state.isLoading = true;
			})
			.addCase(
				fetchCommentsByArticleId.fulfilled,
				(state, action: PayloadAction<IComment[]>) => {
					state.isLoading = false;
					commentsAdapter.setAll(state, action.payload);
				}
			)
			.addCase(fetchCommentsByArticleId.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

export const { reducer: articleDetailsCommentsReducer } =
	articleDetailsCommentsSlice;
export const { actions: articleDetailsCommentsAction } =
	articleDetailsCommentsSlice;
