import { AboutPage } from "pages/AboutPage";
import { ArticleDetailPage } from "pages/ArticleDetailPage";
import { ArticlesPage } from "pages/ArticlesPage";
import { MainPage } from "pages/MainPage";
import { NotFoundPage } from "pages/NotFoundPage";
import { ProfilePage } from "pages/ProfilePage";

import { EAppRoutes, TAppRoutesProps } from "./interfaces";
import { RoutePath } from "./routePath";

export const routeConfig: Record<EAppRoutes, TAppRoutesProps> = {
	[EAppRoutes.Main]: {
		path: RoutePath.main,
		element: <MainPage />,
	},
	[EAppRoutes.About]: {
		path: RoutePath.about,
		element: <AboutPage />,
	},
	[EAppRoutes.Articles]: {
		path: RoutePath.articles,
		element: <ArticlesPage />,
		authOnly: true,
	},
	[EAppRoutes.ArticleDetails]: {
		path: `${RoutePath.articleDetail}/:id`,
		element: <ArticleDetailPage />,
		authOnly: true,
	},
	[EAppRoutes.Profile]: {
		path: `${RoutePath.profile}/:id`,
		element: <ProfilePage />,
		authOnly: true,
	},
	[EAppRoutes.NotFound]: {
		path: RoutePath.not_found,
		element: <NotFoundPage />,
	},
};
