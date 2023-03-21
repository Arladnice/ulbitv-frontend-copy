import { ChangeEvent, memo, ReactElement } from "react";

import { classNames } from "shared/lib";

import { IInputProps } from "./interfaces";
import styles from "./Input.module.scss";

export const Input = memo(
	({
		className = "",
		value,
		type = "text",
		onChange,
		readonly = false,
		...otherProps
	}: IInputProps): ReactElement => {
		const onChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
			onChange?.(event.target.value);
		};

		const mods: Record<string, boolean> = {
			[styles.readonly]: readonly,
		};

		return (
			<input
				className={classNames(styles.button, mods, [className])}
				type={type}
				value={value}
				onChange={onChangeValue}
				readOnly={readonly}
				{...otherProps}
			/>
		);
	}
);
