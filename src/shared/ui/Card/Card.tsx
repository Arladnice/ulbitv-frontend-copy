import { memo, ReactElement } from "react";

import { classNames } from "shared/lib";

import { ICardProps } from "./interfaces";
import styles from "./Card.module.scss";

export const Card = memo(
	({ children, className = "", ...otherProps }: ICardProps): ReactElement => (
		<div className={classNames(styles.card, {}, [className])} {...otherProps}>
			{children}
		</div>
	)
);
