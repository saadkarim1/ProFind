import { useGetUserQuery } from "@/app/services/authApi";
import { Navigate, Outlet } from "react-router";

const PretectedRouteRecruiter = () => {
	const { data: authenticatedUser, isError } = useGetUserQuery(undefined);

	if (isError || authenticatedUser?.role === "user") {
		return <Navigate to={"/recruiter/login"} />;
	}
	return <Outlet />;
};

export default PretectedRouteRecruiter;
