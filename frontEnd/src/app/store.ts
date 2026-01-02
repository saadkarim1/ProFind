import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./services/api";
import auth from "@/features/auth/authSlice";

export const store = configureStore({
	reducer: {
		[apiSlice.reducerPath]: apiSlice.reducer,
		auth,
	},

	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RooteState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;