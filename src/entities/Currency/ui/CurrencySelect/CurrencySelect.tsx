import { memo, ReactElement, useCallback } from "react";
import { classNames } from "shared/lib";

import { Select } from "shared/ui";

import { ECurrency } from "../../model/types/currency";

import { ICurrencySelectProps } from "./interfaces";

const selectOptions = [
	{
		value: ECurrency.RUB,
		content: ECurrency.RUB,
	},
	{
		value: ECurrency.USD,
		content: ECurrency.USD,
	},
];

export const CurrencySelect = memo(
	({
		className = "",
		value,
		onChange,
		readonly,
	}: ICurrencySelectProps): ReactElement => {
		const onChangeHandler = useCallback(
			(value: string) => {
				onChange?.(value as ECurrency);
			},
			[onChange]
		);

		return (
			<Select
				className={classNames("", {}, [className])}
				label="Укажите валюту"
				options={selectOptions}
				onChange={onChangeHandler}
				value={value}
				readonly={readonly}
			/>
		);
	}
);
