import { authApi, useLogoutRecruiterMutation } from "@/app/services/authApi";
import { RecruiterProfileList } from "@/models/model";
import { TbLogout } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import type { RooteState } from "@/app/store";

import { Link, Outlet, useLocation } from "react-router";

const RecruiterProfileLayout = () => {
	const { pathname } = useLocation();
	const user = useSelector((state: RooteState) => state.auth.user);
	const [logoutRecruiter] = useLogoutRecruiterMutation();
	const dispatch = useDispatch();
	return (
		<section className='relative flex justify-between'>
			<div className='w-[25%] sticky top-30 capitalize  border-2 border-[#e9e9e9] h-fit bg-white rounded-3xl flex flex-col items-center py-10 space-y-4'>
				<div className='bg-sky-100 p-5 rounded-full'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='56'
						height='56'
						viewBox='0 0 24 24'
						fill='none'
						stroke='#0082FA'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
						className='lucide lucide-building2-icon lucide-building-2'
					>
						<path d='M10 12h4' />
						<path d='M10 8h4' />
						<path d='M14 21v-3a2 2 0 0 0-4 0v3' />
						<path d='M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2' />
						<path d='M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16' />
					</svg>
				</div>
				<div className='text-center'>
					<h1 className='text-3xl font-semibold'>{user?.company_name}</h1>
				</div>
				<ul className='w-[80%] mx-auto space-y-5 font-medium px-4 text-[16px] my-4'>
					{RecruiterProfileList.map((section) => (
						<Link
							key={section.name}
							to={section.path}
							className={`flex items-center space-x-2 rounded-full py-1.5 px-3 ${
								section.path === pathname
									? "text-black bg-sky-100"
									: "text-[#878787]"
							} transition-colors duration-250 ease-in-out`}
						>
							<section.icon
								className={`text-xl ${
									section.path === pathname ? "text-sky-600" : "text-[#878787]"
								} `}
							/>
							<p className='capitalize'>{section.name}</p>
						</Link>
					))}

					<li
						onClick={async () => {
							await logoutRecruiter();
							dispatch(authApi.util.resetApiState());
						}}
						className='cursor-pointer flex items-center py-1 px-3 text-[#878787] space-x-2 hover:text-red-500 transition-colors duration-250 ease-in-out'
					>
						<TbLogout className='text-2xl' />
						<p className=''>Sign out</p>
					</li>
				</ul>
			</div>
			<Outlet />
		</section>
	);
};

export default RecruiterProfileLayout;
