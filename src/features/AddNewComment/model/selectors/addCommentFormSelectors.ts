import { IStateSchema } from "app/providers/StoreProvider";

export const getAddCommentFormText = (state: IStateSchema) =>
	state.addNewComment?.text ?? "";

export const getAddCommentFormError = (state: IStateSchema) =>
	state.addNewComment?.error;
