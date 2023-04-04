/* eslint-disable indent */
import { memo, ReactElement, useCallback, useEffect } from "react";
import { useSelector } from "react-redux";

import { classNames } from "shared/lib";
import {
	TReducersList,
	useDynamicReducersLoader,
} from "shared/hooks/useDynamicReducersLoader";
import { useAppDispatch } from "shared/hooks/useAppDispatch";
import {
	Avatar,
	ETextAlign,
	ETextSize,
	ETextTheme,
	Text,
	Icon,
} from "shared/ui";
import { CalendarIcon, EyeIcon } from "shared/assets/icons";

import {
	getArticleDetailsData,
	getArticleDetailsError,
	getArticleDetailsIsLoading,
} from "../../model/selectors/articleDetails";
import { fetchArticleById } from "../../model/services/fetchArticleById";
import { articleDetailsReducer } from "../../model/slice/articleDetailsSlice";
import { EArticleBlockType, TArticleBlock } from "../../model/types/article";

import { ArticleBlockCode } from "../ArticleBlockCode/ArticleBlockCode";
import { ArticleBlockImage } from "../ArticleBlockImage/ArticleBlockImage";
import { ArticleBlockText } from "../ArticleBlockText/ArticleBlockText";
import { ArticleDetailsSkeleton } from "../ArticleDetailsSkeleton/ArticleDetailsSkeleton";

import { IArticleDetailsProps } from "./interfaces";
import styles from "./ArticleDetails.module.scss";

const reducers: TReducersList = {
	articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo(
	({ className = "", articleId }: IArticleDetailsProps): ReactElement => {
		useDynamicReducersLoader({ reducers, removeAfterUnmount: true });

		const dispatch = useAppDispatch();
		const isLoading = useSelector(getArticleDetailsIsLoading);
		const error = useSelector(getArticleDetailsError);
		const article = useSelector(getArticleDetailsData);

		useEffect(() => {
			dispatch(fetchArticleById(articleId));
		}, [dispatch, articleId]);

		const renderBlock = useCallback((block: TArticleBlock) => {
			switch (block.type) {
				case EArticleBlockType.Code:
					return (
						<ArticleBlockCode
							key={block.id}
							block={block}
							className={styles.block}
						/>
					);
				case EArticleBlockType.Image:
					return (
						<ArticleBlockImage
							key={block.id}
							block={block}
							className={styles.block}
						/>
					);
				case EArticleBlockType.Text:
					return (
						<ArticleBlockText
							key={block.id}
							className={styles.block}
							block={block}
						/>
					);
				default:
					return null;
			}
		}, []);

		let content;

		if (isLoading) {
			content = <ArticleDetailsSkeleton />;
		}

		if (error) {
			content = (
				<Text
					align={ETextAlign.Center}
					title="Ошибка загрузки статьи"
					theme={ETextTheme.Error}
				/>
			);
		}

		if (article) {
			content = (
				<>
					<div className={styles.avatarWrapper}>
						<Avatar size={200} src={article?.img} className={styles.avatar} />
					</div>
					<Text
						className={styles.title}
						title={article?.title}
						text={article?.subtitle}
						size={ETextSize.L}
					/>
					<div className={styles.articleInfo}>
						<Icon className={styles.icon} Svg={EyeIcon} />
						<Text text={String(article?.views)} />
					</div>
					<div className={styles.articleInfo}>
						<Icon className={styles.icon} Svg={CalendarIcon} />
						<Text text={article?.createdAt} />
					</div>
					{article?.blocks.map(renderBlock)}
				</>
			);
		}

		return (
			<div className={classNames(styles.articleDetails, {}, [className])}>
				{content}
			</div>
		);
	}
);
