import { useSelector } from "react-redux";

import { RootState } from "../../store/Store";

import AppColor from "../../enums/Color";

import styles from "./Header.module.scss";

const Header = () => {
	const appColor: AppColor = useSelector(
		(state: RootState) => state.settings.appColor
	);

	return (
		<header className={styles.header}>
			pomo<span style={{ color: appColor }}>z</span>oro
		</header>
	);
};

export default Header;
