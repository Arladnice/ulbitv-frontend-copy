import { useCallback, useState } from "react";

import { IUseHover } from "./interfaces";

export const useHover = (): IUseHover => {
	const [isHover, setIsHover] = useState(false);

	const onMouseEnter = useCallback(() => {
		setIsHover(true);
	}, []);

	const onMouseLeave = useCallback(() => {
		setIsHover(false);
	}, []);

	return { onMouseEnter, onMouseLeave, isHover };
};
