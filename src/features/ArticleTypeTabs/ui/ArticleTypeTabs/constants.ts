import { EArticleType } from "entities/Article";
import { ITabItem } from "shared/ui";

export const TABS: ITabItem[] = [
	{
		content: "Все",
		value: EArticleType.All,
	},
	{
		content: "Айти",
		value: EArticleType.It,
	},
	{
		content: "Экономика",
		value: EArticleType.Economics,
	},
	{
		content: "Наука",
		value: EArticleType.Science,
	},
];
