import { ReactElement, memo, useCallback, useEffect } from "react";
import { useSelector } from "react-redux";

import { classNames } from "shared/lib";
import { ArticleList } from "entities/Article";
import {
	TReducersList,
	useDynamicReducersLoader,
} from "shared/hooks/useDynamicReducersLoader";
import { useAppDispatch } from "shared/hooks/useAppDispatch";
import { Page } from "widgets/Page";

import {
	articlesPageReducer,
	getArticle,
} from "../../model/slices/articlesPageSlice";

import {
	getArticlesPageError,
	getArticlesPageIsLoading,
	getArticlesPageView,
} from "../../model/selectors/articlesPageSelectors";
import { initArticlesPage } from "../../model/services/initArticlesPage";
import { fetchNextArticlesPage } from "../../model/services/fetchNextArticlesPage";

import { ArticlesPageFilters } from "../ArticlesPageFilters/ArticlesPageFilters";

import { IArticlesPageProps } from "./interfaces";
import styles from "./ArticlesPage.module.scss";

const reducers: TReducersList = {
	articlePage: articlesPageReducer,
};

const ArticlesPage = ({ className = "" }: IArticlesPageProps): ReactElement => {
	useDynamicReducersLoader({ reducers, removeAfterUnmount: false });

	const dispatch = useAppDispatch();

	const articles = useSelector(getArticle.selectAll);

	const isLoading = useSelector(getArticlesPageIsLoading);
	const error = useSelector(getArticlesPageError);
	const view = useSelector(getArticlesPageView);

	const onLoadNextPage = useCallback(() => {
		dispatch(fetchNextArticlesPage());
	}, [dispatch]);

	useEffect(() => {
		dispatch(initArticlesPage());
	}, [dispatch]);

	return (
		<Page
			className={classNames(styles.articlesPage, {}, [className])}
			onScrollEnd={onLoadNextPage}
		>
			<ArticlesPageFilters />
			<ArticleList
				view={view}
				articles={articles}
				isLoading={isLoading}
				className={styles.list}
			/>
		</Page>
	);
};

export default memo(ArticlesPage);
