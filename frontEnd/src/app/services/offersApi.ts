import { apiSlice } from "./api";

export const offersApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getAllOffers: builder.query({
			query: () => "api/v1/offers",
			providesTags: ["Offers"],
		}),

		addOffer: builder.mutation({
			query: (payload) => ({
				url: "api/v1/offers",
				method: "Post",
				body: payload,
			}),
			invalidatesTags: ["Offers"],
		}),
	}),
});

export const { useGetAllOffersQuery, useAddOfferMutation } = offersApi;
