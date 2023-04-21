import {
	createEntityAdapter,
	createSlice,
	PayloadAction,
} from "@reduxjs/toolkit";

import { IStateSchema } from "app/providers/StoreProvider";
import {
	EArticleSortField,
	EArticleType,
	EArticleView,
	IArticle,
} from "entities/Article";
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from "shared/constants/localStorage";
import { TSortOrder } from "shared/types";

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
	page: 1,
	limit: 9,
	hasMore: true,
	view: EArticleView.Small,
	order: "asc",
	sort: EArticleSortField.Created,
	search: "",
	type: EArticleType.All,
	ids: [],
	entities: {},
	_inited: false,
});

const articlesPageSlice = createSlice({
	name: "articlesPageSlice",
	initialState,
	reducers: {
		setView: (state, action: PayloadAction<EArticleView>) => {
			state.view = action.payload;
			localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE_KEY, action.payload);
		},
		setPage: (state, action: PayloadAction<number>) => {
			state.page = action.payload;
		},
		setOrder: (state, action: PayloadAction<TSortOrder>) => {
			state.order = action.payload;
		},
		setSort: (state, action: PayloadAction<EArticleSortField>) => {
			state.sort = action.payload;
		},
		setSearch: (state, action: PayloadAction<string>) => {
			state.search = action.payload;
		},
		setType: (state, action: PayloadAction<EArticleType>) => {
			state.type = action.payload;
		},
		initState: (state) => {
			const view = localStorage.getItem(ARTICLES_VIEW_LOCALSTORAGE_KEY);
			state.view = view as EArticleView;
			state.limit = view === EArticleView.Big ? 4 : 9;
			state._inited = true;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchArticlesList.pending, (state, action) => {
				state.error = undefined;
				state.isLoading = true;

				if (action.meta.arg.replace) {
					articlesAdapter.removeAll(state);
				}
			})
			.addCase(fetchArticlesList.fulfilled, (state, action) => {
				state.isLoading = false;
				state.hasMore = action.payload.length > state.limit;

				if (action.meta.arg.replace) {
					articlesAdapter.setAll(state, action.payload);
				} else {
					articlesAdapter.addMany(state, action.payload);
				}
			})
			.addCase(fetchArticlesList.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

export const { reducer: articlesPageReducer } = articlesPageSlice;
export const { actions: articlesPageAction } = articlesPageSlice;
