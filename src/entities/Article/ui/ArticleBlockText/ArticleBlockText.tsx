import { ReactElement } from "react";

import { classNames } from "shared/lib";

import { IArticleBlockTextProps } from "./interfaces";
import styles from "./ArticleBlockText.module.scss";

export const ArticleBlockText = ({
	className = "",
}: IArticleBlockTextProps): ReactElement => (
	<div className={classNames(styles.articleBlockText, {}, [className])}>
		ArticleBlockText
	</div>
);
