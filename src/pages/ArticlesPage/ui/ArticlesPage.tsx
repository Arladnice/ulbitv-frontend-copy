import { ReactElement, memo, useEffect } from "react";
import { useSelector } from "react-redux";

import { classNames } from "shared/lib";
import { ArticleList } from "entities/Article";
import {
	TReducersList,
	useDynamicReducersLoader,
} from "shared/hooks/useDynamicReducersLoader";
import { useAppDispatch } from "shared/hooks/useAppDispatch";

import {
	articlesPageReducer,
	getArticle,
} from "../model/slices/articlesPageSlice";
import { fetchArticlesList } from "../model/services/fetchArticlesList";
import {
	getArticlesPageError,
	getArticlesPageIsLoading,
	getArticlesPageView,
} from "../model/selectors/articles";

import { IArticlesPageProps } from "./interfaces";
import styles from "./ArticlesPage.module.scss";

const reducers: TReducersList = {
	articlePage: articlesPageReducer,
};

const ArticlesPage = ({ className = "" }: IArticlesPageProps): ReactElement => {
	useDynamicReducersLoader({ reducers });

	const dispatch = useAppDispatch();

	const articles = useSelector(getArticle.selectAll);

	const isLoading = useSelector(getArticlesPageIsLoading);
	const error = useSelector(getArticlesPageError);
	const view = useSelector(getArticlesPageView);

	useEffect(() => {
		dispatch(fetchArticlesList());
	}, [dispatch]);

	return (
		<div className={classNames(styles.articlesPage, {}, [className])}>
			<ArticleList view={view} articles={articles} isLoading={isLoading} />
		</div>
	);
};

export default memo(ArticlesPage);
