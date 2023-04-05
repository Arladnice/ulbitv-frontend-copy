import { ReactElement, Suspense, useEffect } from "react";
import { useSelector } from "react-redux";

import { useTheme } from "app/providers/ThemeProvider";
import { AppRoute } from "app/providers/router";
import { classNames } from "shared/lib";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { getUserInited, userActions } from "entities/User";
import { useAppDispatch } from "shared/hooks/useAppDispatch";

const App = (): ReactElement => {
	const { theme } = useTheme();
	const dispatch = useAppDispatch();

	const inited = useSelector(getUserInited);

	useEffect(() => {
		dispatch(userActions.initAuthData());
	}, [dispatch]);

	return (
		<div className={classNames("app", {}, [theme])}>
			<Suspense fallback="">
				<Navbar />

				<div className="content-page">
					<Sidebar />
					{inited && <AppRoute />}
				</div>
			</Suspense>
		</div>
	);
};

export default App;
