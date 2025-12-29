import { authApi } from "@/app/services/authApi";
import type { AuthUser } from "@/models/authUser";
import type { RecruiterType } from "@/models/recruiter";
import type { UserType } from "@/models/user";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isAuthenticated: false,
	user: null,
} as { isAuthenticated: boolean; user: AuthUser | null };

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
					state.isAuthenticated = true;
					state.user = payload;
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
	},
});

export const { logout } = slice.actions;
export default slice.reducer;
