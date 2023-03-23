import { ECurrency } from "../../model/types/currency";

export interface ICurrencySelectProps {
	className?: string;
	value?: ECurrency;
	onChange?: (currency: ECurrency) => void;
	readonly?: boolean;
}
