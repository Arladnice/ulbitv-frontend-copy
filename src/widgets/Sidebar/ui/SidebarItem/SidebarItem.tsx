import { memo, ReactElement } from "react";
import { useSelector } from "react-redux";

import { classNames } from "shared/lib";
import { AppLink, EAppLinkTheme } from "shared/ui";
import { getUserAuthData } from "entities/User";

import styles from "./SidebarItem.module.scss";
import { ISidebarItemProps } from "./interfaces";

export const SidebarItem = memo(
	({ item, collapsed }: ISidebarItemProps): ReactElement | null => {
		const { icon: Icon, path, text, authOnly } = item;
		const isAuth = useSelector(getUserAuthData);

		if (authOnly && !isAuth) {
			return null;
		}

		return (
			<AppLink
				theme={EAppLinkTheme.Secondary}
				to={path}
				className={classNames(styles.item, { [styles.collapsed]: collapsed })}
			>
				<Icon className={styles.icon} />
				<span className={styles.link}>{text}</span>
			</AppLink>
		);
	}
);
