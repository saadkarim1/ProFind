import { LuUser } from "react-icons/lu";
import { MdWorkOutline } from "react-icons/md";
import { Link } from "react-router";

type LoginPopupProps = {
	showLoginPopup: boolean;
	setShowLoginPopup: React.Dispatch<React.SetStateAction<boolean>>;
};
const LoginPopup = ({ showLoginPopup, setShowLoginPopup }: LoginPopupProps) => {
	return (
		<div
			className='relative'
			onBlur={(e) => {
				console.log("first");
				if (!e.currentTarget.contains(e.relatedTarget)) {
					setShowLoginPopup(false);
				}
			}}
		>
			<button
				onClick={() => setShowLoginPopup((prev) => !prev)}
				className=' hover:bg-[#0069CC] transition  duration-200 ease-in-out relative bg-[#0082FA] text-white rounded-xl px-3.5 py-2 cursor-pointer'
			>
				Sign up
			</button>
			<ul
				className={`absolute bg-white text-black  w-[14vw] top-full right-0 rounded-xl text-md text-center space-y-2 p-3 mt-3 shadow-md ${
					showLoginPopup ? "scale-100 opacity-100" : "scale-90 opacity-0"
				} transition  duration-200 ease-in-out origin-top `}
			>
				<li className='hover:bg-sky-100 flex items-center space-x-2 p-2 rounded-lg'>
					<LuUser className='text-xl' />
					<Link
						to={"/login"}
						onClick={() => setShowLoginPopup(false)}
						className=''
					>
						Candidate area
					</Link>
				</li>
				<li className='hover:bg-sky-100 flex items-center space-x-2 p-2 rounded-lg'>
					<MdWorkOutline className='text-xl' />
					<Link
						to={"/register"}
						onClick={() => setShowLoginPopup(false)}
						className=''
					>
						Recruiter area
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default LoginPopup;
