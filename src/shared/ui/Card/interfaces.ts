import { HTMLAttributes, ReactNode } from "react";

export interface ICardProps extends HTMLAttributes<HTMLDivElement> {
	className?: string;
	children: ReactNode;
}
