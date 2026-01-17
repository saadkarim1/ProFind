import { useUpdateRecruiterProfileMutation } from "@/app/services/recruiterApi";
import type { RooteState } from "@/app/store";
import {
	companySchema,
	type UpdateCompanyFields,
} from "@/schema/companySchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

const CompanySummary = () => {
	const user = useSelector((state: RooteState) => state.auth.user);
	const [updateRecruiter] = useUpdateRecruiterProfileMutation();
	const [formKey, setFormKey] = useState(0);
	// const [thereIsChanges, setThereIsChanges] = useState(false);
	const {
		register,
		handleSubmit,
		setError,
		formState: { errors },
	} = useForm<UpdateCompanyFields>({
		resolver: zodResolver(companySchema),
	});

	const onSubmit: SubmitHandler<UpdateCompanyFields> = async (data) => {
		try {
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
			const res = await updateRecruiter({
				...updatedFields,
				id: user?.user_id,
			});
			console.log(res);
			if (res.data && res.data.status === 200) {
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
				setFormKey((prev) => prev + 1);
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className='p-6 rounded-3xl border-2 border-[#e9e9e9] bg-white w-full lg:w-[74%] space-y-4'>
			<h1 className='font-semibold text-lg'>Company Information</h1>
			<form
				key={formKey}
				onSubmit={handleSubmit(onSubmit)}
				className='grid grid-cols-2 gap-8'
			>
				<div className='col-span-2'>
					<label htmlFor='company_name' className='text-[#878787] text-[15px]'>
						Company Name
					</label>
					<input
						{...register("company_name")}
						type='text'
						id='title'
						placeholder={user?.company_name}
						className='focus:outline-none bg-[#f5f5f5] border-[1.5px] border-[#e9e9e9] block py-2 px-3 w-full rounded-xl'
					/>
					<p className='text-red-500 text-[15px]'>
						{errors.company_name && errors.company_name.message}
					</p>
				</div>
				{/* <div>
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
				</div> */}
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
				<div className='col-span-2'>
					<label htmlFor='link' className='text-[#878787] text-[15px]'>
						Link
					</label>
					<input
						{...register("company_website")}
						type='text'
						id='link'
						placeholder={user?.company_website}
						className='focus:outline-none bg-[#f5f5f5] border-[1.5px] border-[#e9e9e9] block py-2 px-3 w-full rounded-xl'
					/>
					<p className='text-red-500 text-[15px]'>
						{errors.company_website && errors.company_website.message}
					</p>
				</div>
				<div className='col-span-2'>
					<label
						htmlFor='company_description'
						className='text-[#878787] text-[15px]'
					>
						Description
					</label>
					<textarea
						{...register("company_description")}
						id='aboutMe'
						placeholder={user?.company_description}
						className='focus:outline-none bg-[#f5f5f5] border-[1.5px] border-[#e9e9e9] block py-2 px-3 w-full rounded-xl'
					/>
					<p className='text-red-500 text-[15px]'>
						{errors.company_description && errors.company_description.message}
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
	);
};

export default CompanySummary;
