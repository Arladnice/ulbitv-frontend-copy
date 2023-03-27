import { ReactElement } from "react";
import { RouteProps } from "react-router-dom";

export enum EAppRoutes {
	Main = "main",
	About = "about",
	Articles = "articles",
	ArticleDetails = "articleDetail",
	Profile = "profile",
	NotFound = "not_found",
}

export type TAppRoutesProps = RouteProps & {
	authOnly?: boolean;
};

export interface IRequireAuth {
	children: ReactElement;
}
