import { ReactElement, memo, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { classNames } from "shared/lib";
import { ArticleDetails } from "entities/Article";
import { Text } from "shared/ui";
import { CommentList } from "entities/Comment";
import {
	TReducersList,
	useDynamicReducersLoader,
} from "shared/hooks/useDynamicReducersLoader";
import { AddCommentForm } from "features/AddNewComment";
import { useAppDispatch } from "shared/hooks/useAppDispatch";

import {
	articleDetailsCommentsReducer,
	getArticleComments,
} from "../model/slices/articleDetailsCommentsSlice";
import { getArticleCommentsIsLoading } from "../model/selectors/comments";
import { fetchCommentsByArticleId } from "../model/services/fetchCommentsByArticleId";
import { addCommentForArticle } from "../model/services/addCommentForArticle";

import { IArticleDetailPageProps } from "./interfaces";
import styles from "./ArticleDetailPage.module.scss";

const reducers: TReducersList = {
	articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailPage = ({
	className = "",
}: IArticleDetailPageProps): ReactElement => {
	useDynamicReducersLoader({ reducers });
	const dispatch = useAppDispatch();

	const { id: articleId } = useParams<{ id: string }>();

	const comments = useSelector(getArticleComments.selectAll);
	const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

	useEffect(() => {
		dispatch(fetchCommentsByArticleId(articleId));
	}, [dispatch, articleId]);

	const onSendComment = useCallback(
		(text: string) => {
			dispatch(addCommentForArticle(text));
		},
		[dispatch]
	);

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
			<Text title="Комментарии" className={styles.commentTitle} />
			<AddCommentForm onSendComment={onSendComment} />
			<CommentList isLoading={commentsIsLoading} comments={comments} />
		</div>
	);
};

export default memo(ArticleDetailPage);
