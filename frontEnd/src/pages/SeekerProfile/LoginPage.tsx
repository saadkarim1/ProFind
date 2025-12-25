import { useLazyGetCSRFQuery, useLoginMutation } from "@/app/services/authApi";
import { useState } from "react";
import { FiLock, FiUnlock } from "react-icons/fi";
import { LuMailOpen } from "react-icons/lu";
import { TbLogin } from "react-icons/tb";
import { Link } from "react-router";

const Login = () => {
	const [showPassword, setShowPassword] = useState<boolean>(false);

	const [getCSRF] = useLazyGetCSRFQuery();
	const [login] = useLoginMutation();
	const [inputsValues, setInputsValues] = useState({
		email: "",
		password: "",
		password_confirmation: "",
	});

	const handleInputsfields = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputsValues({
			...inputsValues,
			[e.currentTarget.name]: e.currentTarget.value,
		});
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const res = await getCSRF();
		console.log(res);
		const res1 = await login({
			...inputsValues,
			password_confirmation: inputsValues.password,
		});
		console.log(res1);
	};
	return (
		<section className='w-full space-y-4 flex items-center flex-col justify-center'>
			<form
				onSubmit={handleSubmit}
				className='bg-white w-[40%] rounded-xl flex flex-col items-center justify-center p-8 space-y-4 drop-shadow-[0_5px_8px_rgba(0,0,0,0.25)]'
			>
				<div className='z-10 rounded-xl w-fit h-fit bg-gray-200 text-3xl p-3'>
					<TbLogin />
				</div>
				<div>
					<h2 className='tex font-semibold text-2xl'>Login to continue</h2>
					<p className='text-gray-500'>Please login to find your job</p>
				</div>
				<div className='flex items-center p-1 rounded-full w-full bg-sky-100 '>
					<div className='text-[#0082FA] text-2xl p-2.5'>
						<LuMailOpen />
					</div>
					<input
						type='email'
						placeholder='Email'
						name='email'
						className='focus:outline-none rounded-r-full  '
						onChange={handleInputsfields}
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
						name='password'
						className='focus:outline-none  rounded-r-full '
						onChange={handleInputsfields}
					/>
				</div>
				<button className='w-full cursor-pointer font-normal text-lg rounded-full bg-[#0082FA] text-white py-2 px-3'>
					Login
				</button>
				<p className='text-gray-500'>Or continue with</p>
				<div className='flex w-full space-x-2'>
					<div className='rounded-lg p-1 bg-white border cursor-pointer border-gray-300 w-[50%] flex items-center justify-center'>
						<img src='/src/assets/google.svg' width={30} alt='' />
					</div>
					<div className='rounded-lg p-1 border cursor-pointer border-gray-300 w-[50%] flex items-center justify-center'>
						<img src='/src/assets/github.svg' width={30} alt='' />
					</div>
				</div>
			</form>
			<p className='text-gray-500'>
				Already have an account?{" "}
				<Link to={"/register"} className='font-medium text-[#0082FA]'>
					Sign In
				</Link>
			</p>
		</section>
	);
};

export default Login;
