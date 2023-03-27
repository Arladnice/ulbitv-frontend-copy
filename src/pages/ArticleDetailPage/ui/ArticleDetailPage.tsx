import { ReactElement, memo } from "react";

import { classNames } from "shared/lib";

import { IArticleDetailPageProps } from "./interfaces";
import styles from "./ArticleDetailPage.module.scss";

const ArticleDetailPage = ({
	className = "",
}: IArticleDetailPageProps): ReactElement => (
	<div className={classNames(styles.articlesPage, {}, [className])}>
		ArticleDetailPage
	</div>
);

export default memo(ArticleDetailPage);
