import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import { RootState, useAppDispatch } from "../../../store/Store";
import * as SettingsSlice from "../../../store/features/settings/SettingsSlice";

import AppColor from "../../../enums/Color";

import styles from "./ColorOptions.module.scss";

const ColorOptions = () => {
	const dispatch = useAppDispatch();

	const formColor: AppColor = useSelector(
		(state: RootState) => state.settings.formColor
	);

	const changeCurrentColor = (color: AppColor): void => {
		dispatch(SettingsSlice.setFormColor(color));
	};

	const getActiveClass = (ac: AppColor): string => {
		return formColor === ac ? styles.active : "";
	};

	const colors: AppColor[] = [AppColor.Red, AppColor.Blue, AppColor.Green];

	return (
		<div className={styles.colorOptions}>
			{colors.map((ac: AppColor) => (
				<div
					key={nanoid()}
					className={`${styles.colorOption} ${getActiveClass(ac)}`}
					style={{ background: ac }}
					onClick={() => {
						changeCurrentColor(ac);
					}}
				></div>
			))}
		</div>
	);
};

export default ColorOptions;
