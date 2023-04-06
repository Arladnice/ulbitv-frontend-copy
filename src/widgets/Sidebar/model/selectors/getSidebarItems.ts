import { createSelector } from "@reduxjs/toolkit";

import { RoutePath } from "app/providers/router";
import { getUserAuthData } from "entities/User";
import {
	AboutIcon,
	MainIcon,
	ProfileIcon,
	ArticleIcon,
} from "shared/assets/icons";

import { ISidebarItem } from "../types/sidebar";

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
	const sidebarItemsList: ISidebarItem[] = [
		{
			icon: MainIcon,
			path: RoutePath.main || "",
			text: "Главная",
		},
		{
			icon: AboutIcon,
			path: RoutePath.about || "",
			text: "О сайте",
		},
	];

	if (userData) {
		sidebarItemsList.push(
			{
				icon: ProfileIcon,
				path: `${RoutePath.profile}/${userData.id}` || "",
				text: "Профиль",
				authOnly: true,
			},
			{
				icon: ArticleIcon,
				path: RoutePath.articles || "",
				text: "Статьи",
				authOnly: true,
			}
		);
	}

	return sidebarItemsList;
});
