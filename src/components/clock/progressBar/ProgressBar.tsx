import { useEffect, useState } from "react";
import IProgressBarProps from "./IProgressBarProps";

import styles from "./ProgressBar.module.scss";
import { RootState, useAppDispatch } from "../../../store/Store";
import { useSelector } from "react-redux";

const ProgressBar = (props: IProgressBarProps) => {
  const currentTime: moment.Duration = useSelector((state: RootState) => state.clock.currentTime);
  const totalTime: moment.Duration = useSelector((state: RootState) => state.clock.totalTime);

  let progressBarPercentage: number = 0;

  if (currentTime && totalTime) {
    const timePercentage: number = Math.round(((totalTime.asMilliseconds() - currentTime.asMilliseconds()) * 100) / totalTime.asMilliseconds());
    progressBarPercentage = (timePercentage / 100) * 900;
  }

  const progressBarValue: any = useSelector((state: RootState) => state.clock.progressBarValue);

  return (
    <>
      <div className={styles.progressBar}>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className={styles.circle}>
          {progressBarPercentage < 900 && <circle cx="175" cy="175" r="145" strokeLinecap="round" style={{ strokeDashoffset: progressBarValue }}></circle>}
        </svg>
      </div>
    </>
  );
};

export default ProgressBar;
