import type { RecruiterType } from "@/models/recruiter";
import { apiSlice } from "./api";

export const recruiterApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		updateRecruiterProfile: builder.mutation<RecruiterType, RecruiterType>({
			query: (payload) => ({
				// const { id, ...body } = payload,
				url: `api/v1/recruiter/${payload.id}`,
				method: "PATCH",
				body: payload,
			}),
			invalidatesTags: ["User"],
		}),
	}),
});

export const { useUpdateRecruiterProfileMutation } = recruiterApi;
