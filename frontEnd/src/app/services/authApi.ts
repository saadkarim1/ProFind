import { apiSlice } from "@/app/services/api";
import type { AuthUser } from "@/models/authUser";
import type { ApiResponse } from "@/models/response";
import type { LoginFieldsType } from "@/schema/loginSchema";
import type { RegisterFieldstype } from "@/schema/registerSchema";

export const authApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getCSRF: builder.query<void, void>({
			query: () => "sanctum/csrf-cookie",
		}),

		register: builder.mutation<ApiResponse<AuthUser>, RegisterFieldstype>({
			query: (payload) => ({
				url: "v1/register",
				method: "Post",
				body: payload,
			}),
			invalidatesTags: ["User"],
		}),

		login: builder.mutation<ApiResponse<AuthUser>, LoginFieldsType>({
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

		getUser: builder.query<ApiResponse<AuthUser>, void>({
			query: () => "api/v1/user",
			transformResponse: (response: { data: ApiResponse<AuthUser> }) =>
				response.data,
			providesTags: () => ["User"],
		}),

		registerRecruiter: builder.mutation<ApiResponse<AuthUser>, void>({
			query: (payload) => ({
				url: "v1/register/recruiter",
				method: "Post",
				body: payload,
			}),
			invalidatesTags: ["User"],
		}),

		loginRecruiter: builder.mutation<ApiResponse<AuthUser>, void>({
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
