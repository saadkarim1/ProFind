import { useUpdateRecruiterProfileMutation } from "@/app/services/recruiter";
import type { RooteState } from "@/app/store";
import { useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

const CompanySummary = () => {
	const user = useSelector((state: RooteState) => state.auth.user);
	const [updateRecruiter] = useUpdateRecruiterProfileMutation();
	const [formKey, setFormKey] = useState(0);

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

		const filteredData = Object.fromEntries(
			Object.entries(inputsValues).filter(([_, value]) => value !== "")
		);
		const res = await updateRecruiter({ ...filteredData, id: user?.user_id });
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
		<div className='p-6 rounded-3xl border-2 border-[#e9e9e9] bg-white w-[74%] space-y-4'>
			<h1 className='font-semibold text-lg'>Company Information</h1>
			<form
				key={formKey}
				onSubmit={handleSubmit}
				className='grid grid-cols-2 gap-8'
			>
				<div>
					<label htmlFor='company_name' className='text-[#878787] text-[15px]'>
						Company Name
					</label>
					<input
						type='text'
						id='title'
						placeholder={user?.company_name}
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
						placeholder={user?.email}
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
						placeholder={user?.location}
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
						placeholder={user?.company_website}
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
						placeholder={user?.company_description}
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
