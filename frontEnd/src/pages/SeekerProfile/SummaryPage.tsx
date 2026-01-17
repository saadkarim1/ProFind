import { useUpdateUserMutation } from "@/app/services/user";
import type { RooteState } from "@/app/store";
import Resume from "@/components/Resume";
import { userSchema, type UpdateUserFields } from "@/schema/userSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

const SummaryPage = () => {
	const { user } = useSelector((state: RooteState) => state.auth);
	const [updateUser] = useUpdateUserMutation();
	const [formKey, setFormKey] = useState(0);
	const {
		register,
		handleSubmit,
		setError,
		formState: { errors },
	} = useForm<UpdateUserFields>({
		resolver: zodResolver(userSchema),
	});

	const [inputsValues, setInputsValues] = useState({
		user_id: "",
	});

	const handleInputsfields = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setInputsValues({
			...inputsValues,
			[e.currentTarget.name]: e.currentTarget.value,
		});
	};

	const onSubmit: SubmitHandler<UpdateUserFields> = async (data) => {
		console.log(data);
		const updatedFields = Object.fromEntries(
			Object.entries(data).filter(
				([_, value]) => value !== "" && value !== null
			)
		);
		if (Object.keys(updatedFields).length === 0) {
			setError("root", {
				message: "At least one field must be updated",
			});
			return;
		}

		const res = await updateUser({
			...updatedFields,
			id: user?.user_id,
		});

		if (res.data.status === 200) {
			toast.success("Profile updated successfully", {
				position: "bottom-right",
				style: {
					border: "2px solid #0082FA",
					borderRadius: "50px",
				},
				iconTheme: {
					primary: "#0082FA",
					secondary: "#fff",
				},
			});
		}

		setFormKey((prev) => prev + 1);
	};

	return (
		<div className='w-full lg:w-[74%] space-y-3'>
			<div className='p-6 rounded-3xl border-2 border-[#e9e9e9] bg-white  space-y-4'>
				<h1 className='font-semibold text-lg'>Personal Information</h1>
				<form
					key={formKey}
					onSubmit={handleSubmit(onSubmit)}
					className='grid grid-cols-2 gap-8'
				>
					<div className='col-span-2'>
						<label htmlFor='name' className='text-[#878787] text-[15px]'>
							Name
						</label>
						<input
							{...register("name")}
							type='text'
							placeholder={user?.name}
							id='name'
							className='focus:outline-none border-[1.5px] border-[#e9e9e9] bg-[#f5f5f5] block py-2 px-3 w-full rounded-xl'
						/>
						<p className='text-red-500 text-[15px]'>
							{errors.name && errors.name.message}
						</p>
					</div>
					<div className='col-span-2'>
						<label htmlFor='email' className='text-[#878787] text-[15px]'>
							Email
						</label>
						<input
							{...register("email")}
							type='text'
							id='email'
							placeholder={user?.email}
							className='focus:outline-none bg-[#f5f5f5] border-[1.5px] border-[#e9e9e9] block py-2 px-3 w-full rounded-xl'
						/>
						<p className='text-red-500 text-[15px]'>
							{errors.email && errors.email.message}
						</p>
					</div>
					<div className='col-span-2'>
						<label htmlFor='job' className='text-[#878787] text-[15px]'>
							Job
						</label>
						<input
							{...register("job")}
							type='text'
							id='job'
							placeholder={user?.job}
							className='focus:outline-none bg-[#f5f5f5] border-[1.5px] border-[#e9e9e9] block py-2 px-3 w-full rounded-xl'
						/>
						<p className='text-red-500 text-[15px]'>
							{errors.job && errors.job.message}
						</p>
					</div>
					<div>
						<label htmlFor='adress' className='text-[#878787] text-[15px]'>
							Adress
						</label>
						<input
							{...register("location")}
							type='text'
							id='adress'
							placeholder={user?.location}
							className='focus:outline-none bg-[#f5f5f5] border-[1.5px] border-[#e9e9e9] block py-2 px-3 w-full rounded-xl'
						/>
						<p className='text-red-500 text-[15px]'>
							{errors.location && errors.location.message}
						</p>
					</div>
					<div>
						<label htmlFor='phone' className='text-[#878787] text-[15px]'>
							Phone Number
						</label>
						<input
							{...register("phone")}
							type='text'
							id='phone'
							placeholder={user?.phone}
							className='focus:outline-none bg-[#f5f5f5] border-[1.5px] border-[#e9e9e9] block py-2 px-3 w-full rounded-xl'
						/>
						<p className='text-red-500 text-[15px]'>
							{errors.phone && errors.phone.message}
						</p>
					</div>
					<div className='col-span-2'>
						<label htmlFor='aboutMe' className='text-[#878787] text-[15px]'>
							About me
						</label>
						<textarea
							{...register("about_me")}
							id='aboutMe'
							placeholder={user?.about_me}
							className='focus:outline-none bg-[#f5f5f5] border-[1.5px] border-[#e9e9e9] block py-2 px-3 w-full rounded-xl'
						/>
						<p className='text-red-500 text-[15px]'>
							{errors.about_me && errors.about_me.message}
						</p>
					</div>
					<p className='text-red-500 col-span-2'>
						{errors.root && errors.root.message}
					</p>
					<div>
						<button
							type='button'
							className='w-full h-fit py-2 cursor-pointer border-2 rounded-xl border-[#0082FA]'
						>
							Discard Changes
						</button>
					</div>
					<div>
						<button
							type='submit'
							className='w-full h-fit py-2 cursor-pointer border-2 text-white border-[#0082FA]  rounded-xl bg-[#0082FA]'
						>
							Save Changes
						</button>
					</div>
				</form>
			</div>
			<Resume />
		</div>
	);
};

export default SummaryPage;
