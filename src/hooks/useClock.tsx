/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react-hooks/exhaustive-deps */
import moment from "moment";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import * as ClockSlice from "../store/features/clock/ClockSlice.ts";

import { RootState, useAppDispatch } from "../store/Store";

import ClockMode from "../enums/ClockMode.ts";

const useClock = () => {
	const dispatch = useAppDispatch();

	const totalDuration: moment.Duration | null = useSelector(
		(state: RootState) => state.clock.totalDuration
	);
	const currentDuration: moment.Duration | null = useSelector(
		(state: RootState) => state.clock.currentDuration
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

	const pomodoroMinutes: number = useSelector(
		(state: RootState) => state.settings.pomodoroMinutes
	);
	const shortBreakMinutes: number = useSelector(
		(state: RootState) => state.settings.shortBreakMinutes
	);
	const longBreakMinutes: number = useSelector(
		(state: RootState) => state.settings.longBreakMinutes
	);

	const getCurrentClockModeMinutes = (
		currentClockMode: ClockMode
	): number => {
		if (currentClockMode === ClockMode.Pomodoro) {
			return pomodoroMinutes;
		} else if (currentClockMode === ClockMode.ShortBreak) {
			return shortBreakMinutes;
		} else if (currentClockMode === ClockMode.LongBreak) {
			return longBreakMinutes;
		}

		return 0;
	};

	const clockMinutes: number = getCurrentClockModeMinutes(currentClockMode);

	const clockFormattedCurrentTime: string | JSX.Element = currentDuration ? (
		<>
			{currentDuration.minutes().toString().padStart(2, "0")}:
			{currentDuration.seconds().toString().padStart(2, "0")}
		</>
	) : (
		`${clockMinutes.toString().padStart(2, "0")}:00`
	);

	const handleClockButtonClick = (): void => {
		if (isRunning) {
			pauseClock();
		} else {
			startClock();
		}
	};

	const startClock = (): void => {
		let newEndTime: moment.Moment;
		let newStartTime: moment.Moment;

		if (isFinished) {
			newStartTime = moment();
			dispatch(ClockSlice.setStartTime(newStartTime));

			newEndTime = moment().add(clockMinutes, "minute");
			dispatch(ClockSlice.setEndTime(newEndTime));

			const newTotalDuration = moment.duration(
				newEndTime.diff(newStartTime)
			);

			dispatch(ClockSlice.setTotalDuration(newTotalDuration));
			dispatch(ClockSlice.setCurrentDuration(newTotalDuration));
		}

		dispatch(ClockSlice.setIsRunning(true));
		dispatch(ClockSlice.setIsFinished(false));
	};

	const updateClock = (): void => {
		if (isRunning) {
			const newDuration: moment.Duration = moment
				.duration(currentDuration)
				.add(-0.1, "seconds");
			if (
				currentDuration &&
				currentDuration &&
				currentDuration.minutes() <= 0 &&
				currentDuration.seconds() <= 0
			) {
				dispatch(ClockSlice.reset());
				dispatch(ClockSlice.finish());
			} else {
				dispatch(ClockSlice.setCurrentDuration(newDuration));
			}
		}
	};

	const pauseClock = (): void => {
		dispatch(ClockSlice.pause());
	};

	const updateProgressBar = (): void => {
		const timePercentage: number =
			totalDuration && currentDuration
				? ((totalDuration.asMilliseconds() -
						currentDuration.asMilliseconds()) *
						100) /
				  totalDuration.asMilliseconds()
				: 100;

		const newProgressBarValue: number = (timePercentage / 100) * 900;

		if (isRunning) {
			dispatch(ClockSlice.setProgressBarValue(newProgressBarValue));
		}
	};

	useEffect(() => {
		if (isRunning) {
			const clockInterval: number = setInterval(updateClock, 100);

			return () => {
				clearInterval(clockInterval);
			};
		}
	}, [isRunning, updateClock]);

	useEffect(() => {
		if (isRunning) {
			const progressBarInterval: number = setInterval(
				updateProgressBar,
				5
			);

			return () => {
				clearInterval(progressBarInterval);
			};
		}
	}, [isRunning, updateProgressBar]);

	return {
		handleClockButtonClick,
		isRunning,
		clockFormattedCurrentTime,
	};
};

export default useClock;
