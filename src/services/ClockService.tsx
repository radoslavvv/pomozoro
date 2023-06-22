import moment from "moment";
import ClockMode from "../shared/enums/ClockMode";
import store from "../store/Store";

class ClockService {
  public static getCurrentClockModeMinutes = (clockMode: ClockMode): number => {
    const storeState = store.getState();

    const pomodoroMinutes = storeState.options.pomodoroMinutes;
    const shortBreakMinutes = storeState.options.shortBreakMinutes;
    const longBreakMinutes = storeState.options.longBreakMinutes;

    if (clockMode === ClockMode.Pomodoro) {
      return pomodoroMinutes;
    } else if (clockMode === ClockMode.ShortBreak) {
      return shortBreakMinutes;
    } else if (clockMode === ClockMode.LongBreak) {
      return longBreakMinutes;
    }

    return 0;
  };

  calculateCurrentTime = (endTime: any, startTime: any) => {
    const currentTime = endTime && startTime ? moment.duration(endTime.diff(startTime)) : null;
    return currentTime;
  };
}

export default ClockService;
