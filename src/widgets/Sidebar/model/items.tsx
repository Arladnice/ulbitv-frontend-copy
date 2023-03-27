import { SVGProps, VFC } from "react";

import { routeConfig } from "app/providers/router";

import {
	AboutIcon,
	MainIcon,
	ProfileIcon,
	ArticleIcon,
} from "shared/assets/icons";

export interface ISidebarItem {
	path: string;
	text: string;
	icon: VFC<SVGProps<SVGSVGElement>>;
	authOnly?: boolean;
}

export const SidebarItemsList: ISidebarItem[] = [
	{
		icon: MainIcon,
		path: routeConfig.main.path || "",
		text: "Главная",
	},
	{
		icon: AboutIcon,
		path: routeConfig.about.path || "",
		text: "О сайте",
	},
	{
		icon: ProfileIcon,
		path: routeConfig.profile.path || "",
		text: "Профиль",
		authOnly: true,
	},
	{
		icon: ArticleIcon,
		path: routeConfig.articles.path || "",
		text: "Статьи",
		authOnly: true,
	},
];
