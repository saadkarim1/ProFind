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
			<main>
				<Outlet />
			</main>
			<Activity
				mode={
					pathname == "/login" || pathname == "/register" ? "hidden" : "visible"
				}
			>
				<Footer />
				{/* <OldFooter /> */}
			</Activity>
		</div>
	);
};

export default Layout;
