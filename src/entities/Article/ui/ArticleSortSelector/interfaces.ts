import { TSortOrder } from "shared/types";

import { EArticleSortField } from "../../model/types/article";

export interface IArticleSortSelectorProps {
	className?: string;
	sort: EArticleSortField;
	order: TSortOrder;
	onChangeSort: (newSort: EArticleSortField) => void;
	onChangeOrder: (newOrder: TSortOrder) => void;
}
