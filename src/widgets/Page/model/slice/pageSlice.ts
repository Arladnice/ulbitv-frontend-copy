import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { IPageSchema } from "../types/pageSchema";

const initialState: IPageSchema = {
	scroll: {},
};

export const pageSlice = createSlice({
	name: "page",
	initialState,
	reducers: {
		setScrollPosition: (
			state,
			action: PayloadAction<{ path: string; position: number }>
		) => {
			const { path, position } = action.payload;
			state.scroll[path] = position;
		},
	},
});

export const { actions: pageActions } = pageSlice;
export const { reducer: pageReducer } = pageSlice;
