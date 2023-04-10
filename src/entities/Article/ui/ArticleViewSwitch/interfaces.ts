import { EArticleView } from "entities/Article/model/types/article";

export interface IArticleViewSwitchProps {
	className?: string;
	view: EArticleView;
	onChangeView: (view: EArticleView) => void;
}
