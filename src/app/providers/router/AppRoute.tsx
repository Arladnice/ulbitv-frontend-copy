import { memo, ReactElement, Suspense, useCallback } from "react";
import { Route, Routes } from "react-router-dom";

import { PageLoader } from "widgets/PageLoader";

import { routeConfig } from "./routeConfig";
import { RequireAuth } from "./RequireAuth";
import { TAppRoutesProps } from "./interfaces";

export const AppRoute = memo((): ReactElement => {
	const renderWithWrapper = useCallback((route: TAppRoutesProps) => {
		const element = (
			<Suspense fallback={<PageLoader />}>{route.element}</Suspense>
		);

		return (
			<Route
				key={route.path}
				path={route.path}
				element={
					route.authOnly ? <RequireAuth>{element}</RequireAuth> : element
				}
			/>
		);
	}, []);

	return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
});
