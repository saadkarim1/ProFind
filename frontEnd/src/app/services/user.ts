import { apiSlice } from "./api";

export const userApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		updateUser: builder.mutation({
			query: (payload) => ({
				url: `api/v1/user/${payload.id}`,
				method: "PATCH",
				body: payload,
			}),
			invalidatesTags: ["User"],
		}),
	}),
});

export const { useUpdateUserMutation } = userApi;
