import { useEffect, useState } from "react";
import IProgressBarProps from "./IProgressBarProps";

import styles from "./ProgressBar.module.scss";
import { RootState, useAppDispatch } from "../../../store/Store";
import { useSelector } from "react-redux";
import Color from "../../../shared/enums/Color";

const ProgressBar = (props: IProgressBarProps) => {
	const progressBarValue: any = useSelector(
		(state: RootState) => state.clock.progressBarValue
	);

	const color: Color = useSelector(
		(state: RootState) => state.settings.color
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
