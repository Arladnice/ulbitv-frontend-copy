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
	// extraReducers: (builder) => {
	// 	builder.addCase(loginByUsername.pending, (state) => {
	// 		state.error = undefined;
	// 		state.isLoading = true;
	// 	});
	// 	builder.addCase(loginByUsername.fulfilled, (state) => {
	// 		state.isLoading = false;
	// 	});
	// 	builder.addCase(loginByUsername.rejected, (state, action) => {
	// 		state.isLoading = false;
	// 		state.error = action.payload as string;
	// 	});
	// },
});

export const { actions: addNewCommentActions } = addNewCommentSlice;
export const { reducer: addNewCommentReducer } = addNewCommentSlice;
