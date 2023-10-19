import { useSelector } from "react-redux";

import { RootState } from "../../../store/Store";

import FontType from "../../../enums/FontType";

import styles from "./ClockButton.module.scss";

const ClockButton = () => {
	const isRunning: boolean = useSelector(
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
