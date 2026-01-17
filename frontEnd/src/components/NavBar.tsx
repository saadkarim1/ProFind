import { Activity, useState } from "react";
import { Link, useLocation } from "react-router";
import LoginPopup from "./LoginPopup";
import ProfilePopup from "./ProfilePopup";
import { useGetUserQuery } from "@/app/services/authApi";
import { GoHome } from "react-icons/go";
import { BriefcaseBusiness, Building2, House } from "lucide-react";
import { MdOutlineWorkOutline } from "react-icons/md";

type LinkType = {
	path: string;
	path_name: string;
};

const recruiterLinks: LinkType[] = [
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

const normalLinks: LinkType[] = [
	{
		path: "/",
		path_name: "Home",
	},
	{
		path: "/jobs",
		path_name: "Find Job",
	},
	{
		path: "/about",
		path_name: "About",
	},
];

const mobileLinks = [
	{
		path: "/",
		path_name: "Home",
		Icon: House,
	},
	{
		path: "/jobs",
		path_name: "Find Job",
		Icon: BriefcaseBusiness,
	},
	{
		path: "/about",
		path_name: "About",
		Icon: Building2,
	},
];

const NavBar = () => {
	const { pathname } = useLocation();
	const { data: authenticatedUser, isSuccess, isError } = useGetUserQuery();
	const [showPopup, setShowPopup] = useState<boolean>(false);
	return (
		<nav className='z-999 fixed w-[95%] md:w-[90%] xl:w-[80%] mx-auto inset-x-0 pt-3'>
			<div className='navbar drop-shadow-[0_0px_2px_rgba(0,0,0,0.25)] rounded-2xl flex items-center justify-between p-3'>
				<Link to={"/"} className='flex items-center space-x-0.5 w-[25%]'>
					<img src='/src/assets/logo.svg' width={38} alt='' />
					<h1 className='hidden md:block text-3xl font-bold'>ProFind.</h1>
				</Link>

				<ul className='hidden sm:flex items-center justify-center font-medium gap-4 lg:gap-10 text-[18px] w-[50%]'>
					{authenticatedUser === undefined
						? normalLinks.map((link) => {
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
						  })
						: authenticatedUser?.role === "recruiter"
						? recruiterLinks.map((link) => {
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
						  })
						: normalLinks.map((link) => {
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
						  })}
				</ul>
				<ul className='sm:hidden flex items-center justify-center font-medium space-x-10 text-[18px] w-[50%]'>
					{mobileLinks.map((link) => {
						return (
							<Link
								key={link.path_name}
								to={link.path}
								className={`${
									pathname === link.path ? "text-[#0082FA]" : "text-black"
								} `}
							>
								<link.Icon size={26} />
							</Link>
						);
					})}
				</ul>
				<div className='w-[25%] flex items-center justify-end'>
					<Activity mode={isSuccess ? "visible" : "hidden"}>
						<ProfilePopup
							showProfilePopup={showPopup}
							setShowProfilePopup={setShowPopup}
							authenticatedUser={authenticatedUser}
						/>
					</Activity>
					<Activity mode={isError ? "visible" : "hidden"}>
						<LoginPopup
							showLoginPopup={showPopup}
							setShowLoginPopup={setShowPopup}
						/>
					</Activity>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
