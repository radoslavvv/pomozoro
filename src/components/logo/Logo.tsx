import { useSelector } from "react-redux";
import ILogoProps from "./ILogoProps";

import styles from "./Logo.module.scss";
import { RootState } from "../../store/Store";
import Color from "../../shared/enums/Color";

const Logo = (props: ILogoProps) => {
	const color: Color = useSelector(
		(state: RootState) => state.settings.color
	);

	return (
		<div className={styles.logo}>
			pomo<span style={{ color: color }}>z</span>oro
		</div>
	);
};

export default Logo;
