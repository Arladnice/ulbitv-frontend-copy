import { memo, useCallback } from "react";

import { classNames } from "shared/lib/classNames/classNames";
import { Button, EButtonTheme, Icon } from "shared/ui";
import { CopyIcon } from "shared/assets/icons";

import { ICodeProps } from "./interfaces";
import styles from "./Code.module.scss";

export const Code = memo(({ className = "", text }: ICodeProps) => {
	const onCopy = useCallback(() => {
		navigator.clipboard.writeText(text);
	}, [text]);

	return (
		<pre className={classNames(styles.code, {}, [className])}>
			<Button
				className={styles.copyButton}
				theme={EButtonTheme.Clear}
				onClick={onCopy}
			>
				<Icon className={styles.icon} Svg={CopyIcon} />
			</Button>

			<code>{text}</code>
		</pre>
	);
});
