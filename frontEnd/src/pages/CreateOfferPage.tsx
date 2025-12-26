import { useAddOfferMutation } from "@/app/services/offersApi";
import JobCategoriesDropDownList from "@/components/JobCategoriesDropDownList";
import JobTypesDropDownList from "@/components/JobTypesDropDownList";
import { useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router";

const CreateOfferPage = () => {
	const [addOffer] = useAddOfferMutation();
	const [selectedCategory, setSelectedCategory] =
		useState<string>("Select Category");
	const [selectedJobType, setSelectedJobType] =
		useState<string>("Select Job Type");
	const [dataFrom, setDataForm] = useState({
		title: "",
		description: "",
		location: "",
		duration: "",
		offer_type: "",
		category: "",
	});

	const handleInputsfields = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setDataForm({
			...dataFrom,
			[e.currentTarget.name]: e.currentTarget.value,
		});
	};
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log({
			...dataFrom,
			offer_type: selectedJobType,
			category: selectedCategory,
		});

		const res = await addOffer({
			...dataFrom,
			offer_type: selectedJobType,
		});
		console.log(res);
	};
	return (
		<section className='flex'>
			<Link to='/offers'>
				<button className='p-4 cursor-pointer bg-white rounded-xl border-2 border-[#e9e9e9] text-2xl'>
					<IoArrowBack />
				</button>
			</Link>
			<div className='w-full'>
				<form
					onSubmit={handleSubmit}
					className='bg-white rounded-4xl border-2 border-[#e9e9e9] w-[60%] mx-auto h-full p-8 space-y-3'
				>
					<div>
						<h2 className='font-medium text-lg'>Post a Job</h2>
						<p className='text-[#878787] text-[14px] font-medium'>
							Fill int the details to create your job listing
						</p>
					</div>
					<div className='grid grid-cols-2 gap-4'>
						<div className='col-span-2'>
							<label
								htmlFor='jobTitle'
								className='formField text-[#878787] text-[15px] after:text-red-600'
							>
								Job Title
							</label>
							<input
								type='text'
								id='jobTitle'
								name='title'
								onChange={handleInputsfields}
								className='focus:outline-none bg-[#f5f5f5] border-[1.5px] border-[#e9e9e9] block py-2 px-3 w-full rounded-xl'
							/>
						</div>
						<div className=''>
							<label
								htmlFor='companyName'
								className='formField text-[#878787] text-[15px] after:text-red-600'
							>
								Category
							</label>
							<JobCategoriesDropDownList
								selectedCategory={selectedCategory}
								setSelectedCategory={setSelectedCategory}
							/>
						</div>
						<div>
							<label
								htmlFor='companyName'
								className='formField text-[#878787] text-[15px] after:text-red-600'
							>
								Job Type
							</label>
							<JobTypesDropDownList
								selectedJobType={selectedJobType}
								setSelectedJobType={setSelectedJobType}
							/>
						</div>
						<div className='col-span-2'>
							<label
								htmlFor='location'
								className='formField text-[#878787] text-[15px] after:text-red-600'
							>
								Location
							</label>
							<input
								placeholder='e.g...Casablanca'
								type='text'
								id='location'
								name='location'
								onChange={handleInputsfields}
								className='focus:outline-none bg-[#f5f5f5] border-[1.5px] border-[#e9e9e9] block py-2 px-3 w-full rounded-xl'
							/>
						</div>
						<div className='col-span-2'>
							<label
								htmlFor='emailToApply'
								className='text-[#878787] text-[15px]'
							>
								Email to Apply
							</label>
							<input
								type='text'
								id='emailToApply'
								className='focus:outline-none bg-[#f5f5f5] border-[1.5px] border-[#e9e9e9] block py-2 px-3 w-full rounded-xl'
							/>
						</div>
						<div className='col-span-2'>
							<label
								htmlFor='Description'
								className='formField text-[#878787] text-[15px] after:text-red-600'
							>
								Description
							</label>
							<textarea
								rows={6}
								maxLength={400}
								id='Description'
								name='description'
								onChange={handleInputsfields}
								className='focus:outline-none bg-[#f5f5f5] border-[1.5px] border-[#e9e9e9] block py-2 px-3 w-full rounded-xl'
							/>
						</div>
						<div className='col-span-2'>
							<label className='formField text-[#878787] text-[15px] after:text-red-600'>
								How long your job will takes
							</label>
							<div className='flex justify-evenly mt-2'>
								<div className='rounded-lg bg-sky-100 p-2.5'>
									<input
										type='radio'
										id='1'
										name='duration'
										value={"1-3 months"}
										onChange={handleInputsfields}
									/>{" "}
									<label htmlFor='1'>1 to 3 months</label>
								</div>
								<div className='rounded-lg bg-sky-100 p-2.5'>
									<input
										type='radio'
										id='3'
										name='duration'
										value={"3-6 months"}
										onChange={handleInputsfields}
									/>{" "}
									<label htmlFor='3'>3 to 6 months</label>
								</div>
								<div className='rounded-lg bg-sky-100 p-2.5'>
									<input
										type='radio'
										id='6'
										name='duration'
										value={"6+ months"}
										onChange={handleInputsfields}
									/>{" "}
									<label htmlFor='6'>More than 6 months</label>
								</div>
							</div>
						</div>
					</div>
					<button
						type='submit'
						className='w-full h-fit py-1.5 cursor-pointer border-2 text-white border-[#0082FA]  rounded-full bg-[#0082FA]'
					>
						Create Job
					</button>
				</form>
			</div>
		</section>
	);
};

export default CreateOfferPage;
