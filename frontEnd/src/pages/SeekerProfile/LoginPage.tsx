import { useLazyGetCSRFQuery, useLoginMutation } from "@/app/services/authApi";
import { useState } from "react";
import { FiLock, FiUnlock } from "react-icons/fi";
import { LuMailOpen } from "react-icons/lu";
import { TbLogin } from "react-icons/tb";
import { Link, useNavigate } from "react-router";
import { useForm, type SubmitHandler } from "react-hook-form";
import { loginSchema, type LoginFieldsType } from "@/schema/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";

const Login = () => {
	const [showPassword, setShowPassword] = useState<boolean>(false);
	const {
		register,
		handleSubmit,
		setError,
		formState: { errors },
	} = useForm<LoginFieldsType>({
		resolver: zodResolver(loginSchema),
	});
	const navigate = useNavigate();
	const [getCSRF] = useLazyGetCSRFQuery();
	const [login] = useLoginMutation();

	const onSubmit: SubmitHandler<LoginFieldsType> = async (data) => {
		console.log(data);
		try {
			await getCSRF();
			await login({
				...data,
				password_confirmation: data.password,
			}).unwrap();
			navigate("/");
		} catch (error: any) {
			console.log(error);
			setError("root", {
				message: error.data.message,
			});
		}
	};

	return (
		<section className='w-full space-y-4 flex items-center flex-col justify-center'>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='bg-white w-[40%] rounded-4xl border-4 border-[#99C3FF] flex flex-col items-center justify-center p-8 space-y-4'
			>
				<div className='z-10 rounded-xl w-fit h-fit bg-gray-200 text-3xl p-3'>
					<TbLogin />
				</div>
				<div>
					<h2 className='tex font-semibold text-2xl'>Login to continue</h2>
					<p className='text-gray-500'>Please login to find your job</p>
				</div>
				<div className='w-full'>
					<div className='flex items-center p-1 rounded-full w-full bg-sky-100 '>
						<div className='text-[#0082FA] text-2xl p-2.5'>
							<LuMailOpen />
						</div>
						<input
							{...register("email")}
							type='text'
							placeholder='Email'
							className='focus:outline-none rounded-r-full w-full  '
						/>
					</div>
					{errors.email && (
						<p className='text-red-500 text-[15px]'>{errors.email.message}</p>
					)}
				</div>
				<div className='w-full'>
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
							{...register("password")}
							type={showPassword ? "text" : "password"}
							placeholder='Password'
							className='focus:outline-none w-full rounded-r-full '
						/>
					</div>
					{errors.password && (
						<p className='text-red-500 text-[15px]'>
							{errors.password.message}
						</p>
					)}
				</div>
				<div className='w-full'>
					<button className='w-full cursor-pointer font-normal text-lg rounded-full bg-[#0082FA] text-white py-2 px-3'>
						Login
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
