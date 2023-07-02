import Color from "../../../enums/Color";
import FontType from "../../../enums/FontType";

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
