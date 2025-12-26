import { apiSlice } from "@/app/services/api";
import type { SeekerType } from "@/models/model";

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
				method: "Post",
				body: payload,
			}),
			invalidatesTags: ["User"],
		}),

		login: builder.mutation({
			query: (payload) => ({
				url: "v1/login",
				method: "Post",
				body: payload,
			}),
			invalidatesTags: ["User"],
		}),

		logout: builder.mutation<void, void>({
			query: () => ({ url: "v1/logout", method: "Post" }),
		}),

		getUser: builder.query<SeekerType, void>({
			query: () => "api/user",
			providesTags: ["User"],
		}),
	}),
});

export const {
	useLazyGetCSRFQuery,
	useRegisterMutation,
	useLoginMutation,
	useLogoutMutation,
	useGetUserQuery,
} = authApi;
