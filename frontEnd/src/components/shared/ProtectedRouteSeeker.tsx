import { useGetUserQuery } from "@/app/services/authApi";
import { Navigate, Outlet } from "react-router";

const ProtectedRouteSeeker = () => {
	const { data: authenticatedUser, isError } = useGetUserQuery(undefined);

	if (isError || authenticatedUser?.data.role === "recruiter") {
		return <Navigate to={"/login"} />;
	}
	return <Outlet />;
};

export default ProtectedRouteSeeker;
