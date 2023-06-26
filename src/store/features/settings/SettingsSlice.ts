import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ClockMode from "../../../shared/enums/ClockMode";
import { ISettingsState } from "./ISettingsState";

const initialState: ISettingsState = {
	pomodoroMinutes: 1,
	shortBreakMinutes: 5,
	longBreakMinutes: 15,
};

export const SettingsSlice = createSlice({
	name: "settings",
	initialState,
	reducers: {
		setClockMode: (state, action: PayloadAction<ClockMode>) => {
			//   state.clockMode = action.payload;
		},
	},
});

export const { setClockMode } = SettingsSlice.actions;

export default SettingsSlice;
