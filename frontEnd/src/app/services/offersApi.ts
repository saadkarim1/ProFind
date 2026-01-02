import type { OfferType } from "@/models/offer";
import { apiSlice } from "./api";
import type { applicantType } from "@/models/applicant";

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
			invalidatesTags: [
				{ type: "Offers", id: "ALL" },
				{ type: "Offers", id: "RECRUITER" },
			],
		}),

		applyToOffer: builder.mutation({
			query: (payload) => {
				return {
					url: `api/v1/offers/${payload?.id}/apply`,
					method: "POST",
					body: { resume_id: payload?.resume_id },
				};
			},
			invalidatesTags: (result, error, payload) => [
				{ type: "Offers", id: payload?.id },
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
			providesTags: [{ type: "Offers", id: "RECRUITER" }],
		}),
		getOfferApplicants: builder.query<applicantType[], string | undefined>({
			query: (payload) => `api/v1/offers/${payload}/applicants`,
			providesTags: (result) =>
				result
					? [
							...result.map(({ applicant_id }) => ({
								type: "Offers" as const,
								id: applicant_id,
							})),
							{ type: "Offers", id: "OFFERAPPLICANTS" },
					  ]
					: [{ type: "Offers", id: "OFFERAPPLICANTS" }],
		}),

		accepApplication: builder.mutation({
			query: (payload) => ({
				url: `api/v1/offers/${payload.offerId}/applicants/${payload.userId}/accept`,
				method: "POST",
			}),
			invalidatesTags: (result, error, { userId }) => [
				{ type: "Offers", id: userId },
			],
		}),
		rejectpplication: builder.mutation({
			query: (payload) => ({
				url: `api/v1/offers/${payload.offerId}/applicants/${payload.userId}/reject`,
				method: "POST",
			}),
			invalidatesTags: (result, error, { userId }) => [
				{ type: "Offers", id: userId },
			],
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
	useGetOfferApplicantsQuery,
	useAccepApplicationMutation,
	useRejectpplicationMutation,
} = offersApi;
