import ISettingsProps from "./ISettingsProps";
import { BsFillGearFill } from "react-icons/bs";

import styles from "./Settings.module.scss";
import SettingsModal from "./settingsModal/SettingsModal";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store/Store";
import { setModalIsOpen } from "../../store/features/settings/SettingsSlice";

const Settings = (props: ISettingsProps) => {
	const dispatch = useAppDispatch();

	const modalIsOpen: boolean = useSelector(
		(state: RootState) => state.settings.modalIsOpen
	);

	const settingsButtonClick = (): void => {
		dispatch(setModalIsOpen(true));
	};

	return (
		<div className={styles.settings}>
			<BsFillGearFill
				className={styles.settingsButton}
				onClick={settingsButtonClick}
			/>
			{modalIsOpen && <SettingsModal />}
		</div>
	);
};

export default Settings;
