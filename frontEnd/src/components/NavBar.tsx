import { Activity, useState } from "react";
import { Link, useLocation } from "react-router";
import LoginPopup from "./LoginPopup";
import ProfilePopup from "./ProfilePopup";
import { useGetUserQuery } from "@/app/services/authApi";

type Link = {
	path: string;
	path_name: string;
};

const recruiterLinks: Link[] = [
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

const normalLinks: Link[] = [
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

const NavBar = () => {
	const { pathname } = useLocation();
	const { data: authenticatedUser, isSuccess, isError } = useGetUserQuery();
	const [showProfilePopup, setShowProfilePopup] = useState<boolean>(false);
	const [showLoginPopup, setShowLoginPopup] = useState<boolean>(false);
	// console.log(authenticatedUser);
	return (
		<nav className='z-999 fixed w-[80%] mx-auto inset-x-0 pt-3'>
			<div className='navbar drop-shadow-[0_0px_2px_rgba(0,0,0,0.25)] rounded-2xl flex items-center p-3'>
				<Link to={"/"} className='flex items-center space-x-0.5 w-[25%]'>
					<img src='/src/assets/logo.svg' width={30} alt='' />
					<h1 className='text-3xl font-bold'>ProFind.</h1>
				</Link>

				<ul className='flex items-center justify-center font-medium space-x-10 text-[18px] w-[50%]'>
					{/* {authenticatedUser.data.role === "recruiter"
						? recruiterLinks.map((link) => (
								<Link
									key={link.path_name}
									to={link.path}
									className={`${
										pathname === link.path ? "text-[#0082FA]" : "text-black"
									} `}
								>
									{link.path_name}
								</Link>
						  ))
						: normalLinks.map((link) => (
								<Link
									key={link.path_name}
									to={link.path}
									className={`${
										pathname === link.path ? "text-[#0082FA]" : "text-black"
									} `}
								>
									{link.path_name}
								</Link>
						  ))} */}

					{/* {recruiterLinks.map((link) => {
						if (link.path !== "/offers") {
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
						} else if (authenticatedUser?.data.role === "recruiter") {
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
					})} */}
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
				<div className='w-[25%] flex items-center justify-end'>
					<Activity mode={isSuccess ? "visible" : "hidden"}>
						<ProfilePopup
							showProfilePopup={showProfilePopup}
							setShowProfilePopup={setShowProfilePopup}
							authenticatedUser={authenticatedUser}
						/>
					</Activity>
					<Activity mode={isError ? "visible" : "hidden"}>
						<LoginPopup
							showLoginPopup={showLoginPopup}
							setShowLoginPopup={setShowLoginPopup}
						/>
					</Activity>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
