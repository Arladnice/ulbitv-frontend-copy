import { memo, ReactElement } from "react";

import { classNames } from "shared/lib";
import { EArticleView } from "entities/Article/model/types/article";
import { CellIcon, ListIcon } from "shared/assets/icons";

import { Button, EButtonTheme, Icon } from "shared/ui";
import { IArticleViewSwitchProps } from "./interfaces";
import styles from "./ArticleViewSwitch.module.scss";

const viewTypes = [
	{
		viewType: EArticleView.Small,
		icon: CellIcon,
	},
	{
		viewType: EArticleView.Big,
		icon: ListIcon,
	},
];

export const ArticleViewSwitch = memo(
	({
		className = "",
		onChangeView,
		view,
	}: IArticleViewSwitchProps): ReactElement => {
		const onClick = (newView: EArticleView) => () => {
			onChangeView(newView);
		};

		return (
			<div className={classNames(styles.articleList, {}, [className])}>
				{viewTypes.map(({ icon, viewType }) => (
					<Button
						key={viewType}
						theme={EButtonTheme.Clear}
						onClick={onClick(viewType)}
					>
						<Icon
							Svg={icon}
							className={classNames("", {
								[styles.notSelectedView]: viewType !== view,
							})}
						/>
					</Button>
				))}
			</div>
		);
	}
);
