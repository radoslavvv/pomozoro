import moment from "moment";
import {
	setCurrentTime,
	setEndTime,
	setIsFinished,
	setIsRunning,
	setProgressBarValue,
	setStartTime,
	setTotalDuration,
} from "../store/features/clock/ClockSlicee.ts";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../store/Store";
import ClockMode from "../shared/enums/ClockMode";
import ClockService from "../services/ClockService";

const useClock = () => {
	const dispatch = useAppDispatch();

	const totalDuration: moment.Duration = useSelector(
		(state: RootState) => state.clock.totalDuration
	);

	const startTime: any = useSelector(
		(state: RootState) => state.clock.startTime
	);
	const endTime: any = useSelector((state: RootState) => state.clock.endTime);

	const currentTime: any =
		endTime && startTime ? moment.duration(endTime.diff(startTime)) : null;
	const currentTimeMinutes =
		currentTime &&
		Math.abs(currentTime.minutes())?.toString()?.padStart(2, "0");
	const currentTimeSeconds =
		currentTime &&
		Math.abs(currentTime.seconds())?.toString()?.padStart(2, "0");

	const progressBarValue: any = useSelector(
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

	const clockFormattedCurrentTime = currentTime ? (
		<>
			{currentTimeMinutes}:{currentTimeSeconds}
		</>
	) : (
		`${clockMinutes.toString().padStart(2, "0")}:00`
	);

	const updateClock = (): void => {
		if (isRunning) {
			// dispatch(setCurrentTime(currentTime));

			setTimeout(() => {
				const newStartTime = moment(startTime).add(1, "second");
				dispatch(setStartTime(newStartTime));
			}, 1000);

			if (currentTime.minutes() <= 0 && currentTime.seconds() <= 0) {
				dispatch(setIsRunning(false));
				dispatch(setIsFinished(true));
			}
		}
	};

	const updateProgressBar = (): void => {
		if (isRunning) {
			const durationUntilEnd: moment.Duration = moment.duration(
				endTime.diff(moment())
			);
			const timePercentage: number =
				((totalDuration.asMilliseconds() -
					durationUntilEnd.asMilliseconds()) *
					100) /
				totalDuration.asMilliseconds();

			setTimeout(() => {
				dispatch(setProgressBarValue((timePercentage / 100) * 900));
			}, 100);
		}
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
		} else {
			newEndTime = endTime;
			newStartTime = startTime;
		}

		dispatch(setIsRunning(true));
		dispatch(setIsFinished(false));
	};

	const pauseClock = () => {
		dispatch(setIsRunning(false));
	};

	const clockButtonClickHandler = (): void => {
		if (isRunning) {
			pauseClock();
		} else {
			startClock();
		}
	};

	useEffect(() => {
		if (isRunning) {
			updateProgressBar();
		}
	}, [isRunning, progressBarValue]);

	useEffect(() => {
		if (isRunning) {
			updateClock();
		}
	}, [isRunning, startTime]);

	return {
		clockButtonClickHandler,
		isRunning,
		clockFormattedCurrentTime,
	};
};

export default useClock;
