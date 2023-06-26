import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import ClockSlice from "./features/clock/ClockSlice.ts";
import SettingsSlice from "./features/settings/SettingsSlice.ts";

const store = configureStore({
	reducer: {
		clock: ClockSlice.reducer,
		settings: SettingsSlice.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
