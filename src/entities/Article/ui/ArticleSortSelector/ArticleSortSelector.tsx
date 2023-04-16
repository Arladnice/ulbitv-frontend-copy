import { memo, ReactElement, useMemo } from "react";

import { classNames } from "shared/lib";
import { Select } from "shared/ui";
import { ISelectOption } from "shared/ui/Select/interfaces";
import { TSortOrder } from "shared/types";

import { EArticleSortField } from "../../model/types/article";

import { IArticleSortSelectorProps } from "./interfaces";
import styles from "./ArticleSortSelector.module.scss";

export const ArticleSortSelector = memo(
	({
		className = "",
		onChangeOrder,
		onChangeSort,
		order,
		sort,
	}: IArticleSortSelectorProps): ReactElement => {
		const sortFieldOptions = useMemo<ISelectOption<EArticleSortField>[]>(
			() => [
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
			],
			[]
		);

		const orderOptions = useMemo<ISelectOption<TSortOrder>[]>(
			() => [
				{
					value: "asc",
					content: "возрастанию",
				},
				{
					value: "desc",
					content: "убыванию",
				},
			],
			[]
		);

		return (
			<div className={classNames(styles.articleSortSelector, {}, [className])}>
				<Select<EArticleSortField>
					label="Сортировать по"
					onChange={onChangeSort}
					options={sortFieldOptions}
					value={sort}
				/>
				<Select<TSortOrder>
					label="по"
					onChange={onChangeOrder}
					options={orderOptions}
					value={order}
				/>
			</div>
		);
	}
);
