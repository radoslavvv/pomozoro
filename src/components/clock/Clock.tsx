import IClockProps from "./IClockProps";
import ProgressBar from "./progressBar/ProgressBar";

import styles from "./Clock.module.scss";
import useClock from "../../hooks/useClock";

const Clock = (props: IClockProps) => {
  const { clockButtonClickHandler, clockFormattedCurrentTime, isRunning } = useClock();

  return (
    <div className={styles.clockContainer}>
      <div className={styles.clock} onClick={clockButtonClickHandler}>
        <ProgressBar />
        <div className={styles.innerCircle}>
          <span className={styles.time}>{clockFormattedCurrentTime}</span>
          <button className={styles.clockButton}>{isRunning ? "PAUSE" : "START"}</button>
        </div>
      </div>
    </div>
  );
};

export default Clock;
