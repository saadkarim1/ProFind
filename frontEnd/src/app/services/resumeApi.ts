import type { ResumeType } from "@/models/resume";
import { apiSlice } from "./api";

export const resumeApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		uploadResume: builder.mutation({
			query: (payload) => {
				const formData = new FormData();
				console.log(payload);
				formData.append("cvFile", payload);
				return { url: "api/v1/resume", method: "POST", body: formData };
			},
		}),

		getUserResumes: builder.query<ResumeType[], void>({
			query: () => "api/v1/resume",
			transformResponse: (response: { data: ResumeType[] }) => response.data,
		}),
	}),
});

export const { useUploadResumeMutation, useGetUserResumesQuery } = resumeApi;
