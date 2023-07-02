import moment from "moment";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import ClockMode from "../../../enums/ClockMode";
import { IClockState } from "./IClockState";

const initialState: IClockState = {
	isRunning: false,
	isFinished: true,

	startTime: null,
	endTime: null,

	currentDuration: null,
	totalDuration: null,

	progressBarValue: 0,

	pomodoroCount: 0,
	shortBreaksCount: 0,

	clockMode: ClockMode.Pomodoro,
};

export const ClockSlice = createSlice({
	name: "clock",
	initialState,
	reducers: {
		setStartTime: (state, action: PayloadAction<moment.Moment>) => {
			state.startTime = moment(action.payload);
		},
		setEndTime: (state, action: PayloadAction<moment.Moment>) => {
			state.endTime = moment(action.payload);
		},
		setCurrentDuration: (state, action: PayloadAction<moment.Duration>) => {
			state.currentDuration = action.payload;
		},
		setTotalDuration: (state, action: PayloadAction<moment.Duration>) => {
			state.totalDuration = action.payload;
		},
		setIsRunning: (state, action: PayloadAction<boolean>) => {
			state.isRunning = action.payload;
		},
		setIsFinished: (state, action: PayloadAction<boolean>) => {
			state.isFinished = action.payload;
		},
		setClockMode: (state, action: PayloadAction<ClockMode>) => {
			state.clockMode = action.payload;
		},
		setProgressBarValue: (state, action: PayloadAction<number>) => {
			state.progressBarValue = action.payload;
		},
		pause: (state) => {
			state.isRunning = false;
		},
		finish: (state) => {
			state.isFinished = true;
			state.isRunning = false;

			if (state.clockMode === ClockMode.Pomodoro) {
				state.pomodoroCount = state.pomodoroCount + 1;

				state.clockMode = ClockMode.ShortBreak;
			} else if (state.clockMode === ClockMode.ShortBreak) {
				state.shortBreaksCount = state.shortBreaksCount + 1;

				if (state.shortBreaksCount % 4 === 0) {
					state.clockMode = ClockMode.LongBreak;
				} else {
					state.clockMode = ClockMode.Pomodoro;
				}
			} else if (state.clockMode === ClockMode.LongBreak) {
				state.pomodoroCount = 0;
				state.shortBreaksCount = 0;

				state.clockMode = ClockMode.Pomodoro;
			}
		},
		reset: (state) => {
			state.isRunning = false;
			state.isFinished = true;

			state.startTime = null;
			state.endTime = null;
			state.currentDuration = null;

			state.totalDuration = null;

			state.progressBarValue = 0;
		},
	},
});

export const {
	setStartTime,
	setEndTime,
	setCurrentDuration,
	setTotalDuration,
	setIsRunning,
	setIsFinished,
	setClockMode,
	setProgressBarValue,
	pause,
	reset,
	finish,
} = ClockSlice.actions;

export default ClockSlice;
