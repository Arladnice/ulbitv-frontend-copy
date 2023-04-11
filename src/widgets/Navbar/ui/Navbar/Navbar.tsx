import { getUserAuthData, userActions } from "entities/User";
import { memo, ReactElement, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { LoginModal } from "features/AuthByUsername";
import { classNames } from "shared/lib";
import { Button, EButtonTheme } from "shared/ui";
import { useAppDispatch } from "shared/hooks/useAppDispatch";

import { INavbarProps } from "./interfaces";
import styles from "./Navbar.module.scss";

export const Navbar = memo(({ className = "" }: INavbarProps): ReactElement => {
	const { t } = useTranslation();
	const dispatch = useAppDispatch();
	const [isAuthModal, setIsAuthModal] = useState(false);
	const authData = useSelector(getUserAuthData);

	const onOpenModal = useCallback(() => setIsAuthModal(true), []);
	const onCloseModal = useCallback(() => setIsAuthModal(false), []);

	const onLogoutClick = useCallback(() => {
		dispatch(userActions.logout());
	}, [dispatch]);

	if (authData) {
		return (
			<header className={classNames(styles.navbar, {}, [className])}>
				<Button
					theme={EButtonTheme.ClearInverted}
					onClick={onLogoutClick}
					className={styles.links}
				>
					{t("Выйти")}
				</Button>
			</header>
		);
	}

	return (
		<header className={classNames(styles.navbar, {}, [className])}>
			<Button
				theme={EButtonTheme.ClearInverted}
				onClick={onOpenModal}
				className={styles.links}
			>
				{t("Войти")}
			</Button>

			<LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
		</header>
	);
});
