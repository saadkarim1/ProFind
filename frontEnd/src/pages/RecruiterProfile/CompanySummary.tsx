import { useUpdateRecruiterProfileMutation } from "@/app/services/recruiter";
import type { RooteState } from "@/app/store";
import { useState } from "react";
import { useSelector } from "react-redux";

const CompanySummary = () => {
	const user = useSelector((state: RooteState) => state.auth.user);
	const [updateRecruiter] = useUpdateRecruiterProfileMutation();

	const [inputsValues, setInputsValues] = useState({
		id: "",
		company_name: "",
		company_description: "",
		company_website: "",
		location: "",
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

		const res1 = await updateRecruiter({ ...inputsValues, id: user?.user_id });
		console.log(res1);
	};

	return (
		<div className='p-6 rounded-3xl border-2 border-[#e9e9e9] bg-white w-[74%] space-y-4'>
			<h1 className='font-semibold text-lg'>Company Information</h1>
			<form onSubmit={handleSubmit} className='grid grid-cols-2 gap-8'>
				<div>
					<label htmlFor='company_name' className='text-[#878787] text-[15px]'>
						Company Name
					</label>
					<input
						type='text'
						id='title'
						name='company_name'
						onChange={handleInputsfields}
						className='focus:outline-none bg-[#f5f5f5] border-[1.5px] border-[#e9e9e9] block py-2 px-3 w-full rounded-xl'
					/>
				</div>
				<div>
					<label htmlFor='sector' className='text-[#878787] text-[15px]'>
						Sector
					</label>
					<select
						name='sector'
						id='sector'
						className='focus:outline-none bg-[#f5f5f5] border-[1.5px] border-[#e9e9e9] block py-2 px-3 w-full rounded-xl'
					>
						<option disabled={true}>Select a sector</option>
						<hr />
						<option value='IT'>IT</option>
						<option value='Finance'>Finance</option>
					</select>
				</div>
				<div className='col-span-2'>
					<label htmlFor='email' className='text-[#878787] text-[15px]'>
						Email
					</label>
					<input
						type='text'
						id='email'
						className='focus:outline-none bg-[#f5f5f5] border-[1.5px] border-[#e9e9e9] block py-2 px-3 w-full rounded-xl'
					/>
				</div>
				<div className='col-span-2'>
					<label htmlFor='adress' className='text-[#878787] text-[15px]'>
						Adress
					</label>
					<input
						type='text'
						id='adress'
						name='location'
						onChange={handleInputsfields}
						className='focus:outline-none bg-[#f5f5f5] border-[1.5px] border-[#e9e9e9] block py-2 px-3 w-full rounded-xl'
					/>
				</div>
				<div className='col-span-2'>
					<label htmlFor='link' className='text-[#878787] text-[15px]'>
						Link
					</label>
					<input
						type='text'
						id='link'
						name='company_website'
						onChange={handleInputsfields}
						className='focus:outline-none bg-[#f5f5f5] border-[1.5px] border-[#e9e9e9] block py-2 px-3 w-full rounded-xl'
					/>
				</div>
				<div className='col-span-2'>
					<label
						htmlFor='company_description'
						className='text-[#878787] text-[15px]'
					>
						Description
					</label>
					<textarea
						id='aboutMe'
						onChange={handleInputsfields}
						name='company_description'
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

export default CompanySummary;
