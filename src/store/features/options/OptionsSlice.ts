import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ClockMode from "../../../shared/enums/ClockMode";
import { IOptionsState } from "./IOptionsSlice";

const initialState: IOptionsState = {
  pomodoroMinutes: 1,
  shortBreakMinutes: 5,
  longBreakMinutes: 15,
};

export const OptionsSlice = createSlice({
  name: "clock",
  initialState,
  reducers: {
    setClockMode: (state, action: PayloadAction<ClockMode>) => {
      //   state.clockMode = action.payload;
    },
  },
});

export const { setClockMode } = OptionsSlice.actions;

export default OptionsSlice;
