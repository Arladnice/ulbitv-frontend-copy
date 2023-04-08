import { EArticleView, IArticle } from "../../model/types/article";

export interface IArticleListProps {
	className?: string;
	articles: IArticle[];
	isLoading?: boolean;
	view?: EArticleView;
}
