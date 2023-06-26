import ISettingsProps from "./ISettingsProps";
import { BsFillGearFill } from "react-icons/bs";

import styles from "./Settings.module.scss";
import SettingsModal from "./settingsModal/SettingsModal";

const Settings = (props: ISettingsProps) => {
	return (
		<div className={styles.settings}>
			<BsFillGearFill className={styles.settingsButton} />
			<SettingsModal />
		</div>
	);
};

export default Settings;
