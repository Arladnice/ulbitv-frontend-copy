import { ReactElement, memo, useCallback, useEffect } from "react";
import { useSelector } from "react-redux";

import { classNames } from "shared/lib";
import { ArticleList, ArticleViewSwitch, EArticleView } from "entities/Article";
import {
	TReducersList,
	useDynamicReducersLoader,
} from "shared/hooks/useDynamicReducersLoader";
import { useAppDispatch } from "shared/hooks/useAppDispatch";
import { Page } from "widgets/Page";

import {
	articlesPageAction,
	articlesPageReducer,
	getArticle,
} from "../model/slices/articlesPageSlice";

import {
	getArticlesPageError,
	getArticlesPageIsLoading,
	getArticlesPageView,
} from "../model/selectors/articles";
import { initArticlesPage } from "../model/services/initArticlesPage";
import { fetchNextArticlesPage } from "../model/services/fetchNextArticlesPage";

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

	const onChangeView = useCallback(
		(view: EArticleView) => {
			dispatch(articlesPageAction.setView(view));
		},
		[dispatch]
	);

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
			<ArticleViewSwitch view={view} onChangeView={onChangeView} />
			<ArticleList view={view} articles={articles} isLoading={isLoading} />
		</Page>
	);
};

export default memo(ArticlesPage);
