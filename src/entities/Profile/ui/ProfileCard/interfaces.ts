import { ECountry } from "entities/Country";
import { ECurrency } from "entities/Currency";

import { IProfile } from "../../model/types/profile";

export interface IProfileCardProps {
	className?: string;
	data?: IProfile;
	isLoading?: boolean;
	error?: string;
	readonly?: boolean;
	onChangeFirstName?: (value: string) => void;
	onChangeLastName?: (value: string) => void;
	onChangeCity?: (value: string) => void;
	onChangeAge?: (value: string) => void;
	onChangeUsername?: (value: string) => void;
	onChangeAvatar?: (value: string) => void;
	onChangeCurrency?: (currency: ECurrency) => void;
	onChangeCountry?: (country: ECountry) => void;
}
