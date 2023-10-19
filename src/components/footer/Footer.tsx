import { useSelector } from "react-redux";

import { RootState } from "../../store/Store";

import FontType from "../../enums/FontType";

import styles from "./Footer.module.scss";

const Footer = () => {
	const fontType: FontType = useSelector(
		(state: RootState) => state.settings.fontType
	);

	return (
		<footer className={styles.footer}>
			<a
				href="https://github.com/radoslavvv/"
				target="_blank"
				style={{ fontFamily: fontType }}
			>
				{"</> GitHub"}
			</a>
		</footer>
	);
};

export default Footer;
