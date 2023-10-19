import { useSelector } from "react-redux";

import { RootState } from "../../../store/Store";

import AppColor from "../../../enums/Color";

import styles from "./ProgressBar.module.scss";

const ProgressBar = () => {
	const progressBarValue: number = useSelector(
		(state: RootState) => state.clock.progressBarValue
	);

	const color: AppColor = useSelector(
		(state: RootState) => state.settings.appColor
	);

	return (
		<>
			<div className={styles.progressBar}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					version="1.1"
					className={styles.circle}
				>
					{progressBarValue < 905 && (
						<circle
							cx="175"
							cy="175"
							r="145"
							strokeLinecap="round"
							style={{
								strokeDashoffset: progressBarValue,
								stroke: color,
							}}
						></circle>
					)}
				</svg>
			</div>
		</>
	);
};

export default ProgressBar;
