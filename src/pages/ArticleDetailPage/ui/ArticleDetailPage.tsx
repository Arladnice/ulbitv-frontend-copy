import { ReactElement, memo } from "react";
import { useParams } from "react-router-dom";

import { classNames } from "shared/lib";
import { ArticleDetails } from "entities/Article";

import { IArticleDetailPageProps } from "./interfaces";
import styles from "./ArticleDetailPage.module.scss";

const ArticleDetailPage = ({
	className = "",
}: IArticleDetailPageProps): ReactElement => {
	const { id: articleId } = useParams<{ id: string }>();

	if (!articleId) {
		return (
			<div className={classNames(styles.articlesPage, {}, [className])}>
				Статья не найдена
			</div>
		);
	}

	return (
		<div className={classNames(styles.articlesPage, {}, [className])}>
			<ArticleDetails articleId={articleId} />
		</div>
	);
};

export default memo(ArticleDetailPage);
