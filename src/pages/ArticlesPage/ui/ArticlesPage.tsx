import { ReactElement, memo } from "react";

import { classNames } from "shared/lib";
import { ArticleList } from "entities/Article";

import { EArticleView } from "entities/Article/model/types/article";
import { IArticlesPageProps } from "./interfaces";
import styles from "./ArticlesPage.module.scss";

const ArticlesPage = ({ className = "" }: IArticlesPageProps): ReactElement => (
	<div className={classNames(styles.articlesPage, {}, [className])}>
		<ArticleList view={EArticleView.Small} articles={[]} />
	</div>
);

export default memo(ArticlesPage);
