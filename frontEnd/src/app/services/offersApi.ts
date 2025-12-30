import type { OfferType } from "@/models/offer";
import { apiSlice } from "./api";

export const offersApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getAllOffers: builder.query<OfferType[], void>({
			query: () => "api/v1/offers",
			transformResponse: (response: { data: OfferType[] }) => response.data,
			providesTags: (result) =>
				result
					? [
							...result.map(({ offer_id }) => ({
								type: "Offers" as const,
								id: offer_id,
							})),
							{ type: "Offers", id: "ALL" },
					  ]
					: [{ type: "Offers", id: "ALL" }],
		}),

		addOffer: builder.mutation({
			query: (payload) => ({
				url: "api/v1/offers",
				method: "Post",
				body: payload,
			}),
			invalidatesTags: [{ type: "Offers", id: "ALL" }],
		}),

		applyToOffer: builder.mutation({
			query: (payload) => ({
				url: `api/v1/offers/${payload}/apply`,
				method: "POST",
			}),
			invalidatesTags: (result, error, payload) => [
				{ type: "Offers", id: payload },
				{ type: "Offers", id: "APPLIED" },
			],
		}),

		getAppliedOffers: builder.query<OfferType[], void>({
			query: () => "api/v1/offers/applied",
			transformResponse: (response: { data: OfferType[] }) => response.data,
			providesTags: (result) =>
				result
					? [
							...result.map(({ offer_id }) => ({
								type: "Offers" as const,
								id: offer_id,
							})),
							{ type: "Offers", id: "APPLIED" },
					  ]
					: [{ type: "Offers", id: "APPLIED" }],
		}),

		getSavedOffers: builder.query<OfferType[], void>({
			query: () => "api/v1/offers/saved",
			transformResponse: (response: { data: OfferType[] }) => response.data,
			providesTags: (result) =>
				result
					? [
							...result.map(({ offer_id }) => ({
								type: "Offers" as const,
								id: offer_id,
							})),
							{ type: "Offers", id: "SAVED" },
					  ]
					: [{ type: "Offers", id: "SAVED" }],
		}),

		saveOffer: builder.mutation({
			query: (payload) => ({
				url: `api/v1/offers/${payload}/save`,
				method: "Post",
			}),
			invalidatesTags: (result, error, payload) => [
				{ type: "Offers", id: payload },
				{ type: "Offers", id: "SAVED" },
			],
		}),

		getOffer: builder.query<OfferType, string | undefined>({
			query: (payload) => `api/v1/offers/${payload}`,
			transformResponse: (response: { data: OfferType }) => response.data,
		}),

		getRecruiterOffers: builder.query<OfferType[], void>({
			query: () => "api/v1/offers/saad",
			transformResponse: (response: { data: OfferType[] }) => response.data,
		}),
	}),
});

export const {
	useGetAllOffersQuery,
	useAddOfferMutation,
	useApplyToOfferMutation,
	useGetAppliedOffersQuery,
	useSaveOfferMutation,
	useGetSavedOffersQuery,
	useGetOfferQuery,
	useGetRecruiterOffersQuery,
} = offersApi;
