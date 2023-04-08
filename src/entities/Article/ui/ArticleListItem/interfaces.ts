import { EArticleView, IArticle } from "../../model/types/article";

export interface IArticleListItemProps {
	className?: string;
	article: IArticle;
	view: EArticleView;
}

export interface IArticleListItemSkeletonProps {
	className?: string;
	view: EArticleView;
}
