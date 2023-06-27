import { useSelector } from "react-redux";

import styles from "./ColorOptions.module.scss";
import { RootState, useAppDispatch } from "../../../../store/Store";
import FontType from "../../../../shared/enums/FontType";
import {
	setCurrentColor,
	setCurrentFontType,
} from "../../../../store/features/settings/SettingsSlice";
import IColorOptionsProps from "./IColorOptionsProps";
import Color from "../../../../shared/enums/Color";

const ColorOptions = (props: IColorOptionsProps) => {
	const dispatch = useAppDispatch();

	const currentColor: Color = useSelector(
		(state: RootState) => state.settings.currentColor
	);

	const changeCurrentColor = (color: Color): void => {
		dispatch(setCurrentColor(color));
	};

	return (
		<div className={styles.colorOptions}>
			<div
				className={`${styles.colorOption} ${
					currentColor === Color.Red ? styles.active : ""
				}`}
				style={{ background: Color.Red }}
				onClick={() => {
					changeCurrentColor(Color.Red);
				}}
			></div>
			<div
				className={`${styles.colorOption} ${
					currentColor === Color.Blue ? styles.active : ""
				}`}
				style={{ background: Color.Blue }}
				onClick={() => {
					changeCurrentColor(Color.Blue);
				}}
			></div>
			<div
				className={`${styles.colorOption} ${
					currentColor === Color.Green ? styles.active : ""
				}`}
				style={{ background: Color.Green }}
				onClick={() => {
					changeCurrentColor(Color.Green);
				}}
			></div>
		</div>
	);
};

export default ColorOptions;
