import { createSlice } from "@reduxjs/toolkit";

type initialStateType = { counter: number };
const initialState: initialStateType = {
	counter: 0,
};
export const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		increment: (state) => {
			state.counter += 1;
		},
	},
});

export const { increment } = counterSlice.actions;
export default counterSlice.reducer;
