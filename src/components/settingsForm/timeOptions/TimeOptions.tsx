import { useSelector } from "react-redux";

import { RootState, useAppDispatch } from "../../../store/Store";
import * as SettingsSlice from "../../../store/features/settings/SettingsSlice";

import styles from "./TimeOptions.module.scss";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

const TimeOptions = () => {
	const dispatch = useAppDispatch();

	const formPomodoroMinutes: string = useSelector(
		(state: RootState) => state.settings.formPomodoroMinutes
	);
	const formShortBreakMinutes: string = useSelector(
		(state: RootState) => state.settings.formShortBreakMinutes
	);
	const formLongBreakMinutes: string = useSelector(
		(state: RootState) => state.settings.formLongBreakMinutes
	);

	const formatNumber = (num: string): string => {
		const formattedNum = Number(num);

		if (!formattedNum) {
			return "1";
		} else if (formattedNum > 60) {
			return "60";
		} else if (formattedNum < 0) {
			return "1";
		}

		return Math.round(formattedNum).toString();
	};

	const generateNumberInput = (
		name: string,
		value: string,
		setter: ActionCreatorWithPayload<string, string>
	): JSX.Element => {
		return (
			<div className={styles.timeOptionsContainer}>
				<label htmlFor={name}>{name}</label>
				<input
					type="number"
					id={name}
					name={name}
					min="1"
					max="60"
					value={value}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						dispatch(setter(e.target.value))
					}
					onBlur={(e) => {
						dispatch(setter(formatNumber(e.target.value)));
					}}
				/>
			</div>
		);
	};

	return (
		<div className={styles.timeOptions}>
			{generateNumberInput(
				"pomodoro",
				formPomodoroMinutes,
				SettingsSlice.setFormPomodoroMinutes
			)}

			{generateNumberInput(
				"shortBreak",
				formShortBreakMinutes,
				SettingsSlice.setFormShortBreakMinutes
			)}

			{generateNumberInput(
				"longBreak",
				formLongBreakMinutes,
				SettingsSlice.setFormLongBreakMinutes
			)}
		</div>
	);
};

export default TimeOptions;
