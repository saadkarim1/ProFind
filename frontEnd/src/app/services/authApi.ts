import { apiSlice } from "@/app/services/api";
import type { RecruiterType } from "@/models/recruiter";
import type { UserType } from "@/models/user";
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
			invalidatesTags: ["User"],
		}),

		getUser: builder.query<UserType | RecruiterType, void>({
			query: () => "api/v1/user",
			transformResponse: (response: { data: UserType | RecruiterType }) =>
				response.data,
			providesTags: ["User"],
		}),

		registerRecruiter: builder.mutation({
			query: (payload) => ({
				url: "v1/register/recruiter",
				method: "Post",
				body: payload,
			}),
			invalidatesTags: ["User"],
		}),

		loginRecruiter: builder.mutation({
			query: (payload) => ({
				url: "v1/login/recruiter",
				method: "Post",
				body: payload,
			}),
			invalidatesTags: ["User"],
		}),

		logoutRecruiter: builder.mutation<void, void>({
			query: () => ({ url: "v1/logout/recruiter", method: "Post" }),
			invalidatesTags: ["User"],
		}),
	}),
});

export const {
	useLazyGetCSRFQuery,
	useRegisterMutation,
	useLoginMutation,
	useLogoutMutation,
	useGetUserQuery,
	useLoginRecruiterMutation,
	useRegisterRecruiterMutation,
	useLogoutRecruiterMutation,
} = authApi;
