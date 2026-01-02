import { authApi } from "@/app/services/authApi";
import type { AuthUser } from "@/models/authUser";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isAuthenticated: false,
	isCompletProfile: false,
	user: null,
} as {
	isAuthenticated: boolean;
	user: AuthUser | null;
	isCompletProfile: boolean;
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		logout: () => initialState,
		checkIsCompletProfile: ({ user, isCompletProfile }) => {
			console.log(user?.name);
			if (user?.role === "user") {
				if (!user?.about_me || !user?.job || !user?.phone || !user?.location) {
					isCompletProfile = true;
					console.log("second");
				}
			}
		},
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

export const { logout, checkIsCompletProfile } = authSlice.actions;
export default authSlice.reducer;
