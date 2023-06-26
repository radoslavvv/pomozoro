import ISettingsProps from "./ISettingsProps";
import { BsFillGearFill } from "react-icons/bs";

import styles from "./Settings.module.scss";

const Settings = (props: ISettingsProps) => {
	return (
		<div className={styles.settings}>
			<BsFillGearFill className={styles.settingsButton} />
		</div>
	);
};

export default Settings;
