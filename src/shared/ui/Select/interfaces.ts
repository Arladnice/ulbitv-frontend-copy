export interface ISelectOption {
	value: string;
	content: string;
}

export interface ISelectProps {
	className?: string;
	label?: string;
	options?: ISelectOption[];
	value?: string;
	onChange?: (value: string) => void;
	readonly?: boolean;
}
