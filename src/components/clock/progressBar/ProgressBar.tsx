import { useEffect, useState } from "react";
import IProgressBarProps from "./IProgressBarProps";

import styles from "./ProgressBar.module.scss";

const ProgressBar = (props: IProgressBarProps) => {
	const [progressValue, setProgressValue] = useState(0);

	// useEffect(() => {
	// 	setInterval(() => {
	// 		setProgressValue((prev) => prev + 100);
	// 	}, 100);
	// }, []);

	return (
		<>
			<div className={styles.progressBar}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					version="1.1"
					className={styles.circle}
				>
					<circle
						cx="175"
						cy="175"
						r="145"
						strokeLinecap="round"
						style={{ strokeDashoffset: progressValue }}
					></circle>
				</svg>
			</div>
		</>
	);
};

export default ProgressBar;
