import { memo, ReactElement, Suspense, useMemo } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

import { PageLoader } from "widgets/PageLoader";
import { routeConfig } from "app/providers/router";
import { getUserAuthData } from "entities/User";

export const AppRoute = memo((): ReactElement => {
	const isAuth = useSelector(getUserAuthData);

	const routes = useMemo(
		() =>
			Object.values(routeConfig).filter(({ authOnly }) => {
				if (authOnly && !isAuth) {
					return false;
				}

				return true;
			}),
		[isAuth]
	);

	return (
		<Suspense fallback={<PageLoader />}>
			<Routes>
				{routes.map(({ path, element }) => (
					<Route
						path={path}
						element={<div className="page-wrapper">{element}</div>}
						key={path}
					/>
				))}
			</Routes>
		</Suspense>
	);
});
