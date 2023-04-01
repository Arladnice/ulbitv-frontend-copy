import { ReactElement } from "react";

import { classNames } from "shared/lib";

import { IArticleDetailsProps } from "./interfaces";
import styles from "./ArticleDetails.module.scss";

export const ArticleDetails = ({
	className = "",
}: IArticleDetailsProps): ReactElement => (
	<div className={classNames(styles.articleDetails, {}, [className])}>
		ArticleDetails
	</div>
);
