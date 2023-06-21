import ClockMode from "../../../shared/enums/ClockMode";

export interface IClockState {
	isRunning: boolean;
	isFinished: boolean;

	startTime: any;
	endTime: any;
	currentTime: any;

	clockMode: ClockMode;
}
