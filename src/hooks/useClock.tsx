import moment from "moment";
import { setCurrentTime, setEndTime, setIsFinished, setIsRunning, setStartTime, setTotalTime } from "../store/features/clock/ClockSlice";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../store/Store";

const useClock = () => {
  const dispatch = useAppDispatch();

  const startTime: any = useSelector((state: RootState) => state.clock.startTime);

  const endTime: any = useSelector((state: RootState) => state.clock.endTime);

  const isRunning: boolean = useSelector((state: RootState) => state.clock.isRunning);

  const isFinished: boolean = useSelector((state: RootState) => state.clock.isFinished);

  const currentTime: any = endTime && startTime ? moment.duration(endTime.diff(startTime)) : null;

  const currentTimeMinutes = currentTime && Math.abs(currentTime.minutes())?.toString()?.padStart(2, "0");
  const currentTimeSeconds = currentTime && Math.abs(currentTime.seconds())?.toString()?.padStart(2, "0");

  const clockFormattedCurrentTime = currentTime ? (
    <>
      {currentTimeMinutes}:{currentTimeSeconds}
    </>
  ) : (
    "15:00"
  );

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

  return {
    clockButtonClickHandler,
    isRunning,
    clockFormattedCurrentTime,
  };
};

export default useClock;
