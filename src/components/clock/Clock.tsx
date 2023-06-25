import IClockProps from "./IClockProps";
import ProgressBar from "./progressBar/ProgressBar";

import styles from "./Clock.module.scss";
import useClock from "../../hooks/useClock";
import ClockButton from "./clockButton/ClockButton";

const Clock = (props: IClockProps) => {
	const { clockButtonClickHandler, clockFormattedCurrentTime } = useClock();

	return (
		<div className={styles.clockContainer}>
			<div className={styles.clock} onClick={clockButtonClickHandler}>
				<div className={styles.innerCircle}>
					<ProgressBar />
					<div className={styles.face}>
						<span className={styles.time}>
							{clockFormattedCurrentTime}
						</span>
						<ClockButton />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Clock;
