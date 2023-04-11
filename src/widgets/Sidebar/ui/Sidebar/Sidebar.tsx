import { memo, ReactElement, useMemo, useState } from "react";
import { useSelector } from "react-redux";

import { classNames } from "shared/lib";
import {
	Button,
	EButtonTheme,
	LangSwitcher,
	ThemeSwitcher,
	EButtonSize,
} from "shared/ui";

import { getSidebarItems } from "../../model/selectors/getSidebarItems";

import { SidebarItem } from "../SidebarItem/SidebarItem";

import { ISidebarProps } from "./interfaces";
import styles from "./Sidebar.module.scss";

export const Sidebar = memo(
	({ className = "" }: ISidebarProps): ReactElement => {
		const [collapsed, setCollapsed] = useState(false);

		const sidebarItemsList = useSelector(getSidebarItems);

		const onToggleClick = (): void => setCollapsed((prev) => !prev);

		const itemsList = useMemo(
			() =>
				sidebarItemsList.map((item) => (
					<SidebarItem item={item} collapsed={collapsed} key={item.path} />
				)),
			[collapsed, sidebarItemsList]
		);

		return (
			<menu
				data-testid="Sidebar"
				className={classNames(
					styles.sidebar,
					{ [styles.collapsed]: collapsed },
					[className]
				)}
			>
				<Button
					className={styles.collapsedButton}
					data-testid="Sidebar-toggle"
					type="button"
					onClick={onToggleClick}
					square
					size={EButtonSize.L}
					theme={EButtonTheme.BackgroundInverted}
				>
					{collapsed ? ">" : "<"}
				</Button>

				<div className={styles.items}>{itemsList}</div>

				<div className={styles.switchers}>
					<ThemeSwitcher />
					<LangSwitcher short={collapsed} />
				</div>
			</menu>
		);
	}
);
