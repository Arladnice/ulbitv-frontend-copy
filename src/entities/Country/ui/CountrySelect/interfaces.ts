import { ECountry } from "../../model/types/country";

export interface ICountrySelectProps {
	className?: string;
	value?: ECountry;
	onChange?: (country: ECountry) => void;
	readonly?: boolean;
}
