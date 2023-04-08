import { memo } from "react";

import { classNames } from "shared/lib";
import { Card, Skeleton } from "shared/ui";

import { EArticleView } from "../../model/types/article";

import { IArticleListItemSkeletonProps } from "./interfaces";
import styles from "./ArticleListItem.module.scss";

export const ArticleListItemSkeleton = memo(
	({ view, className = "" }: IArticleListItemSkeletonProps) => {
		if (view === EArticleView.Big) {
			return (
				<div
					className={classNames(styles.ArticleListItem, {}, [
						className,
						styles[view],
					])}
				>
					<Card className={styles.card}>
						<div className={styles.header}>
							<Skeleton border="50%" height={30} width={30} />
							<Skeleton width={150} height={16} className={styles.username} />
							<Skeleton width={150} height={16} className={styles.date} />
						</div>
						<Skeleton width={250} height={24} className={styles.title} />
						<Skeleton height={200} className={styles.img} />
						<div className={styles.footer}>
							<Skeleton height={36} width={200} />
						</div>
					</Card>
				</div>
			);
		}

		return (
			<div
				className={classNames(styles.ArticleListItem, {}, [
					className,
					styles[view],
				])}
			>
				<Card className={styles.card}>
					<div className={styles.imageWrapper}>
						<Skeleton width={200} height={200} className={styles.img} />
					</div>
					<div className={styles.infoWrapper}>
						<Skeleton width={130} height={16} />
					</div>
					<Skeleton width={150} height={16} className={styles.title} />
				</Card>
			</div>
		);
	}
);
