import { apiSlice } from "./api";

export const offersApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getAllOffers: builder.query({
			query: () => "api/v1/offers",
		}),
	}),
});

export const { useGetAllOffersQuery } = offersApi;
