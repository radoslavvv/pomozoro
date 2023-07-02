import IClockProps from "./IClockProps";
import ProgressBar from "./progressBar/ProgressBar";

import styles from "./Clock.module.scss";
import useClock from "../../hooks/useClock";
import ClockButton from "./clockButton/ClockButton";

import { useSelector } from "react-redux";
import { RootState } from "../../store/Store";
import FontType from "../../enums/FontType";

const Clock = (props: IClockProps) => {
	const { clockButtonClickHandler, clockFormattedCurrentTime } = useClock();

	const fontType: FontType = useSelector(
		(state: RootState) => state.settings.fontType
	);

	return (
		<div className={styles.clockContainer}>
			<div className={styles.clock} onClick={clockButtonClickHandler}>
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
