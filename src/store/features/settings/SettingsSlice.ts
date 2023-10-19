import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import AppColor from "../../../enums/Color";
import FontType from "../../../enums/FontType";

interface ISettingsState {
	pomodoroMinutes: number;
	shortBreakMinutes: number;
	longBreakMinutes: number;
	fontType: FontType;
	appColor: AppColor;

	modalIsOpen: boolean;

	formPomodoroMinutes: string;
	formShortBreakMinutes: string;
	formLongBreakMinutes: string;
	formFontType: FontType;
	formColor: AppColor;
}

const initialState: ISettingsState = {
	pomodoroMinutes: 25,
	shortBreakMinutes: 5,
	longBreakMinutes: 15,
	fontType: FontType.Poppins,
	appColor: AppColor.Red,

	modalIsOpen: false,

	formPomodoroMinutes: "25",
	formShortBreakMinutes: "5",
	formLongBreakMinutes: "15",
	formFontType: FontType.Poppins,
	formColor: AppColor.Red,
};

export const SettingsSlice = createSlice({
	name: "settings",
	initialState,
	reducers: {
		setModalIsOpen: (state, action: PayloadAction<boolean>) => {
			state.modalIsOpen = action.payload;
			if (action.payload) {
				state.formPomodoroMinutes = state.pomodoroMinutes.toString();
				state.formShortBreakMinutes =
					state.shortBreakMinutes.toString();
				state.formLongBreakMinutes = state.longBreakMinutes.toString();
			}
		},
		setFormPomodoroMinutes: (state, action: PayloadAction<string>) => {
			state.formPomodoroMinutes = action.payload;
		},
		setFormShortBreakMinutes: (state, action: PayloadAction<string>) => {
			state.formShortBreakMinutes = action.payload;
		},
		setFormLongBreakMinutes: (state, action: PayloadAction<string>) => {
			state.formLongBreakMinutes = action.payload;
		},
		setFormFontType: (state, action: PayloadAction<FontType>) => {
			state.formFontType = action.payload;
		},
		setFormColor: (state, action: PayloadAction<AppColor>) => {
			state.formColor = action.payload;
		},
		applyChanges: (state) => {
			state.pomodoroMinutes = Number(state.formPomodoroMinutes);
			state.shortBreakMinutes = Number(state.formShortBreakMinutes);
			state.longBreakMinutes = Number(state.formLongBreakMinutes);

			state.fontType = state.formFontType;
			state.appColor = state.formColor;
		},
	},
});

export const {
	setModalIsOpen,
	setFormPomodoroMinutes,
	setFormShortBreakMinutes,
	setFormLongBreakMinutes,
	setFormFontType,
	setFormColor,
	applyChanges,
} = SettingsSlice.actions;

export default SettingsSlice;
