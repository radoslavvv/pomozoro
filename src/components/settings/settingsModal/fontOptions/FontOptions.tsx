import { useSelector } from "react-redux";

import styles from "./FontOptions.module.scss";
import { RootState, useAppDispatch } from "../../../../store/Store";
import IFontOptionsProps from "./IFontOptionsProps";
import FontType from "../../../../shared/enums/FontType";
import { setCurrentFontType } from "../../../../store/features/settings/SettingsSlice";

const FontOptions = (props: IFontOptionsProps) => {
	const dispatch = useAppDispatch();

	const currentFontType: FontType = useSelector(
		(state: RootState) => state.settings.currentFontType
	);

	const changeCurrentFont = (fontType: FontType): void => {
		dispatch(setCurrentFontType(fontType));
	};

	return (
		<div className={styles.fontOptions}>
			<div
				className={`${styles.fontOption} ${
					currentFontType === FontType.Poppins ? styles.active : ""
				}`}
				style={{
					fontFamily: FontType.Poppins.toString(),
				}}
				onClick={() => changeCurrentFont(FontType.Poppins)}
			>
				Aa
			</div>
			<div
				className={`${styles.fontOption} ${
					currentFontType === FontType.Pacifico ? styles.active : ""
				}`}
				style={{
					fontFamily: FontType.Pacifico.toString(),
				}}
				onClick={() => changeCurrentFont(FontType.Pacifico)}
			>
				Aa
			</div>
			<div
				className={`${styles.fontOption} ${
					currentFontType === FontType.Comforter ? styles.active : ""
				}`}
				style={{
					fontFamily: FontType.Comforter.toString(),
				}}
				onClick={() => changeCurrentFont(FontType.Comforter)}
			>
				Aa
			</div>
		</div>
	);
};

export default FontOptions;
