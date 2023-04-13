import {
	CombinedState,
	EnhancedStore,
	Reducer,
	ReducersMapObject,
} from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";

import { ILoginSchema } from "features/AuthByUsername";
import { IUserSchema } from "entities/User";
import { IProfileSchema } from "entities/Profile";
import { IArticleDetailsSchema } from "entities/Article";
import { IArticleDetailsCommentsSchema } from "pages/ArticleDetailPage/model/types/articleDetailsCommentsSchema";
import { IAddNewComment } from "features/AddNewComment";
import { IArticlesPageSchema } from "pages/ArticlesPage";

export interface IStateSchema {
	user: IUserSchema;

	loginForm?: ILoginSchema;
	profile?: IProfileSchema;
	articleDetails?: IArticleDetailsSchema;
	articleDetailsComments?: IArticleDetailsCommentsSchema;
	addNewComment?: IAddNewComment;
	articlePage?: IArticlesPageSchema;
}

export type TStateSchemaKey = keyof IStateSchema;
export type TMountedReducers = Partial<Record<TStateSchemaKey, boolean>>;

export interface IReducerManager {
	getReducerMap: () => ReducersMapObject<IStateSchema>;
	reduce: (state: IStateSchema, action: any) => CombinedState<IStateSchema>;
	add: (key: TStateSchemaKey, reducer: Reducer) => void;
	remove: (key: TStateSchemaKey) => void;
	getMountedReducers: () => TMountedReducers;
}

export interface IReduxStoreWithManager extends EnhancedStore<IStateSchema> {
	reducerManager: IReducerManager;
}

export interface ICreateReduxStore {
	initialState?: IStateSchema;
	asyncReducers?: ReducersMapObject<IStateSchema>;
}

export interface IThunkExtraArgs {
	api: AxiosInstance;
}

export interface IThunkConfig<T> {
	rejectValue: T;
	extra: IThunkExtraArgs;
	getState: () => IStateSchema;
}
