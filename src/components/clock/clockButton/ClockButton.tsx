import { RootState } from "../../../store/Store";
import { useSelector } from "react-redux";
import IClockButtonProps from "./IClockButtonProps";

import styles from "./ClockButton.module.scss";

const ClockButton = (props: IClockButtonProps) => {
	const isRunning: any = useSelector(
		(state: RootState) => state.clock.isRunning
	);

	return (
		<>
			<button className={styles.clockButton}>
				{isRunning ? "PAUSE" : "START"}
			</button>
		</>
	);
};

export default ClockButton;
