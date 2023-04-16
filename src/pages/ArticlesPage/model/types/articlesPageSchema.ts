import { EntityState } from "@reduxjs/toolkit";

import { EArticleSortField, EArticleView, IArticle } from "entities/Article";
import { TSortOrder } from "shared/types";

export interface IArticlesPageSchema extends EntityState<IArticle> {
	isLoading?: boolean;
	error?: string;

	// pagination
	page: number;
	limit: number;
	hasMore: boolean;

	// filters
	view: EArticleView;
	order: TSortOrder;
	sort: EArticleSortField;
	search: string;

	_inited?: boolean;
}
