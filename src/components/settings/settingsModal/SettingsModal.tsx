import { RootState, useAppDispatch } from "../../../store/Store";
import {
	applyChanges,
	setModalIsOpen,
} from "../../../store/features/settings/SettingsSlice";
import ISettingsModalProps from "./ISettingsModalProps";

import styles from "./SettingsModal.module.scss";
import TimeInputs from "./timeInputs/TimeInputs";
import FontOptions from "./fontOptions/FontOptions";
import ColorOptions from "./colorOptions/ColorOptions";
import Color from "../../../shared/enums/Color";
import { useSelector } from "react-redux";
import FontType from "../../../shared/enums/FontType";

const SettingsModal = (props: ISettingsModalProps) => {
	const dispatch = useAppDispatch();

	const color: Color = useSelector(
		(state: RootState) => state.settings.color
	);

	const fontType: FontType = useSelector(
		(state: RootState) => state.settings.fontType
	);

	const closeButtonClickHandler = (): void => {
		// setTimeout(() => {
		dispatch(setModalIsOpen(false));
		// }, 1000);
	};

	const applyButtonClickHandler = (): void => {
		dispatch(applyChanges());
		dispatch(setModalIsOpen(false));
	};

	return (
		<div
			className={styles.settingsModalOverlay}
			style={{ fontFamily: fontType }}
		>
			<div className={styles.settingsModal}>
				<div className={styles.settingsModal__header}>
					<h3>Settings</h3>
					<span
						className={styles.closeIcon}
						onClick={closeButtonClickHandler}
					>
						&#10006;
					</span>
				</div>
				<div className={styles.settingsModal__sections}>
					<div className={styles.timeSection}>
						<p className={styles.sectionLabel}>TIME (MINUTES)</p>
						<TimeInputs />
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
				<button
					onClick={applyButtonClickHandler}
					style={{ background: color, fontFamily: fontType }}
				>
					Apply
				</button>
			</div>
		</div>
	);
};

export default SettingsModal;
