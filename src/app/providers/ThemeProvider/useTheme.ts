/* eslint-disable indent */
import { useContext, useEffect } from "react";

import { ThemeContext } from "./ThemeContext";
import { ETheme, IUseThemeResult } from "./interfaces";
import { LOCAL_STORAGE_THEME_KEY } from "./constants";

export const useTheme = (): IUseThemeResult => {
	const { setTheme, theme } = useContext(ThemeContext);

	const toggleTheme = (): void => {
		let newTheme: ETheme;

		switch (theme) {
			case ETheme.Light:
				newTheme = ETheme.Dark;
				break;
			case ETheme.Dark:
				newTheme = ETheme.Orange;
				break;
			case ETheme.Orange:
				newTheme = ETheme.Light;
				break;
			default:
				newTheme = ETheme.Light;
				break;
		}

		setTheme(newTheme);
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
	};

	useEffect(() => {
		document.body.className = theme;
	}, [theme]);

	return { theme, toggleTheme };
};
