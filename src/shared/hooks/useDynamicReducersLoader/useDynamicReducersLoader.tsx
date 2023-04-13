import { useEffect } from "react";
import { useStore } from "react-redux";

import { IReduxStoreWithManager } from "app/providers/StoreProvider";

import { TStateSchemaKey } from "app/providers/StoreProvider/config/StateSchema";
import { IDynamicModuleLoaderProps } from "./interfaces";
import { useAppDispatch } from "../useAppDispatch";

export const useDynamicReducersLoader = ({
	reducers,
	removeAfterUnmount = true,
}: IDynamicModuleLoaderProps): void => {
	const dispatch = useAppDispatch();
	const store = useStore() as IReduxStoreWithManager;

	useEffect(() => {
		const mountedReducers = store.reducerManager.getMountedReducers();

		Object.entries(reducers).forEach(([name, reducer]) => {
			const mounted = mountedReducers[name as TStateSchemaKey];
			if (!mounted) {
				store.reducerManager.add(name as TStateSchemaKey, reducer);
				dispatch({ type: `@INIT ${name} reducer` });
			}
		});

		return () => {
			if (removeAfterUnmount) {
				Object.entries(reducers).forEach(([name, reducer]) => {
					store.reducerManager.add(name as TStateSchemaKey, reducer);
					dispatch({ type: `@DESTROY ${name} reducer` });
				});
			}
		};
		// eslint-disable-next-line
	}, []);
};
