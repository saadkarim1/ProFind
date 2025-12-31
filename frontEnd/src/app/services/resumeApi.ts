import { apiSlice } from "./api";

export const resumeApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		test: builder.mutation({
			query: (payload) => {
				const formData = new FormData();
				console.log(payload);
				formData.append("cvFile", payload);
				return { url: "api/v1/resume", method: "POST", body: formData };
			},
		}),
	}),
});

export const { useTestMutation } = resumeApi;
