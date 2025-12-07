import { BsChatDotsFill } from "react-icons/bs";
import { FaBookmark, FaUser, FaUserCircle } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { IoDocumentText, IoSettingsOutline } from "react-icons/io5";
import { LuUser } from "react-icons/lu";
import { MdAccountCircle, MdWorkOutline } from "react-icons/md";
import { Link } from "react-router";

type ProfilePopupProps = {
	showProfilePopup: boolean;
	setShowProfilePopup: React.Dispatch<React.SetStateAction<boolean>>;
};

const ProfilePopup = ({
	showProfilePopup,
	setShowProfilePopup,
}: ProfilePopupProps) => {
	return (
		<>
			<div className='flex items-center space-x-3 text-[#0082FA] text-3xl px-4'>
				<div className='relative cursor-pointer'>
					<div className='absolute top-0 right-0 h-3 w-3 text-[9px] font-semibold text-center text-white rounded-full bg-red-400'>
						1
					</div>
					<BsChatDotsFill />
				</div>

				<button
					className='relative'
					onBlur={(e) => {
						console.log("csdgkdjlfirst", e.currentTarget);
						if (!e.currentTarget.contains(e.relatedTarget)) {
							setShowProfilePopup(false);
							console.log("first");
						}
					}}
				>
					<div
						className='cursor-pointer'
						onClick={() => setShowProfilePopup((prev) => !prev)}
					>
						<FaUser />
					</div>
					<ul
						className={`absolute  bg-white text-black  w-[14vw] top-full right-0 rounded-xl text-lg text-center space-y-2 p-3 mt-3 shadow-md ${
							showProfilePopup ? "scale-100 opacity-100" : "scale-90 opacity-0"
						} transition  duration-200 ease-in-out origin-top `}
					>
						<Link
							to={"/profile"}
							className='hover:bg-sky-100 flex items-center space-x-2 p-2 rounded-lg'
						>
							<FaUserCircle className='text-xl' />
							<p onClick={() => setShowProfilePopup(false)} className=''>
								Profile
							</p>
						</Link>
						<Link
							to={"/my-applications"}
							className='hover:bg-sky-100 flex items-center space-x-2 p-2 rounded-lg'
						>
							<IoDocumentText className='text-xl' />
							<p onClick={() => setShowProfilePopup(false)} className=''>
								My applications
							</p>
						</Link>
						<Link
							to={"/saved"}
							className='hover:bg-sky-100 flex items-center space-x-2 p-2 rounded-lg'
						>
							<FaBookmark className='text-xl' />
							<p onClick={() => setShowProfilePopup(false)} className=''>
								Saved
							</p>
						</Link>
						<Link
							to={"/settings"}
							className='hover:bg-sky-100 flex items-center space-x-2 p-2 rounded-lg'
						>
							<IoMdSettings className='text-xl' />
							<p onClick={() => setShowProfilePopup(false)} className=''>
								Settings
							</p>
						</Link>
					</ul>
				</button>
			</div>
		</>
	);
};

export default ProfilePopup;
