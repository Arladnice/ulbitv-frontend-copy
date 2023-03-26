import { createContext } from "react";

import { ETheme, IThemeContextProps } from "./interfaces";

export const ThemeContext = createContext<IThemeContextProps>({
	theme: ETheme.Light,
	setTheme: (theme: ETheme) => undefined,
});
