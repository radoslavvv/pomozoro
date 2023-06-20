import IClockProps from "./IClockProps";

import styles from "./Clock.module.scss";

const Clock = (props: IClockProps) => {
  return (
    <div className={styles.clock}>
      <div className={styles.innerCircle}>
        <div className={styles.progress}>
          <span className={styles.time}>17:59</span>
          <button className={styles.clockButton}>PAUSE</button>
        </div>
      </div>
    </div>
  );
};

export default Clock;
