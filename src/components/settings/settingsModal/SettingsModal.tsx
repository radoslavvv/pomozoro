import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../store/Store";
import { setModalIsOpen } from "../../../store/features/settings/SettingsSlice";
import ISettingsModalProps from "./ISettingsModalProps";

import styles from "./SettingsModal.module.scss";
import TimeInputs from "./inputBoxes/TimeInputs";

const SettingsModal = (props: ISettingsModalProps) => {
	const dispatch = useAppDispatch();

	const closeButtonClickHandler = (): void => {
		// setTimeout(() => {
		dispatch(setModalIsOpen(false));
		// }, 1000);
	};

	return (
		<div className={styles.settingsModalOverlay}>
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
						<div className={styles.fontOptions}>
							<div className={styles.fontOption}></div>
							<div className={styles.fontOption}></div>
							<div className={styles.fontOption}></div>
						</div>
					</div>
					<div className={styles.colorSection}>
						<p className={styles.sectionLabel}>COLOR</p>
						<div className={styles.colorOptions}>
							<div className={styles.colorOption}></div>
							<div className={styles.colorOption}></div>
							<div className={styles.colorOption}></div>
						</div>
					</div>
				</div>
				<button>Apply</button>
			</div>
		</div>
	);
};

export default SettingsModal;
