export interface ISelectOption<T extends string> {
	value: T;
	content: string;
}

export interface ISelectProps<T extends string> {
	className?: string;
	label?: string;
	options?: ISelectOption<T>[];
	value?: T;
	onChange?: (value: T) => void;
	readonly?: boolean;
}
