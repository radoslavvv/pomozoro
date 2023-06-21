import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IClockState } from "./IClockState";
import moment from "moment";
import ClockMode from "../../../shared/enums/ClockMode";

const initialState: IClockState = {
	isRunning: false,
	isFinished: true,

	startTime: null,
	endTime: null,
	currentTime: null,

	intervalId: -1,
	clockMode: ClockMode.Pomodoro,
};

export const clockSlice = createSlice({
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
		setIsRunning: (state, action: PayloadAction<boolean>) => {
			state.isRunning = action.payload;
			// console.log("update timer done ", state.clockIsRunning);
		},
		setIsFinished: (state, action: PayloadAction<boolean>) => {
			state.isFinished = action.payload;
		},
		setIntervalId: (state, action: PayloadAction<number>) => {
			state.intervalId = action.payload;
		},
		setClockMode: (state, action: PayloadAction<ClockMode>) => {
			state.clockMode = action.payload;
		},
	},
});

export const {
	setStartTime,
	setEndTime,
	setCurrentTime,
	setIsRunning,
	setIsFinished,
	setIntervalId,
	setClockMode,
} = clockSlice.actions;

export default clockSlice;
