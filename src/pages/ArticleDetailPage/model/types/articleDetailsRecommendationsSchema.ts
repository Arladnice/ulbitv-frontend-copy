import { EntityState } from "@reduxjs/toolkit";
import { IArticle } from "entities/Article";

export interface IArticleDetailsRecommendationsSchema
	extends EntityState<IArticle> {
	isLoading?: boolean;
	error?: string;
}
