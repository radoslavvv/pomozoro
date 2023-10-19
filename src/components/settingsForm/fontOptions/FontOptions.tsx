import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import { RootState, useAppDispatch } from "../../../store/Store";
import * as SettingsSlice from "../../../store/features/settings/SettingsSlice";

import FontType from "../../../enums/FontType";

import styles from "./FontOptions.module.scss";

const FontOptions = () => {
	const dispatch = useAppDispatch();

	const formFontType: FontType = useSelector(
		(state: RootState) => state.settings.formFontType
	);

	const changeCurrentFont = (fontType: FontType): void => {
		dispatch(SettingsSlice.setFormFontType(fontType));
	};

	const generateClass = (fontType: FontType) => {
		return `${styles.fontOption} ${
			formFontType === fontType ? styles.active : ""
		}`;
	};

	const fonts: FontType[] = [
		FontType.Poppins,
		FontType.Orbitron,
		FontType.BlackOpsOne,
	];

	return (
		<div className={styles.fontOptions}>
			{fonts.map((ft: FontType) => (
				<div
					key={nanoid()}
					className={generateClass(ft)}
					style={{ fontFamily: ft }}
					onClick={() => changeCurrentFont(ft)}
				>
					Aa
				</div>
			))}
		</div>
	);
};

export default FontOptions;
