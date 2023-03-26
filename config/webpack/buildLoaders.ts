import webpack from "webpack";

import { IBuildOptions } from "./types/config";
import { buildCssLoader } from "./loaders/buildCssLoader";
import { buildSvgLoader } from "./loaders/buildSvgLoader";
import { buildBabelLoader } from "./loaders/buildBabelLoader";

export function buildLoaders({ isDev }: IBuildOptions): webpack.RuleSetRule[] {
	const svgLoader = buildSvgLoader();

	const babelLoader = buildBabelLoader();
	const cssLoader = buildCssLoader(isDev);

	// Если не используем тайпскрипт - нужен babel-loader
	const typescriptLoader = {
		test: /\.tsx?$/,
		use: "ts-loader",
		exclude: /node_modules/,
	};

	const fileLoader = {
		test: /\.(png|jpe?g|gif|woff2|woff)$/i,
		use: [
			{
				loader: "file-loader",
			},
		],
	};

	return [fileLoader, svgLoader, babelLoader, typescriptLoader, cssLoader];
}
