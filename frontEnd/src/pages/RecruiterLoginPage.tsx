import { useState } from "react";
import { FiLock, FiUnlock } from "react-icons/fi";
import { LuMailOpen } from "react-icons/lu";
import { MdWorkOutline } from "react-icons/md";

const RecruiterLoginPage = () => {
	const [showPassword, setShowPassword] = useState<boolean>(false);
	return (
		<section className='h-screen w-full space-y-4 flex items-center flex-col justify-center pt-20'>
			<div className='bg-white w-[30%] rounded-xl flex flex-col items-center justify-center p-8 space-y-4 drop-shadow-[0_5px_8px_rgba(0,0,0,0.25)]'>
				<div className='z-10 rounded-xl w-fit h-fit bg-gray-200 text-3xl p-3'>
					<MdWorkOutline />
				</div>
				<div>
					<h2 className='tex font-semibold text-2xl'>Login to continue</h2>
					<p className='text-gray-500'>Please login to start recruiting</p>
				</div>
				<div className='flex items-center p-1 rounded-full w-full bg-sky-100 '>
					<div className='text-[#0082FA] text-2xl p-2.5'>
						<LuMailOpen />
					</div>
					<input
						type='email'
						placeholder='Email'
						className='focus:outline-none rounded-r-full  '
					/>
				</div>
				<div className='flex items-center p-1 rounded-full bg-sky-100 w-full'>
					<div
						onClick={() => setShowPassword(!showPassword)}
						className='text-[#0082FA] text-2xl p-2.5 cursor-pointer'
					>
						{showPassword ? (
							<FiUnlock className='cursor-pointer' />
						) : (
							<FiLock className='cursor-pointer' />
						)}
					</div>
					<input
						type={showPassword ? "text" : "password"}
						placeholder='Password'
						className='focus:outline-none  rounded-r-full '
					/>
				</div>
				<button className='w-full cursor-pointer font-normal text-lg rounded-full bg-[#0082FA] text-white py-2 px-3'>
					Login
				</button>
			</div>
		</section>
	);
};

export default RecruiterLoginPage;
