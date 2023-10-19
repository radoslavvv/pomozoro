import { useSelector } from "react-redux";
import { BsFillGearFill } from "react-icons/bs";

import { RootState, useAppDispatch } from "../../store/Store";
import * as SettingsSlice from "../../store/features/settings/SettingsSlice";

import SettingsForm from "../settingsForm/SettingsForm";

import styles from "./SettingsModal.module.scss";

const SettingsModal = () => {
	const dispatch = useAppDispatch();

	const modalIsOpen: boolean = useSelector(
		(state: RootState) => state.settings.modalIsOpen
	);

	const handleSettingsButtonClick = (): void => {
		dispatch(SettingsSlice.setModalIsOpen(true));
	};

	return (
		<div className={styles.settings}>
			<BsFillGearFill
				className={styles.settingsButton}
				onClick={handleSettingsButtonClick}
			/>

			{modalIsOpen && (
				<div className={styles.settingsModalOverlay}>
					<div className={styles.settingsModal}>
						<SettingsForm />
					</div>
				</div>
			)}
		</div>
	);
};

export default SettingsModal;
