import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
	reducerPath: "apiSlice",
	baseQuery: fetchBaseQuery({
		baseUrl: "http://localhost:8000/",
		prepareHeaders: (headers) => {
			const xsrfToken = document.cookie
				.split("; ")
				.find((row) => row.startsWith("XSRF-TOKEN="))
				?.split("=")[1];

			if (xsrfToken) {
				headers.set("X-XSRF-TOKEN", decodeURIComponent(xsrfToken));
			}

			return headers;
		},
		credentials: "include",
	}),
	tagTypes: ["Offers", "User"],
	endpoints: () => ({}),
});
