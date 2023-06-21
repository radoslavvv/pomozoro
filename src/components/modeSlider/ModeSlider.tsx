import { useSelector } from "react-redux";
import IModeSliderProps from "./IModeSliderProps";

import styles from "./ModeSlider.module.scss";
import { RootState, useAppDispatch } from "../../store/Store";
import ClockMode from "../../shared/enums/ClockMode";
import { setClockMode } from "../../store/features/clock/clockSlice";

const ModeSlider = (props: IModeSliderProps) => {
	const dispatch = useAppDispatch();

	const clockMode: any = useSelector(
		(state: RootState) => state.clock.clockMode
	);

	const modeClickHandler = (clockMode: ClockMode) => {
		dispatch(setClockMode(clockMode));
	};

	return (
		<div className={styles.modeSlider}>
			<div
				onClick={() => modeClickHandler(ClockMode.Pomodoro)}
				className={`${styles.modeSlider__option} ${
					clockMode === ClockMode.Pomodoro ? styles.selected : ""
				}`}
			>
				pomodoro
			</div>
			<div
				onClick={() => modeClickHandler(ClockMode.ShortBreak)}
				className={`${styles.modeSlider__option} ${
					clockMode === ClockMode.ShortBreak ? styles.selected : ""
				}`}
			>
				short break
			</div>
			<div
				onClick={() => modeClickHandler(ClockMode.LongBreak)}
				className={`${styles.modeSlider__option} ${
					clockMode === ClockMode.LongBreak ? styles.selected : ""
				}`}
			>
				long break
			</div>
		</div>
	);
};

export default ModeSlider;
