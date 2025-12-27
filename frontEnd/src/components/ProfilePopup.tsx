import { Link } from "react-router";
import { IoMenu } from "react-icons/io5";
import { RecruiterProfileList, UserProfileList } from "@/models/model";
import { Activity, useEffect, useState } from "react";

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
					<IoMenu className='' />
				</div>
				<Activity mode={isJobSeeker ? "hidden" : "visible"}>
					<ul
						className={`absolute  bg-white text-black  w-[14vw] top-full right-0 rounded-xl text-lg text-center space-y-2 p-3 mt-3 shadow-md ${
							showProfilePopup ? "scale-100 opacity-100" : "scale-0 opacity-0"
						} transition  duration-300 ease-in-out origin-top `}
					>
						{RecruiterProfileList.map((item) => (
							<Link
								key={item.name}
								to={item.path}
								onClick={() => setShowProfilePopup(false)}
								className='group hover:bg-sky-100 hover:text-black text-[#878787] flex items-center space-x-2 p-1.5 rounded-full'
							>
								<item.icon className='text-xl group-hover:text-sky-600' />
								<p className=''>{item.name}</p>
							</Link>
						))}
					</ul>
				</Activity>
				<Activity mode={isJobSeeker ? "visible" : "hidden"}>
					<ul
						className={`absolute  bg-white text-black  w-[14vw] top-full right-0 rounded-xl text-lg text-center space-y-2 p-3 mt-3 shadow-md ${
							showProfilePopup ? "scale-100 opacity-100" : "scale-0 opacity-0"
						} transition  duration-300 ease-in-out origin-top `}
					>
						{UserProfileList.map((item) => (
							<Link
								key={item.name}
								to={item.path}
								onClick={() => setShowProfilePopup(false)}
								className='group hover:bg-sky-100 hover:text-black text-[#878787] flex items-center space-x-2 p-1.5 rounded-full'
							>
								<item.icon className='text-xl group-hover:text-sky-600' />
								<p className=''>{item.name}</p>
							</Link>
						))}
					</ul>
				</Activity>
			</button>
			{/* </div> */}
		</>
	);
};

export default ProfilePopup;
