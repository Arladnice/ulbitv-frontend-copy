import { ReactElement, memo, useCallback } from "react";
import { useSelector } from "react-redux";

import { classNames } from "shared/lib";
import {
	ArticleSortSelector,
	ArticleViewSwitch,
	EArticleSortField,
	EArticleType,
	EArticleView,
} from "entities/Article";
import { Card, Input } from "shared/ui";
import { TSortOrder } from "shared/types";
import { useAppDispatch } from "shared/hooks/useAppDispatch";
import { useDebounce } from "shared/hooks/useDebounce";

import { ArticleTypeTabs } from "features/ArticleTypeTabs";
import { fetchArticlesList } from "../../model/services/fetchArticlesList";
import { articlesPageAction } from "../../model/slices/articlesPageSlice";
import {
	getArticlesPageOrder,
	getArticlesPageSearch,
	getArticlesPageSort,
	getArticlesPageType,
	getArticlesPageView,
} from "../../model/selectors/articlesPageSelectors";

import { IArticlesPageFiltersProps } from "./interfaces";
import styles from "./ArticlesPageFilters.module.scss";

export const ArticlesPageFilters = memo(
	({ className = "" }: IArticlesPageFiltersProps): ReactElement => {
		const dispatch = useAppDispatch();

		const view = useSelector(getArticlesPageView);
		const order = useSelector(getArticlesPageOrder);
		const sort = useSelector(getArticlesPageSort);
		const search = useSelector(getArticlesPageSearch);
		const articleType = useSelector(getArticlesPageType);

		const fetchData = useCallback(() => {
			dispatch(
				fetchArticlesList({
					replace: true,
				})
			);
		}, [dispatch]);

		const debouncedFetchData = useDebounce(fetchData, 500);

		const onChangeView = useCallback(
			(view: EArticleView) => {
				dispatch(articlesPageAction.setView(view));
			},
			[dispatch]
		);

		const onChangeOrder = useCallback(
			(newOrder: TSortOrder) => {
				dispatch(articlesPageAction.setOrder(newOrder));
				dispatch(articlesPageAction.setPage(1));
				fetchData();
			},
			[dispatch, fetchData]
		);

		const onChangeSort = useCallback(
			(newSort: EArticleSortField) => {
				dispatch(articlesPageAction.setSort(newSort));
				dispatch(articlesPageAction.setPage(1));
				fetchData();
			},
			[dispatch, fetchData]
		);

		const onChangeSearch = useCallback(
			(value: string) => {
				dispatch(articlesPageAction.setSearch(value));
				dispatch(articlesPageAction.setPage(1));
				debouncedFetchData();
			},
			[dispatch, debouncedFetchData]
		);

		const onChangeType = useCallback(
			(value: EArticleType) => {
				dispatch(articlesPageAction.setType(value));
				dispatch(articlesPageAction.setPage(1));
				fetchData();
			},
			[dispatch, fetchData]
		);

		return (
			<div className={classNames(styles.articlesPageFilters, {}, [className])}>
				<div className={styles.sortWrapper}>
					<ArticleSortSelector
						order={order}
						sort={sort}
						onChangeOrder={onChangeOrder}
						onChangeSort={onChangeSort}
					/>
					<ArticleViewSwitch view={view} onChangeView={onChangeView} />
				</div>

				<Card className={styles.search}>
					<Input
						placeholder="Поиск"
						onChange={onChangeSearch}
						value={search}
						className={styles.searchInput}
					/>
				</Card>

				<ArticleTypeTabs onTabClick={onChangeType} selectedTad={articleType} />
			</div>
		);
	}
);
