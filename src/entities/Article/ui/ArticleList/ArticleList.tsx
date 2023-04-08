import { memo, ReactElement } from "react";

import { classNames } from "shared/lib";

import { EArticleView, IArticle } from "../../model/types/article";

import { ArticleListItem } from "../ArticleListItem/ArticleListItem";

import { IArticleListProps } from "./interfaces";
import styles from "./ArticleList.module.scss";
import { ArticleListItemSkeleton } from "../ArticleListItem/ArticleListItemSkeleton";

export const ArticleList = memo(
	({
		className = "",
		articles,
		view = EArticleView.Small,
		isLoading,
	}: IArticleListProps): ReactElement => {
		const renderArticle = (article: IArticle) => (
			<ArticleListItem
				key={article.id}
				article={article}
				view={view}
				className={styles.card}
			/>
		);

		const renderSkeletons = () =>
			new Array(view === EArticleView.Small ? 9 : 3)
				.fill("")
				.map((_, index) => (
					<ArticleListItemSkeleton
						className={styles.card}
						// eslint-disable-next-line
						key={index.toString()}
						view={view}
					/>
				));

		if (isLoading) {
			return (
				<div
					className={classNames(styles.articleList, {}, [
						className,
						styles[view],
					])}
				>
					{renderSkeletons()}
				</div>
			);
		}

		return (
			<div className={classNames(styles.articleList, {}, [className])}>
				{articles.length > 0 ? articles.map(renderArticle) : null}
			</div>
		);
	}
);
