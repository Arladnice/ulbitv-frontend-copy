import { ChangeEvent, ReactElement, useMemo } from "react";

import { classNames } from "shared/lib";

import { ISelectProps } from "./interfaces";
import styles from "./Select.module.scss";

export const Select = <T extends string>({
	className = "",
	label,
	onChange,
	options,
	value,
	readonly,
}: ISelectProps<T>): ReactElement => {
	const optionsList = useMemo(
		() =>
			options?.map(({ content, value }) => (
				<option key={value} className={styles.option} value={value}>
					{content}
				</option>
			)),
		[options]
	);

	const onChangeHandle = (event: ChangeEvent<HTMLSelectElement>) => {
		onChange?.(event.target.value as T);
	};

	return (
		<div className={classNames(styles.wrapper, {}, [className])}>
			{label && <span className={styles.label}>{`${label} >`}</span>}

			<select
				className={styles.select}
				value={value}
				onChange={onChangeHandle}
				name=""
				id=""
				disabled={readonly}
			>
				{optionsList}
			</select>
		</div>
	);
};
