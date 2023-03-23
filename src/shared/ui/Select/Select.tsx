import { ChangeEvent, memo, ReactElement, useMemo } from "react";

import { classNames } from "shared/lib";

import { ISelectProps } from "./interfaces";
import styles from "./Select.module.scss";

export const Select = memo(
	({
		className = "",
		label,
		onChange,
		options,
		value,
		readonly,
	}: ISelectProps): ReactElement => {
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
			onChange?.(event.target.value);
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
	}
);