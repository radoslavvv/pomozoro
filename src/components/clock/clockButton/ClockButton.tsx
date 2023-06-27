import { RootState } from "../../../store/Store";
import { useSelector } from "react-redux";
import IClockButtonProps from "./IClockButtonProps";

import styles from "./ClockButton.module.scss";
import FontType from "../../../shared/enums/FontType";

const ClockButton = (props: IClockButtonProps) => {
	const isRunning: any = useSelector(
		(state: RootState) => state.clock.isRunning
	);

	const fontType: FontType = useSelector(
		(state: RootState) => state.settings.fontType
	);

	return (
		<>
			<button
				className={styles.clockButton}
				style={{ fontFamily: fontType }}
			>
				{isRunning ? "P A U S E" : "S T A R T"}
			</button>
		</>
	);
};

export default ClockButton;
