import { EntityState } from "@reduxjs/toolkit";

import { EArticleView, IArticle } from "entities/Article";

export interface IArticlesPageSchema extends EntityState<IArticle> {
	isLoading?: boolean;
	error?: string;
	view?: EArticleView;
}
