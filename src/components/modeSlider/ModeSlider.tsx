import { useSelector } from "react-redux";
import IModeSliderProps from "./IModeSliderProps";

import styles from "./ModeSlider.module.scss";
import { RootState, useAppDispatch } from "../../store/Store";
import ClockMode from "../../shared/enums/ClockMode";
import {
	pause,
	reset,
	setClockMode,
} from "../../store/features/clock/ClockSlicee.ts";

const ModeSlider = (props: IModeSliderProps) => {
	const dispatch = useAppDispatch();

	const clockMode: any = useSelector(
		(state: RootState) => state.clock.clockMode
	);

	const modeClickHandler = (clockMode: ClockMode) => {
		dispatch(setClockMode(clockMode));
		dispatch(reset());
	};

	const clockModeIsSelected = (optionClockMode: ClockMode) => {
		if (optionClockMode === clockMode) {
			return styles.selected;
		} else {
			return "";
		}
	};

	return (
		<div className={styles.modeSlider}>
			<div
				onClick={() => modeClickHandler(ClockMode.Pomodoro)}
				className={`${styles.modeSlider__option} ${clockModeIsSelected(
					ClockMode.Pomodoro
				)}`}
			>
				pomodoro
			</div>
			<div
				onClick={() => modeClickHandler(ClockMode.ShortBreak)}
				className={`${styles.modeSlider__option} ${clockModeIsSelected(
					ClockMode.ShortBreak
				)}`}
			>
				short break
			</div>
			<div
				onClick={() => modeClickHandler(ClockMode.LongBreak)}
				className={`${styles.modeSlider__option} ${clockModeIsSelected(
					ClockMode.LongBreak
				)}`}
			>
				long break
			</div>
		</div>
	);
};

export default ModeSlider;
