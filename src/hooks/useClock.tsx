import moment from "moment";
import {
	pause,
	setEndTime,
	setIsFinished,
	setIsRunning,
	setProgressBarValue,
	setStartTime,
	setTotalDuration,
	setCurrentDuration,
} from "../store/features/clock/ClockSlicee.ts";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import store, { RootState, useAppDispatch } from "../store/Store";
import ClockMode from "../shared/enums/ClockMode";
import ClockService from "../services/ClockService";

const useClock = () => {
	const dispatch = useAppDispatch();

	const totalDuration: moment.Duration | any = useSelector(
		(state: RootState) => state.clock.totalDuration
	);

	const currentDuration: moment.Duration | any = useSelector(
		(state: RootState) => state.clock.currentDuration
	);

	const progressBarValue: number = useSelector(
		(state: RootState) => state.clock.progressBarValue
	);

	const isRunning: boolean = useSelector(
		(state: RootState) => state.clock.isRunning
	);
	const isFinished: boolean = useSelector(
		(state: RootState) => state.clock.isFinished
	);

	const currentClockMode: ClockMode = useSelector(
		(state: RootState) => state.clock.clockMode
	);
	const clockMinutes: number =
		ClockService.getCurrentClockModeMinutes(currentClockMode);

	const clockFormattedCurrentTime: string | JSX.Element = currentDuration ? (
		<>
			{currentDuration.minutes().toString().padStart(2, "0")}:
			{currentDuration.seconds().toString().padStart(2, "0")}
		</>
	) : (
		`${clockMinutes.toString().padStart(2, "0")}:00`
	);

	const updateClock = (): void => {
		setTimeout(() => {
			if (store.getState().clock.isRunning) {
				const newDuration: moment.Duration = moment
					.duration(currentDuration)
					.add(-0.1, "seconds");

				if (
					currentDuration.minutes() <= 0 &&
					currentDuration.seconds() <= 0
				) {
					dispatch(setIsRunning(false));
					dispatch(setIsFinished(true));
				} else {
					dispatch(setCurrentDuration(newDuration));
				}
			}
		}, 100);
	};

	const updateProgressBar = (): void => {
		setTimeout(() => {
			const timePercentage: number =
				((totalDuration.asMilliseconds() -
					currentDuration.asMilliseconds()) *
					100) /
				totalDuration.asMilliseconds();

			const newProgressBarValue: number = (timePercentage / 100) * 900;

			if (store.getState().clock.isRunning) {
				dispatch(setProgressBarValue(newProgressBarValue));
			}
		}, 100);
	};

	const startClock = (): void => {
		let newEndTime: moment.Moment;
		let newStartTime: moment.Moment;

		if (isFinished) {
			newStartTime = moment();
			dispatch(setStartTime(newStartTime));

			newEndTime = moment().add(clockMinutes, "minute");
			dispatch(setEndTime(newEndTime));

			const newTotalDuration = moment.duration(
				newEndTime.diff(newStartTime)
			);

			dispatch(setTotalDuration(newTotalDuration));
			dispatch(setCurrentDuration(newTotalDuration));
		}

		dispatch(setIsRunning(true));
		dispatch(setIsFinished(false));
	};

	const pauseClock = () => {
		dispatch(pause());
	};

	const clockButtonClickHandler = (): void => {
		if (isRunning) {
			pauseClock();
		} else {
			startClock();
		}
	};

	useEffect(() => {
		if (!isRunning && isFinished) {
			dispatch(setProgressBarValue(0));
		}
	}, [progressBarValue]);

	useEffect(() => {
		if (isRunning) {
			updateProgressBar();
		}
	}, [isRunning, progressBarValue, currentDuration]);

	useEffect(() => {
		if (isRunning) {
			updateClock();
		}
	}, [isRunning, currentDuration]);

	return {
		clockButtonClickHandler,
		isRunning,
		clockFormattedCurrentTime,
	};
};

export default useClock;
