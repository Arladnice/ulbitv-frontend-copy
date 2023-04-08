import { memo, ReactElement, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { classNames } from "shared/lib";
import { Avatar, Button, Card, EButtonTheme, Icon, Text } from "shared/ui";
import { EyeIcon } from "shared/assets/icons";
import { RoutePath } from "app/providers/router";

import {
	EArticleBlockType,
	EArticleView,
	IArticleBlockText,
} from "../../model/types/article";

import { ArticleBlockText } from "../ArticleBlockText/ArticleBlockText";

import { IArticleListItemProps } from "./interfaces";
import styles from "./ArticleListItem.module.scss";

export const ArticleListItem = memo(
	({ className = "", article, view }: IArticleListItemProps): ReactElement => {
		const { img, title, createdAt, type, views, id, user } = article;

		const navigate = useNavigate();

		const onOpenArticle = useCallback(() => {
			navigate(`${RoutePath.articleDetail}/${id}`);
		}, [id, navigate]);

		const typesBlock = <Text text={type.join(", ")} className={styles.types} />;
		const viewsBlock = (
			<>
				<Text text={String(views)} className={styles.views} />
				<Icon Svg={EyeIcon} />
			</>
		);

		if (view === EArticleView.Big) {
			const textBlock = article.blocks.find(
				(block) => block.type === EArticleBlockType.Text
			) as IArticleBlockText;

			return (
				<div
					className={classNames(styles.articleListItem, {}, [
						className,
						styles[view],
					])}
				>
					<Card className={styles.card}>
						<div className={styles.header}>
							<Avatar size={30} src={user.avatar} />
							<Text text={user.username} className={styles.username} />
							<Text text={createdAt} className={styles.date} />
						</div>

						<Text title={title} className={styles.title} />
						{typesBlock}

						<img src={img} className={styles.image} alt={title} />
						{textBlock && (
							<ArticleBlockText
								block={textBlock}
								className={styles.textBlock}
							/>
						)}

						<div className={styles.footer}>
							<Button onClick={onOpenArticle} theme={EButtonTheme.Outline}>
								Читать далее...
							</Button>
							{viewsBlock}
						</div>
					</Card>
				</div>
			);
		}

		return (
			<div
				className={classNames(styles.articleListItem, {}, [
					className,
					styles[view],
				])}
			>
				<Card className={styles.card} onClick={onOpenArticle}>
					<div className={styles.imageWrapper}>
						<img src={img} alt={title} className={styles.image} />
						<Text text={createdAt} className={styles.date} />
					</div>

					<div className={styles.infoWrapper}>
						{typesBlock}
						{viewsBlock}
					</div>

					<Text text={title} className={styles.title} />
				</Card>
			</div>
		);
	}
);
