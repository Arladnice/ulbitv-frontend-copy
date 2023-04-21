import { memo, ReactElement } from "react";

import { classNames } from "shared/lib";

import { ECardTheme, ICardProps } from "./interfaces";
import styles from "./Card.module.scss";

export const Card = memo(
	({
		children,
		className = "",
		theme = ECardTheme.Normal,
		...otherProps
	}: ICardProps): ReactElement => (
		<div
			className={classNames(styles.card, {}, [className, styles[theme]])}
			{...otherProps}
		>
			{children}
		</div>
	)
);
