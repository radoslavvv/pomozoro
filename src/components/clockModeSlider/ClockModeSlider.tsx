import { useSelector } from "react-redux";

import { RootState } from "../../store/Store.tsx";

import ClockModeOption from "./clockModeOption/ClockModeOption.tsx";

import FontType from "../../enums/FontType.ts";
import ClockMode from "../../enums/ClockMode.ts";

import styles from "./ClockModeSlider.module.scss";

const ClockModeSlider = () => {
	const fontType: FontType = useSelector(
		(state: RootState) => state.settings.fontType
	);

	return (
		<ul className={styles.modeSlider} style={{ fontFamily: fontType }}>
			<ClockModeOption name="pomodoro" optionMode={ClockMode.Pomodoro} />
			<ClockModeOption
				name="short break"
				optionMode={ClockMode.ShortBreak}
			/>
			<ClockModeOption
				name="long break"
				optionMode={ClockMode.LongBreak}
			/>
		</ul>
	);
};

export default ClockModeSlider;
