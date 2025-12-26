import { authApi } from "@/app/services/authApi";
import type { SeekerType } from "@/models/model";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isAuthenticated: false,
	user: null,
} as { isAuthenticated: boolean; user: SeekerType | null };

const slice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		logout: () => initialState,
	},

	extraReducers: (builder) => {
		builder
			.addMatcher(
				authApi.endpoints.getUser.matchFulfilled,
				(state, { payload }) => {
					console.log(payload.data);
					state.isAuthenticated = true;
					state.user = payload.data;
				}
			)
			.addMatcher(authApi.endpoints.login.matchFulfilled, (state) => {
				state.isAuthenticated = true;
			})
			.addMatcher(authApi.endpoints.register.matchFulfilled, (state) => {
				state.isAuthenticated = true;
			})
			.addMatcher(authApi.endpoints.loginRecruiter.matchFulfilled, (state) => {
				state.isAuthenticated = true;
			})
			.addMatcher(
				authApi.endpoints.registerRecruiter.matchFulfilled,
				(state) => {
					state.isAuthenticated = true;
				}
			)
			.addMatcher(authApi.endpoints.getUser.matchPending, () => initialState)
			.addMatcher(authApi.endpoints.getUser.matchRejected, () => initialState)
			.addMatcher(authApi.endpoints.logout.matchFulfilled, (state) => {
				state.isAuthenticated = false;
				state.user = null;
			})
			.addMatcher(authApi.endpoints.loginRecruiter.matchFulfilled, (state) => {
				state.isAuthenticated = false;
				state.user = null;
			});

		// .addMatcher(
		// 	authApi.endpoints.getUser.matchFulfilled,
		// 	(state, { payload }) => {
		// 		// console.log(payload);
		// 		state.isAuthenticated = true;
		// 		state.user = payload;
		// 	}
		// );
	},
});

export const { logout } = slice.actions;
export default slice.reducer;

// export const selectIsAuthenticated = (state: RooteState) =>
// 	state.auth.isAuthenticated;
