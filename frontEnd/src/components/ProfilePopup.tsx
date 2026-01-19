import { Link } from "react-router";
import { RecruiterProfileList, UserProfileList } from "@/models/model";
import { Activity, useEffect, useState } from "react";
import { ChevronDown, User } from "lucide-react";
import { authApi, useLogoutMutation } from "@/app/services/authApi";
import { useDispatch } from "react-redux";
import { TbLogout } from "react-icons/tb";

type ProfilePopupProps = {
	showProfilePopup: boolean;
	setShowProfilePopup: React.Dispatch<React.SetStateAction<boolean>>;
	authenticatedUser: any;
};

const ProfilePopup = ({
	showProfilePopup,
	setShowProfilePopup,
	authenticatedUser,
}: ProfilePopupProps) => {
	const [isJobSeeker, setIsJobSeeker] = useState<boolean>(true);
	useEffect(() => {
		setIsJobSeeker(authenticatedUser?.role === "user");
	}, [authenticatedUser]);

	const [logout] = useLogoutMutation();
	const dispatch = useDispatch();
	return (
		<>
			<button
				className='relative'
				onBlur={(e) => {
					if (!e.currentTarget.contains(e.relatedTarget)) {
						setShowProfilePopup(false);
					}
				}}
			>
				<div
					className='cursor-pointer text-4xl text-black '
					onClick={() => setShowProfilePopup((prev) => !prev)}
				>
					<div className='p-2 bg-sky-100 rounded-full text-[#0082FA] flex items-center justify-center'>
						<User className='stroke-2' size={26} />
						<ChevronDown
							className={`${
								showProfilePopup && "rotate-180"
							} transition-transform duration-200 ease-in-out`}
						/>
					</div>
				</div>
				<Activity mode={isJobSeeker ? "hidden" : "visible"}>
					<ul
						className={`absolute  bg-white text-black top-full right-0 rounded-xl text-lg text-center space-y-2 p-3 mt-3 shadow-md ${
							showProfilePopup ? "scale-100 opacity-100" : "scale-0 opacity-0"
						} transition  duration-300 ease-in-out origin-top `}
					>
						{RecruiterProfileList.map((item) => (
							<Link
								key={item.name}
								to={item.path}
								onClick={() => setShowProfilePopup(false)}
								className='group hover:bg-[#0082FA] hover:text-white text-[#878787] flex items-center space-x-2 py-1.5 px-3 text-[16px] capitalize rounded-full'
							>
								<item.icon className='text-xl group-hover:text-white' />
								<p className=''>{item.name}</p>
							</Link>
						))}
						<li
							onClick={async () => {
								await logout();
								dispatch(authApi.util.resetApiState());
							}}
							className='cursor-pointer flex items-center py-1 px-3 text-[#878787] space-x-2 hover:text-red-500 transition-colors duration-250 ease-in-out'
						>
							<TbLogout className='text-xl' />
							<p className=''>Logout</p>
						</li>
					</ul>
				</Activity>
				<Activity mode={isJobSeeker ? "visible" : "hidden"}>
					<ul
						className={`absolute  bg-white text-black top-full right-0 rounded-xl text-lg text-center space-y-2 p-3 mt-3 shadow-md ${
							showProfilePopup ? "scale-100 opacity-100" : "scale-0 opacity-0"
						} transition  duration-300 ease-in-out origin-top `}
					>
						{UserProfileList.map((item) => (
							<Link
								key={item.name}
								to={item.path}
								onClick={() => setShowProfilePopup(false)}
								className='group hover:bg-[#0082FA] hover:text-white text-[#878787] flex items-center space-x-2 py-1.5 px-3 text-[16px] capitalize rounded-full'
							>
								<item.icon className='text-xl group-hover:text-white ' />
								<p className=''>{item.name}</p>
							</Link>
						))}
						<li
							onClick={async () => {
								await logout();
								dispatch(authApi.util.resetApiState());
							}}
							className='cursor-pointer flex items-center py-1 px-3 text-[#878787] space-x-2 hover:text-red-500 transition-colors duration-250 ease-in-out'
						>
							<TbLogout className='text-xl' />
							<p className=''>Logout</p>
						</li>
					</ul>
				</Activity>
			</button>
			{/* </div> */}
		</>
	);
};

export default ProfilePopup;
