import {
	createEntityAdapter,
	createSlice,
	PayloadAction,
} from "@reduxjs/toolkit";

import { IStateSchema } from "app/providers/StoreProvider";
import { EArticleView, IArticle } from "entities/Article";

import { IArticlesPageSchema } from "../types/articlesPageSchema";
import { fetchArticlesList } from "../services/fetchArticlesList";

const articlesAdapter = createEntityAdapter<IArticle>({
	selectId: (article) => article.id,
});

export const getArticle = articlesAdapter.getSelectors<IStateSchema>(
	(state) => state.articlePage || articlesAdapter.getInitialState()
);

const initialState = articlesAdapter.getInitialState<IArticlesPageSchema>({
	isLoading: false,
	error: undefined,
	view: EArticleView.Small,
	ids: [],
	entities: {},
});

const articlesPageSlice = createSlice({
	name: "articlesPageSlice",
	initialState,
	reducers: {
		setView: (state, action: PayloadAction<EArticleView>) => {
			state.view = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchArticlesList.pending, (state) => {
				state.error = undefined;
				state.isLoading = true;
			})
			.addCase(
				fetchArticlesList.fulfilled,
				(state, action: PayloadAction<IArticle[]>) => {
					state.isLoading = false;
					articlesAdapter.setAll(state, action.payload);
				}
			)
			.addCase(fetchArticlesList.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

export const { reducer: articlesPageReducer } = articlesPageSlice;
export const { actions: articlesPageAction } = articlesPageSlice;
