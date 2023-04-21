import { HTMLAttributes, ReactNode } from "react";

export enum ECardTheme {
	Normal = "normal",
	Outlined = "outlined",
}

export interface ICardProps extends HTMLAttributes<HTMLDivElement> {
	className?: string;
	children: ReactNode;
	theme?: ECardTheme;
}
