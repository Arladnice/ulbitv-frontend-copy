import { ISidebarItem } from "../../model/types/sidebar";

export interface ISidebarItemProps {
	item: ISidebarItem;
	collapsed: boolean;
	authOnly?: boolean;
}
