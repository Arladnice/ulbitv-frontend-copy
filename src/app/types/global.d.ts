/* eslint-disable no-mixed-spaces-and-tabs */

/// <reference types="redux-thunk/extend-redux" />

declare module "*.scss" {
	const classNames: Record<string, string>;
	export = classNames;
}

declare module "*.svg" {
	import React from "react";

	export const src: string;

	const ReactComponent: React.VFC<React.SVGProps<SVGSVGElement>>;
	export default ReactComponent;
}

declare module "*.png" {
	const src: string;
	export default src;
}

declare module "*.jpeg" {
	const src: string;
	export default src;
}

declare type DeepPartial<T> = T extends object
	? {
			[P in keyof T]?: DeepPartial<T[P]>;
	  }
	: T;

declare const __IS_DEV__: boolean;

declare const __API__: string;

declare const __PROJECT__: "storybook" | "frontend" | "jest";
