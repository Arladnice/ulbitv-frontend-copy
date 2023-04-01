import { ReactElement } from "react";

import { classNames } from "shared/lib";

import { IArticleBlockCodeProps } from "./interfaces";
import styles from "./ArticleBlockCode.module.scss";

export const ArticleBlockCode = ({
	className = "",
}: IArticleBlockCodeProps): ReactElement => (
	<div className={classNames(styles.articleBlockCode, {}, [className])}>
		ArticleBlockCode
	</div>
);
