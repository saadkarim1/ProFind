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
		path_name: "Jobs",
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

	return (
		<nav className='z-999 fixed inset-x-0 pt-2 backdrop-blur-3xl rounded-b-2xl'>
			<div className='bg-[#f5f5f5] w-[80%] mx-auto border-2 border-white drop-shadow-[0_5px_8px_rgba(0,0,0,0.25)] rounded-2xl flex items-center justify-between p-2'>
				<Link to={"/"} className='flex items-center space-x-0.5'>
					<img src='/src/assets/logo.svg' width={30} alt='' />
					<h1 className='text-3xl font-bold'>ProFind.</h1>
				</Link>

				<ul className='flex items-center font-semibold space-x-10 text-[18px] '>
					{links.map((link) => (
						<Link
							key={link.path_name}
							to={link.path}
							className={`${
								pathname === link.path ? "text-[#0082FA]" : "text-black"
							} `}
						>
							{link.path_name}
						</Link>
					))}
				</ul>
				<Activity mode={isAuthenticated ? "hidden" : "visible"}>
					<LoginPopup
						showLoginPopup={showLoginPopup}
						setShowLoginPopup={setShowLoginPopup}
					/>
				</Activity>
				<Activity mode={isAuthenticated ? "visible" : "hidden"}>
					{/* <div className='flex items-center space-x-3 text-[#0082FA] text-3xl px-4'>
						<div className='relative cursor-pointer'>
							<div className='absolute top-0 right-0 h-3 w-3 text-[9px] font-semibold text-center text-white rounded-full bg-red-400'>
								1
							</div>
							<BsChatDotsFill />
						</div>
						<div className='cursor-pointer'>
							<FaUser />
						</div>
					</div> */}
					<ProfilePopup
						showProfilePopup={showProfilePopup}
						setShowProfilePopup={setShowProfilePopup}
					/>
				</Activity>
			</div>
		</nav>
	);
};

export default NavBar;
