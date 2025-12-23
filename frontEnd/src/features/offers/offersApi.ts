import type { JobType } from "@/models/job";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const offersApi = createApi({
	reducerPath: "offersApi",
	baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:8000/api/v1" }),
	endpoints: (builder) => ({
		getAllOffers: builder.query<JobType[], void>({
			query: () => "offers",
		}),
	}),
});

export const { useGetAllOffersQuery } = offersApi;
