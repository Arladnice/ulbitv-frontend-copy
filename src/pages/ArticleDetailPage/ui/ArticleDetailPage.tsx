import { ReactElement, memo, useEffect, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { classNames } from "shared/lib";
import { ArticleDetails, ArticleList } from "entities/Article";
import { Button, EButtonTheme, ETextSize, Text } from "shared/ui";
import { CommentList } from "entities/Comment";
import {
	TReducersList,
	useDynamicReducersLoader,
} from "shared/hooks/useDynamicReducersLoader";
import { AddCommentForm } from "features/AddNewComment";
import { useAppDispatch } from "shared/hooks/useAppDispatch";
import { RoutePath } from "app/providers/router";
import { Page } from "widgets/Page";

import {
	articleDetailsCommentsReducer,
	getArticleComments,
} from "../model/slices/articleDetailsCommentsSlice";
import {
	articleDetailsRecommendationsReducer,
	getArticleRecommendations,
} from "../model/slices/articleDetailsRecommendationsSLice";
import { getArticleRecommendationsIsLoading } from "../model/selectors/recommendations";
import { getArticleCommentsIsLoading } from "../model/selectors/comments";
import { fetchCommentsByArticleId } from "../model/services/fetchCommentsByArticleId";
import { fetchArticleRecommendations } from "../model/services/fetchArticleRecommendations";
import { addCommentForArticle } from "../model/services/addCommentForArticle";

import { IArticleDetailPageProps } from "./interfaces";
import styles from "./ArticleDetailPage.module.scss";

const reducers: TReducersList = {
	articleDetailsComments: articleDetailsCommentsReducer,
	articleDetailsRecommendations: articleDetailsRecommendationsReducer,
};

const ArticleDetailPage = ({
	className = "",
}: IArticleDetailPageProps): ReactElement => {
	useDynamicReducersLoader({ reducers });
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const { id: articleId } = useParams<{ id: string }>();

	const comments = useSelector(getArticleComments.selectAll);
	const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

	const recommendations = useSelector(getArticleRecommendations.selectAll);
	const recommendationsIsLoading = useSelector(
		getArticleRecommendationsIsLoading
	);

	useEffect(() => {
		dispatch(fetchCommentsByArticleId(articleId));
		dispatch(fetchArticleRecommendations());
	}, [dispatch, articleId]);

	const onSendComment = useCallback(
		(text: string) => {
			dispatch(addCommentForArticle(text));
		},
		[dispatch]
	);

	const onBackToList = useCallback(() => {
		navigate(RoutePath.articles);
	}, [navigate]);

	if (!articleId) {
		return (
			<div className={classNames(styles.articleDetailPage, {}, [className])}>
				Статья не найдена
			</div>
		);
	}

	return (
		<Page className={classNames(styles.articleDetailPage, {}, [className])}>
			<Button onClick={onBackToList} theme={EButtonTheme.Outline}>
				Назад
			</Button>
			<ArticleDetails articleId={articleId} />
			<Text
				size={ETextSize.L}
				title="Рекомендуем"
				className={styles.recommendationsTitle}
			/>
			<ArticleList
				articles={recommendations}
				isLoading={recommendationsIsLoading}
				className={styles.recommendations}
			/>
			<Text
				size={ETextSize.L}
				title="Комментарии"
				className={styles.commentTitle}
			/>
			<AddCommentForm onSendComment={onSendComment} />
			<CommentList isLoading={commentsIsLoading} comments={comments} />
		</Page>
	);
};

export default memo(ArticleDetailPage);
