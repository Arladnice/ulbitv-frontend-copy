import { memo, ReactElement, useCallback } from "react";
import { useSelector } from "react-redux";

import { classNames } from "shared/lib";
import { Button, EButtonTheme, Input } from "shared/ui";
import {
	TReducersList,
	useDynamicReducersLoader,
} from "shared/hooks/useDynamicReducersLoader";
import { useAppDispatch } from "shared/hooks/useAppDispatch";

import {
	getAddCommentFormError,
	getAddCommentFormText,
} from "../../model/selectors/addCommentFormSelectors";
import {
	addNewCommentActions,
	addNewCommentReducer,
} from "../../model/slice/addNewCommentSlice";

import { IAddCommentFormProps } from "./interfaces";
import styles from "./AddCommentForm.module.scss";

const reducers: TReducersList = {
	addNewComment: addNewCommentReducer,
};

const AddCommentForm = memo(
	({ className = "", onSendComment }: IAddCommentFormProps): ReactElement => {
		useDynamicReducersLoader({ reducers });

		const dispatch = useAppDispatch();

		const text = useSelector(getAddCommentFormText);
		const error = useSelector(getAddCommentFormError);

		const onCommentTextChange = useCallback(
			(value: string) => {
				dispatch(addNewCommentActions.setText(value));
			},
			[dispatch]
		);

		const onSendCommentText = useCallback(() => {
			onSendComment(text || "");
			onCommentTextChange("");
		}, [onCommentTextChange, onSendComment, text]);

		return (
			<div className={classNames(styles.addCommentForm, {}, [className])}>
				<Input
					placeholder="Введите текст комментария"
					value={text}
					onChange={onCommentTextChange}
					className={styles.input}
				/>
				<Button theme={EButtonTheme.Outline} onClick={onSendCommentText}>
					Отправить
				</Button>
			</div>
		);
	}
);

export default AddCommentForm;
