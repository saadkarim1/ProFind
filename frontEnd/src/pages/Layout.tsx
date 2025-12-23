import { Outlet, useLocation } from "react-router";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Activity } from "react";
// import OldFooter from "../components/OldFooter";

const Layout = () => {
	const { pathname } = useLocation();
	return (
		<div>
			<NavBar />
			<main
				className={`${
					pathname !== "/" && pathname !== "/about" && "pt-30 w-[80%] mx-auto"
				} `}
			>
				<Outlet />
			</main>
			<Activity
				mode={
					pathname == "/login" ||
					pathname == "/register" ||
					pathname === "/recruiter/login"
						? "hidden"
						: "visible"
				}
			>
				<Footer />
				{/* <OldFooter /> */}
			</Activity>
		</div>
	);
};

export default Layout;
