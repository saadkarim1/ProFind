import { Activity, useState } from "react";
import { Link, useLocation } from "react-router";
import LoginPopup from "./LoginPopup";
import ProfilePopup from "./ProfilePopup";

type Link = {
	path: string;
	path_name: string;
};

const links: Link[] = [
	{
		path: "/",
		path_name: "Home",
	},
	{
		path: "/jobs",
		path_name: "Find Job",
	},
	{
		path: "/offers",
		path_name: "Find Talent",
	},
	{
		path: "/about",
		path_name: "About",
	},
];

const NavBar = () => {
	const { pathname } = useLocation();
	const [showProfilePopup, setShowProfilePopup] = useState<boolean>(false);
	const [showLoginPopup, setShowLoginPopup] = useState<boolean>(false);
	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);
	// const [isJobSeeker, setIsJobSeeker] = useState<boolean>(false);

	return (
		<nav className='z-999 fixed w-[80%] mx-auto inset-x-0 pt-3'>
			<div className='navbar drop-shadow-[0_0px_2px_rgba(0,0,0,0.25)] rounded-2xl flex items-center p-3'>
				<Link to={"/"} className='flex items-center space-x-0.5 w-[25%]'>
					<img src='/src/assets/logo.svg' width={30} alt='' />
					<h1 className='text-3xl font-bold'>ProFind.</h1>
				</Link>

				<ul className='flex items-center justify-center font-medium space-x-10 text-[18px] w-[50%]'>
					{links.map((link) => {
						if (link.path_name) {
							return (
								<Link
									key={link.path_name}
									to={link.path}
									className={`${
										pathname === link.path ? "text-[#0082FA]" : "text-black"
									} `}
								>
									{link.path_name}
								</Link>
							);
						}
					})}
				</ul>
				<div className='w-[25%] flex items-center justify-end'>
					<Activity mode={isAuthenticated ? "hidden" : "visible"}>
						<LoginPopup
							showLoginPopup={showLoginPopup}
							setShowLoginPopup={setShowLoginPopup}
						/>
					</Activity>
					<Activity mode={isAuthenticated ? "visible" : "hidden"}>
						<ProfilePopup
							showProfilePopup={showProfilePopup}
							setShowProfilePopup={setShowProfilePopup}
						/>
					</Activity>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
