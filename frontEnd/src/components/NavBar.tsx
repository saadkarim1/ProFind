import { Link, useLocation } from "react-router";

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
	return (
		<nav className='z-999 w-[80%] mx-auto fixed inset-x-0 pt-4 backdrop-blur-md rounded-b-2xl'>
			<div className='bg-[#f5f5f5] border-2 border-white drop-shadow-[0_5px_8px_rgba(0,0,0,0.25)] rounded-2xl flex items-center justify-between p-2'>
				<Link to={"/"} className='flex items-center space-x-0.5'>
					<img src='/src/assets/logo.svg' width={30} alt='' />
					<h1 className='text-3xl font-bold'>ProFind.</h1>
				</Link>

				<ul className='flex items-center font-medium space-x-10 text-[18px] '>
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
				<div className='flex items-center font-medium space-x-3 text-[16px]'>
					<Link to={"login"} className='cursor-pointer'>
						Login
					</Link>
					<Link
						to={"register"}
						className='bg-[#0082FA] text-white rounded-xl px-3.5 py-2 cursor-pointer'
					>
						Sign up
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
