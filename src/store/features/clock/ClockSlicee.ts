import moment from "moment";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import ClockMode from "../../../shared/enums/ClockMode";
import { IClockState } from "./IClockState";

const initialState: IClockState = {
	isRunning: false,
	isFinished: true,

	startTime: null,
	endTime: null,

	currentTime: null,
	totalDuration: null,

	progressBarValue: 0,

	clockMode: ClockMode.Pomodoro,
};

export const ClockSlice = createSlice({
	name: "clock",
	initialState,
	reducers: {
		setStartTime: (state, action: PayloadAction<any>) => {
			state.startTime = moment(action.payload);
		},
		setEndTime: (state, action: PayloadAction<any>) => {
			state.endTime = moment(action.payload);
		},
		setCurrentTime: (state, action: PayloadAction<any>) => {
			state.currentTime = action.payload;
		},
		setTotalDuration: (state, action: PayloadAction<any>) => {
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
		setProgressBarValue: (state, action: PayloadAction<any>) => {
			state.progressBarValue = action.payload;
		},
	},
});

export const {
	setStartTime,
	setEndTime,
	setCurrentTime,
	setTotalDuration,
	setIsRunning,
	setIsFinished,
	setClockMode,
	setProgressBarValue,
} = ClockSlice.actions;

export default ClockSlice;
