import Color from "../../../shared/enums/Color";
import FontType from "../../../shared/enums/FontType";
import SetttingsModel from "../../../shared/models/SettingsModel";

export interface ISettingsState {
	pomodoroMinutes: number;
	shortBreakMinutes: number;
	longBreakMinutes: number;
	fontType: FontType;
	color: Color;

	modalIsOpen: boolean;

	currentPomodoroMinutes: string;
	currentShortBreakMinutes: string;
	currentLongBreakMinutes: string;
	currentFontType: FontType;
	currentColor: Color;
}
