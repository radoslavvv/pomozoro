import ISettingsModalProps from "./ISettingsModalProps";
import { BsXLg } from "react-icons/bs";

import styles from "./SettingsModal.module.scss";

const SettingsModal = (props: ISettingsModalProps) => {
	return (
		<div className={styles.settingsModalOverlay}>
			<div className={styles.settingsModal}>
				<div className={styles.settingsModal__header}>
					<h3>Settings</h3>
					<span className={styles.closeIcon}>&#10006;</span>
				</div>
				<div className={styles.settingsModal__sections}>
					<div className={styles.timeSection}>
						<p className={styles.sectionLabel}>TIME (MINUTES)</p>
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
