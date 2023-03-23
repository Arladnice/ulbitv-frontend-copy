import { RouteProps } from "react-router-dom";

export enum EAppRoutes {
	Main = "main",
	About = "about",
	Profile = "profile",
	NotFound = "not_found",
}

export type TAppRoutesProps = RouteProps & {
	authOnly?: boolean;
};
