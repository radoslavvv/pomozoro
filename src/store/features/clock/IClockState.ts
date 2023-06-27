import ClockMode from "../../../shared/enums/ClockMode";

export interface IClockState {
	isRunning: boolean;
	isFinished: boolean;

	startTime: moment.Moment | any;
	endTime: moment.Moment | any;

	currentDuration: moment.Duration | any;
	totalDuration: moment.Duration | any;

	progressBarValue: number;

	pomodoroCount: number;
	shortBreaksCount: number;

	clockMode: ClockMode;
}
