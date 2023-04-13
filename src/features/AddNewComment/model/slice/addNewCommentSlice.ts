import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IAddNewComment } from "../types/addNewComment";

const initialState: IAddNewComment = {
	error: undefined,
	text: undefined,
};

export const addNewCommentSlice = createSlice({
	name: "addNewComment",
	initialState,
	reducers: {
		setText: (state, action: PayloadAction<string>) => {
			state.text = action.payload;
		},
	},
});

export const { actions: addNewCommentActions } = addNewCommentSlice;
export const { reducer: addNewCommentReducer } = addNewCommentSlice;
