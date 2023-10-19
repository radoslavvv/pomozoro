import { useSelector } from "react-redux";

import { RootState, useAppDispatch } from "../../../store/Store.tsx";
import * as ClockSlice from "../../../store/features/clock/ClockSlice.ts";

import AppColor from "../../../enums/Color.ts";
import ClockMode from "../../../enums/ClockMode.ts";

import styles from "./ClockModeOption.module.scss";

interface IClockModeOptionProps {
	optionMode: ClockMode;
	name: string;
}

const ClockModeOption = ({ name, optionMode }: IClockModeOptionProps) => {
	const dispatch = useAppDispatch();

	const clockMode: ClockMode = useSelector(
		(state: RootState) => state.clock.clockMode
	);

	const appColor: AppColor = useSelector(
		(state: RootState) => state.settings.appColor
	);

	const handleModeClick = (clockMode: ClockMode): void => {
		dispatch(ClockSlice.setClockMode(clockMode));
		dispatch(ClockSlice.reset());
	};

	const getClockModeOptionClass = (optionClockMode: ClockMode): string => {
		return optionClockMode === clockMode ? styles.selected : "";
	};

	const getClockModeOptionColor = (optionClockMode: ClockMode): string => {
		return optionClockMode === clockMode ? appColor : "";
	};

	return (
		<li
			onClick={() => handleModeClick(optionMode)}
			className={`${styles.modeSlider__option} ${getClockModeOptionClass(
				optionMode
			)}`}
			style={{
				background: getClockModeOptionColor(optionMode),
			}}
		>
			{name}
		</li>
	);
};

export default ClockModeOption;
