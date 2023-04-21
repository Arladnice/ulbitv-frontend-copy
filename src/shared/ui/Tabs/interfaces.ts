import { ReactNode } from "react";

export interface ITabItem {
	value: string;
	content: ReactNode;
}

export interface ITabsProps {
	className?: string;
	tabs: ITabItem[];
	selectedTad: string;
	onTabClick: (tab: ITabItem) => void;
}
