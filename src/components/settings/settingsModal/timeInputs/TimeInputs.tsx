import { useSelector } from "react-redux";
import ITimeInputsProps from "./ITimeInputsProps";

import styles from "./TimeInputs.module.scss";
import { RootState, useAppDispatch } from "../../../../store/Store";
import {
	setCurrentLongBreakMinutes,
	setCurrentPomodoroMinutes,
	setCurrentShortBreakMinutes,
} from "../../../../store/features/settings/SettingsSlice";

const TimeInputs = (props: ITimeInputsProps) => {
	const dispatch = useAppDispatch();

	const currentPomodoroMinutes: string = useSelector(
		(state: RootState) => state.settings.currentPomodoroMinutes
	);
	const currentShortBreakMinutes: string = useSelector(
		(state: RootState) => state.settings.currentShortBreakMinutes
	);

	const currentLongBreakMinutes: string = useSelector(
		(state: RootState) => state.settings.currentLongBreakMinutes
	);

	const formatNumber = (num: string): string => {
		const formattedNum = Number(num);

		if (!formattedNum) {
			return "0";
		} else if (formattedNum > 60) {
			return "60";
		} else if (formattedNum < 0) {
			return "0";
		}

		return formattedNum.toString();
	};

	return (
		<div className={styles.timeInputs}>
			<div className={styles.timeInputContainer}>
				<label htmlFor="pomodoro">pomodoro</label>
				<input
					type="number"
					id="pomodoro"
					name="pomodoro"
					min="1"
					max="60"
					value={currentPomodoroMinutes}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						dispatch(setCurrentPomodoroMinutes(e.target.value))
					}
					onBlur={(e) => {
						dispatch(
							setCurrentPomodoroMinutes(
								formatNumber(e.target.value)
							)
						);
					}}
				/>
			</div>
			<div className={styles.timeInputContainer}>
				<label htmlFor="pomodoro">short break</label>
				<input
					type="number"
					id="pomodoro"
					name="pomodoro"
					min="1"
					max="60"
					value={currentShortBreakMinutes}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						dispatch(setCurrentShortBreakMinutes(e.target.value))
					}
					onBlur={(e) => {
						dispatch(
							setCurrentShortBreakMinutes(
								formatNumber(e.target.value)
							)
						);
					}}
				/>
			</div>
			<div className={styles.timeInputContainer}>
				<label htmlFor="pomodoro">long break</label>
				<input
					type="number"
					id="pomodoro"
					name="pomodoro"
					min="1"
					max="60"
					value={currentLongBreakMinutes}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						dispatch(setCurrentLongBreakMinutes(e.target.value))
					}
					onBlur={(e) => {
						dispatch(
							setCurrentLongBreakMinutes(
								formatNumber(e.target.value)
							)
						);
					}}
				/>
			</div>
		</div>
	);
};

export default TimeInputs;
