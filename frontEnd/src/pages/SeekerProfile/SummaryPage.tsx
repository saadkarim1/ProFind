import { useUpdateUserMutation } from "@/app/services/user";
import type { RooteState } from "@/app/store";
import type { UserType } from "@/models/user";
import { useState } from "react";
import { useSelector } from "react-redux";

const SummaryPage = () => {
	const { user } = useSelector((state: RooteState) => state.auth);
	const [updateUser] = useUpdateUserMutation();
	const [formKey, setFormKey] = useState(0);

	const [inputsValues, setInputsValues] = useState<UserType>({
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

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const filteredData = Object.fromEntries(
			Object.entries(inputsValues).filter(([_, value]) => value !== "")
		);
		const res1 = await updateUser({
			...filteredData,
			id: user?.user_id,
		});

		setFormKey((prev) => prev + 1);
		console.log(res1);
	};

	return (
		<div className='p-6 rounded-3xl border-2 border-[#e9e9e9] bg-white w-[74%] space-y-4'>
			<h1 className='font-semibold text-lg'>Personal Information</h1>
			<form
				key={formKey}
				onSubmit={handleSubmit}
				className='grid grid-cols-2 gap-8'
			>
				<div className='col-span-2'>
					<label htmlFor='name' className='text-[#878787] text-[15px]'>
						First Name
					</label>
					<input
						type='text'
						placeholder={user?.name}
						name='name'
						onChange={handleInputsfields}
						id='name'
						className='focus:outline-none border-[1.5px] border-[#e9e9e9] bg-[#f5f5f5] block py-2 px-3 w-full rounded-xl'
					/>
				</div>
				<div className='col-span-2'>
					<label htmlFor='email' className='text-[#878787] text-[15px]'>
						Email
					</label>
					<input
						type='text'
						id='email'
						name='email'
						onChange={handleInputsfields}
						placeholder={user?.email}
						className='focus:outline-none bg-[#f5f5f5] border-[1.5px] border-[#e9e9e9] block py-2 px-3 w-full rounded-xl'
					/>
				</div>
				<div className='col-span-2'>
					<label htmlFor='job' className='text-[#878787] text-[15px]'>
						Job
					</label>
					<input
						type='text'
						id='job'
						name='job'
						onChange={handleInputsfields}
						placeholder={user?.job}
						className='focus:outline-none bg-[#f5f5f5] border-[1.5px] border-[#e9e9e9] block py-2 px-3 w-full rounded-xl'
					/>
				</div>
				<div>
					<label htmlFor='adress' className='text-[#878787] text-[15px]'>
						Adress
					</label>
					<input
						type='text'
						id='adress'
						name='location'
						onChange={handleInputsfields}
						placeholder={user?.location}
						className='focus:outline-none bg-[#f5f5f5] border-[1.5px] border-[#e9e9e9] block py-2 px-3 w-full rounded-xl'
					/>
				</div>
				<div>
					<label htmlFor='phone' className='text-[#878787] text-[15px]'>
						Phone Number
					</label>
					<input
						type='text'
						id='phone'
						name='phone'
						onChange={handleInputsfields}
						placeholder={user?.phone}
						className='focus:outline-none bg-[#f5f5f5] border-[1.5px] border-[#e9e9e9] block py-2 px-3 w-full rounded-xl'
					/>
				</div>
				<div className='col-span-2'>
					<label htmlFor='aboutMe' className='text-[#878787] text-[15px]'>
						About me
					</label>
					<textarea
						id='aboutMe'
						name='about_me'
						onChange={handleInputsfields}
						placeholder={user?.about_me}
						className='focus:outline-none bg-[#f5f5f5] border-[1.5px] border-[#e9e9e9] block py-2 px-3 w-full rounded-xl'
					/>
				</div>
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
	);
};

export default SummaryPage;
