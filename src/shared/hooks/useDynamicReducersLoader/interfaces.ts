import { Reducer } from "@reduxjs/toolkit";

import { TStateSchemaKey } from "app/providers/StoreProvider/config/StateSchema";

export type TReducersList = {
	[name in TStateSchemaKey]?: Reducer;
};

export type TReducersListEntry = [TStateSchemaKey, Reducer];

export interface IDynamicModuleLoaderProps {
	reducers: TReducersList;
	removeAfterUnmount?: boolean;
}
