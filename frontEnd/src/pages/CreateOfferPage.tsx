import { useAddOfferMutation } from "@/app/services/offersApi";
import type { RooteState } from "@/app/store";
import JobCategoriesDropDownList from "@/components/JobCategoriesDropDownList";
import JobTypesDropDownList from "@/components/JobTypesDropDownList";
import { offerSchema, type CreateOfferFieldsType } from "@/schema/offerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { IoArrowBack } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link } from "react-router";

const CreateOfferPage = () => {
	const { user } = useSelector((state: RooteState) => state.auth);
	const [formKey, setFormKey] = useState(0);
	const [addOffer] = useAddOfferMutation();
	const [selectedCategory, setSelectedCategory] =
		useState<string>("Select Category");
	const [selectedJobType, setSelectedJobType] =
		useState<string>("Select Job Type");
	const [myErrors, setMyErrors] = useState({
		errortype: "",
		errorCategory: "",
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<CreateOfferFieldsType>({
		resolver: zodResolver(offerSchema),
	});

	const onSubmit: SubmitHandler<CreateOfferFieldsType> = async (data) => {
		try {
			if (selectedCategory === "Select Category") {
				setMyErrors((prev) => ({
					...prev,
					errorCategory: "Category is required",
				}));
				return;
			}
			if (selectedJobType === "Select Job Type") {
				setMyErrors((prev) => ({ ...prev, errortype: "job type is required" }));
				return;
			}
			// console.log(data);
			const res = await addOffer({
				...data,
				offer_type: selectedJobType,
				offer_category: selectedCategory,
			}).unwrap();
			// console.log(res);
			if (res.status === 201) {
				toast.success("Job offer published", {
					position: "bottom-right",
					style: {
						border: "2px solid #05df72",
						borderRadius: "50px",
					},
					iconTheme: {
						primary: "#05df72",
						secondary: "#fff",
					},
				});
				setFormKey((key) => key + 1);
			}
		} catch (error) {
			console.log(error);
		}
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
					key={formKey}
					onSubmit={handleSubmit(onSubmit)}
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
								{...register("title")}
								type='text'
								id='jobTitle'
								className='focus:outline-none bg-[#f5f5f5] border-[1.5px] border-[#e9e9e9] block py-2 px-3 w-full rounded-xl'
							/>
							<p className='text-red-500 text-[15px]'>
								{errors.title && errors.title.message}
							</p>
						</div>

						<div className=''>
							<label className='formField text-[#878787] text-[15px] after:text-red-600'>
								Category
							</label>
							<JobCategoriesDropDownList
								selectedCategory={selectedCategory}
								setSelectedCategory={setSelectedCategory}
							/>
							<p className='text-red-500 text-[15px]'>
								{myErrors.errorCategory && myErrors.errorCategory}
							</p>
						</div>
						<div>
							<label className='formField text-[#878787] text-[15px] after:text-red-600'>
								Job Type
							</label>
							<JobTypesDropDownList
								selectedJobType={selectedJobType}
								setSelectedJobType={setSelectedJobType}
							/>
							<p className='text-red-500 text-[15px]'>
								{myErrors.errortype && myErrors.errortype}
							</p>
						</div>
						<div className='col-span-2'>
							<label
								htmlFor='location'
								className='formField text-[#878787] text-[15px] after:text-red-600'
							>
								Location
							</label>
							<input
								{...register("location")}
								placeholder='e.g...Casablanca'
								type='text'
								id='location'
								className='focus:outline-none bg-[#f5f5f5] border-[1.5px] border-[#e9e9e9] block py-2 px-3 w-full rounded-xl'
							/>
							<p className='text-red-500 text-[15px]'>
								{errors.location && errors.location.message}
							</p>
						</div>
						<div className='col-span-2'>
							<label
								htmlFor='emailToApply'
								className='text-[#878787] text-[15px]'
							>
								Email to Apply
							</label>
							<input
								{...register("email_to_apply")}
								type='text'
								id='emailToApply'
								className='focus:outline-none bg-[#f5f5f5] border-[1.5px] border-[#e9e9e9] block py-2 px-3 w-full rounded-xl'
							/>
							<p className='text-red-500 text-[15px]'>
								{errors.email_to_apply && errors.email_to_apply.message}
							</p>
						</div>
						<div className='col-span-2'>
							<label htmlFor='salary' className='text-[#878787] text-[15px]'>
								Salary (DH)
							</label>
							<input
								{...register("salary")}
								type='number'
								id='salary'
								className='focus:outline-none bg-[#f5f5f5] border-[1.5px] border-[#e9e9e9] block py-2 px-3 w-full rounded-xl'
							/>
							<p className='text-red-500 text-[15px]'>
								{errors.salary && errors.salary.message}
							</p>
						</div>
						<div className='col-span-2'>
							<label
								htmlFor='Description'
								className='formField text-[#878787] text-[15px] after:text-red-600'
							>
								Description
							</label>
							<textarea
								{...register("description")}
								rows={6}
								maxLength={400}
								id='Description'
								className='focus:outline-none bg-[#f5f5f5] border-[1.5px] border-[#e9e9e9] block py-2 px-3 w-full rounded-xl'
							/>
							<p className='text-red-500 text-[15px]'>
								{errors.description && errors.description.message}
							</p>
						</div>
						<div className='col-span-2'>
							<label className='formField text-[#878787] text-[15px] after:text-red-600'>
								How long your job will takes
							</label>
							<div>
								<div className='flex justify-evenly mt-2'>
									<div className='rounded-lg bg-sky-100 p-2.5'>
										<input
											type='radio'
											id='1'
											value={"1-3 months"}
											{...register("duration")}
										/>{" "}
										<label htmlFor='1'>1 to 3 months</label>
									</div>
									<div className='rounded-lg bg-sky-100 p-2.5'>
										<input
											type='radio'
											id='3'
											{...register("duration")}
											value={"3-6 months"}
										/>{" "}
										<label htmlFor='3'>3 to 6 months</label>
									</div>
									<div className='rounded-lg bg-sky-100 p-2.5'>
										<input
											type='radio'
											id='6'
											{...register("duration")}
											value={"6+ months"}
										/>{" "}
										<label htmlFor='6'>More than 6 months</label>
									</div>
								</div>
								<p className='text-red-500 text-[15px]'>
									{errors.duration && errors.duration.message}
								</p>
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
