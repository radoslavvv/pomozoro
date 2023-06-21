import IClockProps from "./IClockProps";

import styles from "./Clock.module.scss";
import ProgressBar from "./progressBar/ProgressBar";

const Clock = (props: IClockProps) => {
	return (
		<div className={styles.clockContainer}>
			<div className={styles.clock}>
				<div className={styles.innerCircle}>
					<span className={styles.time}>17:59</span>
					<button className={styles.clockButton}>PAUSE</button>
				</div>
			</div>
			<ProgressBar />
		</div>
	);
};

export default Clock;
