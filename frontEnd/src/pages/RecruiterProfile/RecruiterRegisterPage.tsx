import { useState } from "react";
import { FiLock, FiUnlock } from "react-icons/fi";
import { LuMailOpen, LuUser } from "react-icons/lu";
import { Link, useNavigate } from "react-router";
import {
	useLazyGetCSRFQuery,
	useRegisterRecruiterMutation,
} from "@/app/services/authApi";
import { MdWorkOutline } from "react-icons/md";
import { useForm, type SubmitHandler } from "react-hook-form";
import {
	registerSchema,
	type RegisterFieldstype,
} from "@/schema/registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";

const RecruiterRegisterPage = () => {
	const navigate = useNavigate();
	const [showPassword, setShowPassword] = useState<boolean>(false);
	const [getCSRF] = useLazyGetCSRFQuery();
	const [registerRecruiter] = useRegisterRecruiterMutation();
	const {
		register,
		setError,
		handleSubmit,
		formState: { errors },
	} = useForm<RegisterFieldstype>({
		resolver: zodResolver(registerSchema),
	});

	const onSubmit: SubmitHandler<RegisterFieldstype> = async (data) => {
		try {
			await getCSRF();

			const res = await registerRecruiter({
				...data,
				password_confirmation: data.password,
			});
			if (res.data.status === 200) {
				navigate("/");
			}
		} catch (error: any) {
			setError("root", {
				message: error.data.message,
			});
		}
	};

	return (
		<section className='w-full flex flex-col space-y-4 items-center justify-center'>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='bg-white w-102 lg:w-120 rounded-4xl border-4 border-[#99C3FF] flex flex-col items-center justify-center p-8 space-y-4'
			>
				<div className='z-10 rounded-xl w-fit h-fit bg-gray-200 text-3xl p-3'>
					<MdWorkOutline />
				</div>
				<div>
					<h2 className='tex font-semibold text-2xl'>Register to continue</h2>
					<p className='text-gray-500'>Please register to find your job</p>
				</div>
				<div className='w-full'>
					<div className='flex items-center p-1 rounded-full w-full bg-sky-100 '>
						<div className='rounded-full text-[#0082FA] text-2xl p-2.5'>
							<LuUser />
						</div>
						<input
							{...register("name")}
							type='text'
							placeholder='user name'
							className='focus:outline-none rounded-r-full w-full '
						/>
					</div>
					<p className='text-red-500 text-[15px]'>
						{errors.name && errors.name.message}
					</p>
				</div>
				<div className='w-full'>
					<div className='flex items-center p-1 rounded-full w-full bg-sky-100 '>
						<div className='rounded-full text-[#0082FA] text-2xl p-2.5'>
							<LuMailOpen />
						</div>
						<input
							{...register("email")}
							type='text'
							placeholder='Email'
							className='focus:outline-none rounded-r-full w-full '
						/>
					</div>
					<p className='text-red-500 text-[15px]'>
						{errors.email && errors.email.message}
					</p>
				</div>
				<div className='w-full'>
					<div className='flex items-center p-1 rounded-full bg-sky-100 w-full'>
						<div
							onClick={() => setShowPassword(!showPassword)}
							className='rounded-full text-[#0082FA] text-2xl p-2.5'
						>
							{showPassword ? (
								<FiUnlock className='cursor-pointer' />
							) : (
								<FiLock className='cursor-pointer' />
							)}
						</div>
						<input
							{...register("password")}
							type={showPassword ? "text" : "password"}
							placeholder='Password'
							className='focus:outline-none rounded-r-full w-full'
						/>
					</div>
					<p className='text-red-500 text-[15px]'>
						{errors.password && errors.password.message}
					</p>
				</div>
				<div className='w-full'>
					<button className='w-full cursor-pointer font-normal text-lg rounded-full bg-[#0082FA] text-white p-2'>
						Sign in
					</button>
					<p className='text-red-500 text-[15px]'>
						{errors.root && errors.root.message}
					</p>
				</div>
				<p className='text-gray-500'>Or continue with</p>
				<div className='flex w-full space-x-2'>
					<div className='rounded-lg p-1 bg-white border cursor-pointer border-gray-300 w-[50%] flex items-center justify-center'>
						<img src='/src/assets/google.svg' width={30} alt='' />
					</div>
					<div className='rounded-lg p-1 bg-white border cursor-pointer border-gray-300 w-[50%] flex items-center justify-center'>
						<img src='/src/assets/github.svg' width={30} alt='' />
					</div>
				</div>
			</form>
			<p className='text-gray-500'>
				Don't have an account?{" "}
				<Link to={"/recruiter/login"} className='font-medium text-[#0082FA]'>
					Sign Up
				</Link>
			</p>
		</section>
	);
};

export default RecruiterRegisterPage;
