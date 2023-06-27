import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISettingsState } from "./ISettingsState";
import FontType from "../../../shared/enums/FontType";
import Color from "../../../shared/enums/Color";

const initialState: ISettingsState = {
	pomodoroMinutes: 1,
	shortBreakMinutes: 5,
	longBreakMinutes: 15,
	fontType: FontType.Poppins,
	color: Color.Red,

	modalIsOpen: false,

	currentPomodoroMinutes: "1",
	currentShortBreakMinutes: "5",
	currentLongBreakMinutes: "15",
	currentFontType: FontType.Poppins,
	currentColor: Color.Red,
};

export const SettingsSlice = createSlice({
	name: "settings",
	initialState,
	reducers: {
		setModalIsOpen: (state, action: PayloadAction<boolean>) => {
			state.modalIsOpen = action.payload;
			if (action.payload) {
				state.currentPomodoroMinutes = state.pomodoroMinutes.toString();
				state.currentShortBreakMinutes =
					state.shortBreakMinutes.toString();
				state.currentLongBreakMinutes =
					state.longBreakMinutes.toString();
			}
		},

		setCurrentPomodoroMinutes: (state, action: PayloadAction<string>) => {
			state.currentPomodoroMinutes = action.payload;
		},
		setCurrentShortBreakMinutes: (state, action: PayloadAction<string>) => {
			state.currentShortBreakMinutes = action.payload;
		},
		setCurrentLongBreakMinutes: (state, action: PayloadAction<string>) => {
			state.currentLongBreakMinutes = action.payload;
		},
		setCurrentFontType: (state, action: PayloadAction<FontType>) => {
			state.currentFontType = action.payload;
		},
		setCurrentColor: (state, action: PayloadAction<Color>) => {
			state.currentColor = action.payload;
		},
		applyChanges: (state) => {
			state.pomodoroMinutes = Number(state.currentPomodoroMinutes);
			state.shortBreakMinutes = Number(state.currentShortBreakMinutes);
			state.longBreakMinutes = Number(state.currentLongBreakMinutes);

			state.fontType = state.currentFontType;
			state.color = state.currentColor;
		},

		// setCurrentFontType: (state, action: PayloadAction<FontType>) => {
		// 	state.currentFontType = action.payload;
		// },
	},
});

export const {
	setModalIsOpen,
	setCurrentPomodoroMinutes,
	setCurrentShortBreakMinutes,
	setCurrentLongBreakMinutes,
	setCurrentFontType,
	setCurrentColor,
	applyChanges,
} = SettingsSlice.actions;

export default SettingsSlice;
