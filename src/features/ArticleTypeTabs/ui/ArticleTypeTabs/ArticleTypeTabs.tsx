import { ReactElement, useCallback } from "react";

import { ITabItem, Tabs } from "shared/ui";
import { classNames } from "shared/lib";
import { EArticleType } from "entities/Article";

import { IArticleTypeTabsProps } from "./interfaces";
import styles from "./ArticleTypeTabs.module.scss";
import { TABS } from "./constants";

export const ArticleTypeTabs = ({
	className = "",
	onTabClick,
	selectedTad,
}: IArticleTypeTabsProps): ReactElement => {
	const onTabClickHandler = useCallback(
		(tab: ITabItem) => {
			onTabClick(tab.value as EArticleType);
		},
		[onTabClick]
	);

	return (
		<Tabs
			className={classNames(styles.articlesPageFilters, {}, [className])}
			tabs={TABS}
			selectedTad={selectedTad}
			onTabClick={onTabClickHandler}
		/>
	);
};
