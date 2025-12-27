import type { OfferType } from "@/models/offer";
import { apiSlice } from "./api";

export const offersApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getAllOffers: builder.query<OfferType[], void>({
			query: () => "api/v1/offers",
			// transformResponse: () => response,
			transformResponse: (response: { data: OfferType[] }) => response.data,
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
