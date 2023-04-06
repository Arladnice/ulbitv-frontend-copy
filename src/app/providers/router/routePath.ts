import { EAppRoutes } from "./interfaces";

export const RoutePath: Record<EAppRoutes, string> = {
	[EAppRoutes.Main]: "/",
	[EAppRoutes.About]: "/about",
	[EAppRoutes.Articles]: "/articles",
	[EAppRoutes.ArticleDetails]: "/articles", // + /:id
	[EAppRoutes.Profile]: "/profile", // + /:id
	[EAppRoutes.NotFound]: "*",
};
