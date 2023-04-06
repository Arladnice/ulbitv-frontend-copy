import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { type IAddNewComment } from "../types/addNewComment";

const initialState: IAddNewComment = {
	error: undefined,
	text: undefined,
};

export const addNewCommentSlice = createSlice({
	name: "addNewComment",
	initialState,
	reducers: {
		setText: (state, actions: PayloadAction<string>) => {
			state.text = actions.payload;
		},
	},
});

export const { actions: addNewCommentActions } = addNewCommentSlice;
export const { reducer: addNewCommentReducer } = addNewCommentSlice;
