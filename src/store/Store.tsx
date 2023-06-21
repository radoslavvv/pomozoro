import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import clockSlice from "./features/clock/clockSlice";

const store = configureStore({
	reducer: {
		clock: clockSlice.reducer,
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
