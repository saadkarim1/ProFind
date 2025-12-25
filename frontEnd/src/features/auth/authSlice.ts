import { authApi } from "@/app/services/authApi";
import type { RooteState } from "@/app/store";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isAuthenticated: false,
	user: "",
} as { isAuthenticated: boolean; user: string };

const slice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		logout: () => initialState,
	},

	extraReducers: (builder) => {
		builder.addMatcher(
			authApi.endpoints.getUser.matchFulfilled,
			(state, { payload }) => {
				state.isAuthenticated = true;
				console.log("payload", payload);
				state.user = "saad";
				// if(payload) {

				//     state.user = payload.name;
				// }
			}
		);
	},
});

export const { logout } = slice.actions;
export default slice.reducer;

export const selectIsAuthenticated = (state: RooteState) =>
	state.auth.isAuthenticated;
