import IOptionsProps from "./IOptionsProps";
import { BsFillGearFill } from "react-icons/bs";

import styles from "./Options.module.scss";

const Options = (props: IOptionsProps) => {
	return (
		<div className={styles.options}>
			<BsFillGearFill className={styles.optionsButton} />
		</div>
	);
};

export default Options;
