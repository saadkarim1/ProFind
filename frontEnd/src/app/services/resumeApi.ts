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
			invalidatesTags: [{ type: "Resume", id: "LIST" }],
		}),

		getUserResumes: builder.query<ResumeType[], void>({
			query: () => "api/v1/resume",
			transformResponse: (response: { data: ResumeType[] }) => response.data,
			providesTags: (response) =>
				response
					? [
							...response.map(({ id }) => ({
								type: "Resume" as const,
								id,
							})),
							{ type: "Resume", id: "LIST" },
					  ]
					: [{ type: "Resume", id: "LIST" }],
		}),

		deleteResume: builder.mutation({
			query: (payload) => ({
				url: `api/v1/resume/${payload}`,
				method: "DELETE",
			}),
			invalidatesTags: [{ type: "Resume", id: "LIST" }],
		}),

		getResume: builder.query<ResumeType, string | undefined>({
			query: (payload) => `api/v1/resume/${payload}`,
			transformResponse: (response: { data: ResumeType }) => response.data,
		}),
	}),
});

export const {
	useUploadResumeMutation,
	useGetUserResumesQuery,
	useDeleteResumeMutation,
	useGetResumeQuery,
} = resumeApi;
