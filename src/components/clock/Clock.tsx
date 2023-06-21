import IClockProps from "./IClockProps";

import moment from "moment";

import ProgressBar from "./progressBar/ProgressBar";
import store, { RootState, useAppDispatch } from "../../store/Store";
import { useSelector } from "react-redux";

import styles from "./Clock.module.scss";
import { useEffect } from "react";
import {
	setEndTime,
	setIsRunning,
	setCurrentTime,
	setIntervalId,
	setIsFinished,
	setStartTime,
} from "../../store/features/clock/clockSlice";

const Clock = (props: IClockProps) => {
	const dispatch = useAppDispatch();

	const startTime: any = useSelector(
		(state: RootState) => state.clock.startTime
	);

	const endTime: any = useSelector((state: RootState) => state.clock.endTime);

	const currentTime: moment.Moment = useSelector(
		(state: RootState) => state.clock.currentTime
	);

	const isRunning: boolean = useSelector(
		(state: RootState) => state.clock.isRunning
	);

	console.log("render", isRunning);

	const isFinished: boolean = useSelector(
		(state: RootState) => state.clock.isFinished
	);

	// const intervalId: number = useSelector(
	// 	(state: RootState) => state.clock.intervalId
	// );

	const updateClock = (): void => {
		setTimeout(() => {
			const clockIsRunning: boolean = store.getState().clock.isRunning;
			if (clockIsRunning) {
				const currentEndTime: moment.Moment =
					store.getState().clock.endTime;
				const currentStartTime: moment.Moment =
					store.getState().clock.startTime;

				const currentTime: moment.Duration = moment.duration(
					currentEndTime.diff(currentStartTime)
				);

				dispatch(setCurrentTime(currentTime));
				dispatch(
					setStartTime(moment(currentStartTime).add(1, "second"))
				);

				if (currentTime.minutes() <= 0 && currentTime.seconds() <= 0) {
					dispatch(setIsRunning(false));
					dispatch(setIsFinished(true));
				} else {
					updateClock();
				}
			}
		}, 1000);
	};

	const startClock = (): void => {
		let currentEndTime: moment.Moment;
		let currentStartTime: moment.Moment;
		if (isFinished) {
			currentStartTime = moment();
			dispatch(setStartTime(currentStartTime));

			currentEndTime = moment().add(0.1, "minute").add(4, "second");
			dispatch(setEndTime(currentEndTime));
		} else {
			currentEndTime = endTime;
			currentStartTime = startTime;
		}

		dispatch(setIsRunning(true));
		dispatch(setIsFinished(false));

		updateClock();
	};

	const pauseClock = () => {
		dispatch(setIsRunning(false));
	};

	// const stopClock = () => {
	// 	dispatch(setIsRunning(false));
	// 	dispatch(setIsFinished(true));
	// };

	const clockButtonClickHandler = (): void => {
		if (isRunning) {
			pauseClock();
		} else {
			startClock();
		}
	};

	// useEffect(() => {
	// 	if (isRunning && !isFinished) {
	// 		updateTimer();
	// 	}
	// }, [isRunning, startTime, endTime, isFinished]);

	return (
		<div className={styles.clockContainer}>
			<div className={styles.clock} onClick={clockButtonClickHandler}>
				<ProgressBar />
				<div className={styles.innerCircle}>
					<span className={styles.time}>
						{currentTime ? (
							<>
								{Math.abs(currentTime?.minutes())
									?.toString()
									?.padStart(2, "0")}
								:
								{Math.abs(currentTime?.seconds())
									?.toString()
									?.padStart(2, "0")}
							</>
						) : (
							"15:00"
						)}
					</span>
					<button className={styles.clockButton}>
						{isRunning ? "PAUSE" : "START"}
					</button>
				</div>
			</div>
		</div>
	);
};

export default Clock;
