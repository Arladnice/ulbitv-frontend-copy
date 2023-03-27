import { ReactElement } from "react";
import { useSelector } from "react-redux";

import { getUserAuthData } from "entities/User";

import { Navigate, useLocation } from "react-router-dom";
import { IRequireAuth } from "./interfaces";
import { RoutePath } from "./routePath";

export const RequireAuth = ({ children }: IRequireAuth): ReactElement => {
	const auth = useSelector(getUserAuthData);
	const location = useLocation();

	if (!auth) {
		return <Navigate to={RoutePath.main} replace state={{ from: location }} />;
	}

	return children;
};
