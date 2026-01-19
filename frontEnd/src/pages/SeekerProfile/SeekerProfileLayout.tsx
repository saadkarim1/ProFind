import { Link, Outlet, useLocation } from "react-router";
import { TbLogout } from "react-icons/tb";
import { UserProfileList } from "@/models/model";
import { useDispatch, useSelector } from "react-redux";
import type { RooteState } from "@/app/store";
import { authApi, useLogoutMutation } from "@/app/services/authApi";

const SeekerProfileLayout = () => {
	const { pathname } = useLocation();
	const { user } = useSelector((state: RooteState) => state.auth);
	const [logout] = useLogoutMutation();
	const dispatch = useDispatch();
	return (
		<section className='relative flex justify-between '>
			<div className='hidden lg:flex w-[25%] capitalize sticky top-30  border-2 border-[#e9e9e9] h-fit bg-white rounded-3xl flex-col items-center py-10 space-y-4'>
				<div className='w-20 h-20 bg-sky-100 rounded-full text-[#0082FA] flex items-center justify-center font-bold text-4xl'>
					{user?.name?.slice(0, 1)}
					{user?.name?.split(" ")[1]?.slice(0, 1)}
				</div>
				<div className='text-center'>
					<h1 className='text-3xl font-semibold '>{user?.name}</h1>
					<h3 className='text-xl font-medium text-[#878787]'>{user?.job}</h3>
				</div>
				<ul className='w-[80%] mx-auto space-y-5 font-medium px-4 text-[16px] my-4'>
					{UserProfileList.map((section) => (
						<Link
							key={section.name}
							to={section.path}
							className={`flex items-center space-x-2 rounded-full py-1.5 px-3 ${
								section.path === pathname
									? "text-white bg-[#0082FA]"
									: "text-[#878787]"
							} transition-colors duration-250 ease-in-out`}
						>
							<section.icon
								className={`text-xl ${
									section.path === pathname ? "text-white" : "text-[#878787]"
								} `}
							/>
							<p className='capitalize'>{section.name}</p>
						</Link>
					))}
					<li
						onClick={async () => {
							await logout();
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

export default SeekerProfileLayout;
