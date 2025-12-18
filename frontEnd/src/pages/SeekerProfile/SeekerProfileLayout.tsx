import { Link, Outlet, useLocation } from "react-router";
import { TbLogout } from "react-icons/tb";
import { UserProfileList } from "@/models/model";

const SeekerProfileLayout = () => {
	const { pathname } = useLocation();
	return (
		<section className='relative mx-auto w-[80%] flex justify-between'>
			<div className='w-[25%] sticky top-30  border-2 border-[#e9e9e9] h-fit bg-white rounded-3xl flex flex-col items-center py-10 space-y-4'>
				{/* <div className='w-20 h-20 rounded-full border-2 border-[#0082FA] flex items-center justify-center font-bold text-3xl'>
					SK
				</div> */}
				<img
					src='/src/assets/profile.jpeg'
					alt=''
					className='rounded-full'
					width={110}
				/>
				<div className='text-center'>
					<h1 className='text-3xl font-semibold'>karim saad</h1>
					<h3 className='text-xl font-medium text-[#878787]'>Developer</h3>
				</div>
				<ul className='w-[80%] mx-auto space-y-5 font-medium px-4 text-[16px] my-4'>
					{UserProfileList.map((section) => (
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
					<li className='cursor-pointer flex items-center py-1 px-3 text-[#878787] space-x-2 hover:text-red-500 transition-colors duration-250 ease-in-out'>
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
