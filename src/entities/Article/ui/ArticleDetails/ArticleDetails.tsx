import { memo, ReactElement, useEffect } from "react";
import { useSelector } from "react-redux";

import { classNames } from "shared/lib";
import {
	TReducersList,
	useDynamicReducersLoader,
} from "shared/hooks/useDynamicReducersLoader";
import { useAppDispatch } from "shared/hooks/useAppDispatch";

import { ETextAlign, ETextTheme, Loader, Text } from "shared/ui";
import {
	getArticleDetailsData,
	getArticleDetailsError,
	getArticleDetailsIsLoading,
} from "../../model/selectors/articleDetails";
import { fetchArticleById } from "../../model/services/fetchArticleById";
import { articleDetailsReducer } from "../../model/slice/articleDetailsSlice";

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

		let content;

		if (isLoading) {
			content = <Loader />;
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
			content = <div>{article.id}</div>;
		}

		return (
			<div className={classNames(styles.articleDetails, {}, [className])}>
				{content}
			</div>
		);
	}
);
