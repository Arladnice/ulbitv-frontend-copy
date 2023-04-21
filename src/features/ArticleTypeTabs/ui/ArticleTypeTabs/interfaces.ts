import { EArticleType } from "entities/Article";

export interface IArticleTypeTabsProps {
	className?: string;
	selectedTad: string;
	onTabClick: (value: EArticleType) => void;
}
