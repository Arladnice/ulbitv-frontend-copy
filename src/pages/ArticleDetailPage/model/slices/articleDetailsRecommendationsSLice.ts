import {
	createEntityAdapter,
	createSlice,
	PayloadAction,
} from "@reduxjs/toolkit";

import { IStateSchema } from "app/providers/StoreProvider";
import { IArticle } from "entities/Article";

import { IArticleDetailsRecommendationsSchema } from "../types/articleDetailsRecommendationsSchema";
import { fetchArticleRecommendations } from "../services/fetchArticleRecommendations";

const recommendationsAdapter = createEntityAdapter<IArticle>({
	selectId: (article) => article.id,
});

export const getArticleRecommendations =
	recommendationsAdapter.getSelectors<IStateSchema>(
		(state) =>
			state.articleDetailsRecommendations ||
			recommendationsAdapter.getInitialState()
	);

const initialState =
	recommendationsAdapter.getInitialState<IArticleDetailsRecommendationsSchema>({
		isLoading: false,
		error: undefined,
		ids: [],
		entities: {},
	});

const articleDetailsRecommendationsSLice = createSlice({
	name: "articleDetailsRecommendationsSLice",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchArticleRecommendations.pending, (state) => {
				state.error = undefined;
				state.isLoading = true;
			})
			.addCase(
				fetchArticleRecommendations.fulfilled,
				(state, action: PayloadAction<IArticle[]>) => {
					state.isLoading = false;
					recommendationsAdapter.setAll(state, action.payload);
				}
			)
			.addCase(fetchArticleRecommendations.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

export const { reducer: articleDetailsRecommendationsReducer } =
	articleDetailsRecommendationsSLice;
export const { actions: articleDetailsRecommendationsAction } =
	articleDetailsRecommendationsSLice;
