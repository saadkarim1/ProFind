import { offersApi } from "@/features/offers/offersApi";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
	reducer: {
		[offersApi.reducerPath]: offersApi.reducer,
	},

	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(offersApi.middleware),
});

export type RooteState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
