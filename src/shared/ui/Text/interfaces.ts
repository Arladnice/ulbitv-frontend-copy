export enum ETextTheme {
	Primary = "primary",
	Error = "error",
}

export enum ETextAlign {
	Left = "left",
	Center = "center",
	Right = "right",
}

export enum ETextSize {
	M = "size_m",
	L = "size_l",
}

export interface ITextProps {
	title?: string;
	text?: string;
	className?: string;
	theme?: ETextTheme;
	align?: ETextAlign;
	size?: ETextSize;
}
