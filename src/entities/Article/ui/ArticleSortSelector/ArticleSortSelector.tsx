import { memo, ReactElement } from "react";

import { classNames } from "shared/lib";
import { Select } from "shared/ui";
import { TSortOrder } from "shared/types";

import { EArticleSortField } from "../../model/types/article";

import { IArticleSortSelectorProps } from "./interfaces";
import styles from "./ArticleSortSelector.module.scss";
import { orderOptions, sortFieldOptions } from "./constants";

export const ArticleSortSelector = memo(
	({
		className = "",
		onChangeOrder,
		onChangeSort,
		order,
		sort,
	}: IArticleSortSelectorProps): ReactElement => (
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
	)
);
