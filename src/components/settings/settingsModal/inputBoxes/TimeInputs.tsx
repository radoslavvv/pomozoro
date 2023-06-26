import { useSelector } from "react-redux";
import ITimeInputsProps from "./ITimeInputsProps";

import styles from "./TimeInputs.module.scss";
import { RootState, useAppDispatch } from "../../../../store/Store";

const TimeInputs = (props: ITimeInputsProps) => {
	const dispatch = useAppDispatch();

	const pomodoroMinutes: number = useSelector(
		(state: RootState) => state.settings.pomodoroMinutes
	);

	const shortBreakMinutes: number = useSelector(
		(state: RootState) => state.settings.shortBreakMinutes
	);

	const longBreakMinutes: number = useSelector(
		(state: RootState) => state.settings.longBreakMinutes
	);

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
					value={pomodoroMinutes}
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
					value={shortBreakMinutes}
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
					value={longBreakMinutes}
				/>
			</div>
		</div>
	);
};

export default TimeInputs;
