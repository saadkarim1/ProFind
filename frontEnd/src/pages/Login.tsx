import { useState } from "react";
import { FaLock } from "react-icons/fa";
import { IoLockClosed, IoLockOpen } from "react-icons/io5";
import { LuMailOpen, LuUser } from "react-icons/lu";
import { Link } from "react-router";

const Login = () => {
	const [showPassword, setShowPassword] = useState<boolean>(false);
	return (
		<section className='h-screen w-full space-y-2 flex items-center flex-col justify-center'>
			<div className='bg-white w-[30%]  rounded-xl flex flex-col items-center justify-center p-8 space-y-4 drop-shadow-[0_5px_8px_rgba(0,0,0,0.25)]'>
				<div className='z-10 rounded-xl w-fit h-fit bg-gray-200 text-3xl p-3'>
					<LuUser />
				</div>
				<div>
					<h2 className='tex font-semibold text-2xl'>Login to continue</h2>
					<p className='text-gray-500'>Please login to find your job</p>
				</div>
				<div className='flex items-center p-1 rounded-full w-full bg-sky-50 '>
					<div className='z-10 rounded-full w-fit h-fit bg text-[#0082FA] text-2xl p-2.5'>
						<LuMailOpen />
					</div>
					<input
						type='text'
						placeholder='Email'
						className='focus:outline-none rounded-r-full  '
					/>
				</div>
				<div className='flex items-center p-1 rounded-full bg-sky-50 w-full'>
					<div
						onClick={() => setShowPassword(!showPassword)}
						className='z-10 rounded-full w-fit h-fit cursor-pointer text-[#0082FA] text-2xl p-2.5'
					>
						{showPassword ? <IoLockOpen /> : <IoLockClosed />}
					</div>
					<input
						type={showPassword ? "text" : "password"}
						placeholder='Password'
						className='focus:outline-none  rounded-r-full '
					/>
				</div>
				<button className='w-full cursor-pointer font-normal text-lg rounded-full bg-[#0082FA] text-white py-2.5 px-3'>
					All job offers
				</button>
				{/* <div className='flex'>
					<span>
						<hr className='h-0.5 text-black ' />
					</span>
					<span>Or continue with</span>
					<hr />
				</div> */}
				<p className='text-gray-500'>Or continue with</p>
				<div className='flex w-full space-x-2'>
					<div className='rounded-lg p-1 bg-white border cursor-pointer border-gray-300 w-[50%] flex items-center justify-center'>
						<img src='/src/assets/google.svg' width={30} alt='' />
					</div>
					<div className='rounded-lg p-1 border cursor-pointer border-gray-300 w-[50%] flex items-center justify-center'>
						<img src='/src/assets/github.svg' width={30} alt='' />
					</div>
				</div>
			</div>
			<p className='text-gray-500'>
				Already have an account?{" "}
				<Link to={"/register"} className='font-medium text-black'>
					Sign In
				</Link>
			</p>
		</section>
	);
};

export default Login;
