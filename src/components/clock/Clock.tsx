import { useSelector } from "react-redux";

import ProgressBar from "./progressBar/ProgressBar";
import ClockButton from "./clockButton/ClockButton";

import { RootState } from "../../store/Store";

import useClock from "../../hooks/useClock";
import FontType from "../../enums/FontType";

import styles from "./Clock.module.scss";

const Clock = () => {
	const { handleClockButtonClick, clockFormattedCurrentTime } = useClock();

	const fontType: FontType = useSelector(
		(state: RootState) => state.settings.fontType
	);

	return (
		<div className={styles.clockContainer}>
			<div className={styles.clock} onClick={handleClockButtonClick}>
				<div className={styles.innerCircle}>
					<ProgressBar />

					<div className={styles.face}>
						<span
							className={styles.time}
							style={{ fontFamily: fontType }}
						>
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
