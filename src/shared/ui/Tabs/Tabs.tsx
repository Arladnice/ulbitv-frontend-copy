import { memo, ReactElement, useCallback } from "react";

import { classNames } from "shared/lib";

import { Card } from "../Card/Card";
import { ECardTheme } from "../Card/interfaces";

import { ITabItem, ITabsProps } from "./interfaces";
import styles from "./Tabs.module.scss";

export const Tabs = memo(
	({
		className = "",
		onTabClick,
		tabs,
		selectedTad,
	}: ITabsProps): ReactElement => {
		const onTabClickHandle = useCallback(
			(tab: ITabItem) => () => onTabClick(tab),
			[onTabClick]
		);

		return (
			<div className={classNames(styles.tabs, {}, [className])}>
				{tabs.map((tab) => (
					<Card
						key={tab.value}
						className={styles.tab}
						onClick={onTabClickHandle(tab)}
						theme={
							tab.value === selectedTad
								? ECardTheme.Normal
								: ECardTheme.Outlined
						}
					>
						{tab.content}
					</Card>
				))}
			</div>
		);
	}
);
