import type { Configuration as WebpackConfiguration } from "webpack";

export interface IBuildPaths {
	entry: string;
	build: string;
	html: string;
	src: string;
	locales: string;
	buildLocales: string;
}

export interface IBuildOptions {
	mode: WebpackConfiguration["mode"];
	paths: IBuildPaths;
	isDev: boolean;
	port: number;
	apiUrl: string;
	project: "storybook" | "frontend" | "jest";
}

export interface IBuildEnv {
	mode: WebpackConfiguration["mode"];
	port: number;
	apiUrl: string;
}
