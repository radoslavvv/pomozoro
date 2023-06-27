import { useSelector } from "react-redux";
import IModeSliderProps from "./IModeSliderProps";

import styles from "./ModeSlider.module.scss";
import { RootState, useAppDispatch } from "../../store/Store";
import ClockMode from "../../shared/enums/ClockMode";
import {
	pause,
	reset,
	setClockMode,
} from "../../store/features/clock/ClockSlice.ts";
import Color from "../../shared/enums/Color.ts";
import FontType from "../../shared/enums/FontType.ts";

const ModeSlider = (props: IModeSliderProps) => {
	const dispatch = useAppDispatch();

	const modalIsOpen: any = useSelector(
		(state: RootState) => state.settings.modalIsOpen
	);

	const clockMode: any = useSelector(
		(state: RootState) => state.clock.clockMode
	);

	const color: Color = useSelector(
		(state: RootState) => state.settings.color
	);

	const fontType: FontType = useSelector(
		(state: RootState) => state.settings.fontType
	);

	const modeClickHandler = (clockMode: ClockMode) => {
		dispatch(setClockMode(clockMode));
		dispatch(reset());
	};

	const clockModeIsSelected = (optionClockMode: ClockMode) => {
		return optionClockMode === clockMode;
	};

	return (
		<div
			className={styles.modeSlider}
			style={{ fontFamily: fontType, zIndex: modalIsOpen ? 0 : 1 }}
		>
			<div
				onClick={() => modeClickHandler(ClockMode.Pomodoro)}
				className={`${styles.modeSlider__option} ${
					clockModeIsSelected(ClockMode.Pomodoro)
						? styles.selected
						: ""
				}`}
				style={{
					background: clockModeIsSelected(ClockMode.Pomodoro)
						? color
						: "",
				}}
			>
				pomodoro
			</div>
			<div
				onClick={() => modeClickHandler(ClockMode.ShortBreak)}
				className={`${styles.modeSlider__option} ${
					clockModeIsSelected(ClockMode.ShortBreak)
						? styles.selected
						: ""
				}`}
				style={{
					background: clockModeIsSelected(ClockMode.ShortBreak)
						? color
						: "",
				}}
			>
				short break
			</div>
			<div
				onClick={() => modeClickHandler(ClockMode.LongBreak)}
				className={`${styles.modeSlider__option} ${
					clockModeIsSelected(ClockMode.LongBreak)
						? styles.selected
						: ""
				}`}
				style={{
					background: clockModeIsSelected(ClockMode.LongBreak)
						? color
						: "",
				}}
			>
				long break
			</div>
		</div>
	);
};

export default ModeSlider;
