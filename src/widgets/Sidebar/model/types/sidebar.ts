import { SVGProps, VFC } from "react";

export interface ISidebarItem {
	path: string;
	text: string;
	icon: VFC<SVGProps<SVGSVGElement>>;
	authOnly?: boolean;
}
