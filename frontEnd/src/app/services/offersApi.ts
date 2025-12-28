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

		applyToOffer: builder.mutation<void, string>({
			query: (payload) => ({
				url: `api/v1/offers/${payload}/apply`,
				method: "POST",
			}),
		}),

		getAppliedOffers: builder.query<OfferType[], void>({
			query: () => "api/v1/offers/applied",
			transformResponse: (response: { data: OfferType[] }) => response.data,
		}),

		getSavedOffers: builder.query<OfferType[], void>({
			query: () => "api/v1/offers/saved",
			transformResponse: (response: { data: OfferType[] }) => response.data,
		}),

		saveOffer: builder.mutation({
			query: (payload) => ({
				url: `api/v1/offers/${payload}/save`,
				method: "Post",
			}),
		}),
	}),
});

export const {
	useGetAllOffersQuery,
	useAddOfferMutation,
	useApplyToOfferMutation,
	useGetAppliedOffersQuery,
	useSaveOfferMutation,
	useGetSavedOffersQuery
} = offersApi;
