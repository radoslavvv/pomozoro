import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import ClockSlice from "./features/clock/ClockSlice";
import OptionsSlice from "./features/options/OptionsSlice";

const store = configureStore({
	reducer: {
		clock: ClockSlice.reducer,
		options: OptionsSlice.reducer,
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
