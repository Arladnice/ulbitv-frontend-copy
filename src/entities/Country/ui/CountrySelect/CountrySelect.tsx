import { memo, ReactElement, useCallback } from "react";
import { classNames } from "shared/lib";

import { Select } from "shared/ui";

import { ECountry } from "../../model/types/country";

import { ICountrySelectProps } from "./interfaces";

const selectOptions = [
	{
		value: ECountry.Russia,
		content: ECountry.Russia,
	},
	{
		value: ECountry.Belarus,
		content: ECountry.Belarus,
	},
];

export const CountrySelect = memo(
	({
		className = "",
		value,
		onChange,
		readonly,
	}: ICountrySelectProps): ReactElement => {
		const onChangeHandler = useCallback(
			(value: string) => {
				onChange?.(value as ECountry);
			},
			[onChange]
		);

		return (
			<Select
				className={classNames("", {}, [className])}
				label="Выберите страну"
				options={selectOptions}
				onChange={onChangeHandler}
				value={value}
				readonly={readonly}
			/>
		);
	}
);
