import { useSelector } from "react-redux";

import { RootState, useAppDispatch } from "../../store/Store";
import * as SettingsSlice from "../../store/features/settings/SettingsSlice";
import * as ClockSlice from "../../store/features/clock/ClockSlice";

import TimeOptions from "./timeOptions/TimeOptions";
import FontOptions from "./fontOptions/FontOptions";
import ColorOptions from "./colorOptions/ColorOptions";

import AppColor from "../../enums/Color";

import styles from "./SettingsForm.module.scss";

const SettingForm = () => {
	const dispatch = useAppDispatch();

	const color: AppColor = useSelector(
		(state: RootState) => state.settings.appColor
	);

	const handleCloseButtonClick = (): void => {
		dispatch(SettingsSlice.setModalIsOpen(false));
	};

	const handleApplyButtonClick = (): void => {
		dispatch(SettingsSlice.applyChanges());
		dispatch(SettingsSlice.setModalIsOpen(false));
		dispatch(ClockSlice.reset());
	};

	return (
		<form className={styles.settingsForm}>
			<div className={styles.settingsForm__header}>
				<h3>Settings</h3>
				<span
					className={styles.closeIcon}
					onClick={handleCloseButtonClick}
				>
					&#10006;
				</span>
			</div>

			<div className={styles.settingsForm__sections}>
				<div className={styles.timeSection}>
					<p className={styles.sectionLabel}>TIME (MINUTES)</p>
					<TimeOptions />
				</div>

				<div className={styles.fontSection}>
					<p className={styles.sectionLabel}>FONT</p>
					<FontOptions />
				</div>

				<div className={styles.colorSection}>
					<p className={styles.sectionLabel}>COLOR</p>
					<ColorOptions />
				</div>
			</div>

			<div className={styles.buttonSection}>
				<button
					onClick={handleApplyButtonClick}
					style={{ background: color }}
				>
					Apply
				</button>
			</div>
		</form>
	);
};

export default SettingForm;
