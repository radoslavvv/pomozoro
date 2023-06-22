import IClockProps from "./IClockProps";

import moment from "moment";

import ProgressBar from "./progressBar/ProgressBar";
import store, { RootState, useAppDispatch } from "../../store/Store";
import { useSelector } from "react-redux";

import styles from "./Clock.module.scss";
import { useEffect } from "react";
import { setEndTime, setIsRunning, setCurrentTime, setIsFinished, setStartTime, setTotalTime } from "../../store/features/clock/ClockSlice";

const Clock = (props: IClockProps) => {
  const dispatch = useAppDispatch();

  const startTime: any = useSelector((state: RootState) => state.clock.startTime);

  const endTime: any = useSelector((state: RootState) => state.clock.endTime);

  // const currentTime: moment.Moment = useSelector((state: RootState) => state.clock.currentTime);

  const isRunning: boolean = useSelector((state: RootState) => state.clock.isRunning);

  const isFinished: boolean = useSelector((state: RootState) => state.clock.isFinished);

  const currentTime: any = endTime && startTime ? moment.duration(endTime.diff(startTime)) : null;

  const updateClock = (): void => {
    if (isRunning) {
      dispatch(setCurrentTime(currentTime));

      setTimeout(() => {
        dispatch(setStartTime(moment(startTime).add(1, "second")));
      }, 1000);

      if (currentTime.minutes() <= 0 && currentTime.seconds() <= 0) {
        dispatch(setIsRunning(false));
        dispatch(setIsFinished(true));
      }
    }
  };

  useEffect(() => {
    if (isRunning) {
      updateClock();
    }
  }, [isRunning, startTime]);

  const startClock = (): void => {
    let currentEndTime: moment.Moment;
    let currentStartTime: moment.Moment;
    if (isFinished) {
      currentStartTime = moment();
      dispatch(setStartTime(currentStartTime));

      currentEndTime = moment().add(0.1, "minute").add(4, "second");
      dispatch(setEndTime(currentEndTime));

      const totalTime = moment.duration(currentEndTime.diff(currentStartTime));
      dispatch(setTotalTime(totalTime));
      console.log("total time is set: ", totalTime.milliseconds());
    } else {
      currentEndTime = endTime;
      currentStartTime = startTime;
    }

    dispatch(setIsRunning(true));
    dispatch(setIsFinished(false));

    // updateClock();
  };

  const pauseClock = () => {
    dispatch(setIsRunning(false));
  };

  const clockButtonClickHandler = (): void => {
    if (isRunning) {
      pauseClock();
    } else {
      startClock();
    }
  };

  return (
    <div className={styles.clockContainer}>
      <div className={styles.clock} onClick={clockButtonClickHandler}>
        <ProgressBar />
        <div className={styles.innerCircle}>
          <span className={styles.time}>
            {currentTime ? (
              <>
                {Math.abs(currentTime?.minutes())?.toString()?.padStart(2, "0")}:{Math.abs(currentTime?.seconds())?.toString()?.padStart(2, "0")}
              </>
            ) : (
              "15:00"
            )}
          </span>
          <button className={styles.clockButton}>{isRunning ? "PAUSE" : "START"}</button>
        </div>
      </div>
    </div>
  );
};

export default Clock;
