import { ISelectOption } from "shared/ui/Select/interfaces";
import { TSortOrder } from "shared/types";

import { EArticleSortField } from "../../model/types/article";

export const sortFieldOptions: ISelectOption<EArticleSortField>[] = [
	{
		value: EArticleSortField.Created,
		content: "дате создания",
	},
	{
		value: EArticleSortField.Title,
		content: "названию",
	},
	{
		value: EArticleSortField.Views,
		content: "просмотрам",
	},
];

export const orderOptions: ISelectOption<TSortOrder>[] = [
	{
		value: "asc",
		content: "возрастанию",
	},
	{
		value: "desc",
		content: "убыванию",
	},
];
