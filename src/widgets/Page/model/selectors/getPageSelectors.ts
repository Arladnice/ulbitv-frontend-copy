import { createSelector } from "@reduxjs/toolkit";
import { IStateSchema } from "app/providers/StoreProvider";

export const getPageScroll = (state: IStateSchema) => state.page.scroll;

export const getPageScrollByPath = createSelector(
	getPageScroll,
	(state: IStateSchema, path: string) => path,
	(scroll, path) => scroll[path] || 0
);
