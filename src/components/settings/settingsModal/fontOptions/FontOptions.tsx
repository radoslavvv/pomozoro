import { useSelector } from "react-redux";

import styles from "./FontOptions.module.scss";
import { RootState, useAppDispatch } from "../../../../store/Store";
import IFontOptionsProps from "./IFontOptionsProps";

import { setCurrentFontType } from "../../../../store/features/settings/SettingsSlice";
import FontType from "../../../../enums/FontType";

const FontOptions = (props: IFontOptionsProps) => {
	const dispatch = useAppDispatch();

	const currentFontType: FontType = useSelector(
		(state: RootState) => state.settings.currentFontType
	);

	const changeCurrentFont = (fontType: FontType): void => {
		dispatch(setCurrentFontType(fontType));
	};

	const generateClass = (fontType: FontType) => {
		return `${styles.fontOption} ${
			currentFontType === fontType ? styles.active : ""
		}`;
	};

	return (
		<div className={styles.fontOptions}>
			<div
				className={generateClass(FontType.Poppins)}
				style={{ fontFamily: FontType.Poppins }}
				onClick={() => changeCurrentFont(FontType.Poppins)}
			>
				Aa
			</div>
			<div
				className={generateClass(FontType.Orbitron)}
				style={{ fontFamily: FontType.Orbitron }}
				onClick={() => changeCurrentFont(FontType.Orbitron)}
			>
				Aa
			</div>
			<div
				className={generateClass(FontType.BlackOpsOne)}
				style={{ fontFamily: FontType.BlackOpsOne }}
				onClick={() => changeCurrentFont(FontType.BlackOpsOne)}
			>
				Aa
			</div>
		</div>
	);
};

export default FontOptions;
