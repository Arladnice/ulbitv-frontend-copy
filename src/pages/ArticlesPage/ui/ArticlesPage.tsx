import { ReactElement, memo } from "react";

import { classNames } from "shared/lib";

import { IArticlesPageProps } from "./interfaces";
import styles from "./ArticlesPage.module.scss";

const ArticlesPage = ({ className = "" }: IArticlesPageProps): ReactElement => (
	<div className={classNames(styles.articlesPage, {}, [className])}>
		ArticlesPage
	</div>
);

export default memo(ArticlesPage);
