import { apiSlice } from "@/app/services/api";

// type UserType = {
// 	id: string;
// };

// type PayloadType = {
// 	name: string;
// 	email: string;
// 	password: string;
// };

export const authApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getCSRF: builder.query<void, void>({
			query: () => "sanctum/csrf-cookie",
		}),

		register: builder.mutation({
			query: (payload) => ({
				url: "v1/register",
				method: "POST",
				body: payload,
			}),
		}),

		login: builder.mutation({
			query: (payload) => ({
				url: "v1/login",
				method: "Post",
				body: payload,
			}),
		}),

		getUser: builder.query<void, void>({
			query: () => "api/v1/user",
		}),
	}),
});

export const {
	useLazyGetCSRFQuery,
	useRegisterMutation,
	useLoginMutation,
	useGetUserQuery,
} = authApi;
