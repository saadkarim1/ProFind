import { FaCheck } from "react-icons/fa6";
import { useGetUserResumesQuery } from "@/app/services/resumeApi";
import { Activity, useState } from "react";
import { MdRemoveRedEye } from "react-icons/md";
import { TiDocumentText } from "react-icons/ti";
import { useParams } from "react-router";
import { useApplyToOfferMutation } from "@/app/services/offersApi";

const ApplyingPage = () => {
	const { id } = useParams();
	const [showResume, setShowResume] = useState(false);
	const [selectedResume, setSelectedResume] = useState<string>();
	const { data: resumes } = useGetUserResumesQuery();
	const [applytoOffer] = useApplyToOfferMutation();
	const handleApply = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const res = await applytoOffer({ id, resume_id: selectedResume });
		console.log(res);
	};
	return (
		<form
			onSubmit={handleApply}
			className='w-[50%] h-fit mx-auto space-y-4 rounded-4xl p-10 border-2 border-[#e9e9e9] bg-white'
		>
			<h1 className='text-center font-medium text-xl'>Complet To Apply</h1>
			<div className='col-span-2'>
				<label htmlFor='aboutMe' className=' text-[15px]'>
					Insert your cover letter here
				</label>
				<textarea
					id='aboutMe'
					name='about_me'
					// onChange={handleInputsfields}
					// placeholder={user?.about_me}
					className='focus:outline-none bg-[#f5f5f5] border-[1.5px] border-[#e9e9e9] block py-2 px-3 w-full rounded-xl'
				/>
			</div>
			<div className='space-y-2'>
				<p className='formField after:text-red-500 text-[15px]'>Select a CV</p>
				{resumes?.map((resume) => (
					<div
						key={resume.id}
						onClick={() => setSelectedResume(resume?.id)}
						className='flex flex-col items-center justify-center'
					>
						<div className='flex w-full justify-between items-center'>
							<div className='flex items-center space-x-2'>
								<div
									className={`w-5 h-5 border-[1.5px] text-[14px] 
								 border-[#0082FA] text-white ${
										selectedResume === resume.id ? "  bg-[#0082FA]" : "bg-white"
									} rounded-full flex items-center justify-center`}
								>
									<FaCheck />
								</div>
								<div className='flex items-center justify-center rounded-lg bg-[#e9e9e9] text-[#878787] p-1.5 text-2xl'>
									<TiDocumentText />
								</div>
								<h3>{resume.file_name}</h3>
							</div>

							<div
								onClick={() => setShowResume((prev) => !prev)}
								className='bg-[#ffda0a] text-white p-2 rounded-xl text-lg'
							>
								<MdRemoveRedEye />
							</div>
						</div>

						<Activity mode={showResume ? "visible" : "hidden"}>
							<div className='w-[50%] h-125 border rounded-lg my-2  overflow-hidden'>
								<iframe
									src={`${resume?.preview_url}#toolbar=0&view=FitH&view=FitV`}
									title='CV Preview'
									width='100%'
									height='100%'
									className='border-none'
								/>
							</div>
						</Activity>
					</div>
				))}
			</div>
			<button
				type='submit'
				className='w-full h-fit py-1.5 cursor-pointer border-2 text-white border-[#0082FA]  rounded-full bg-[#0082FA]'
			>
				Apply
			</button>
		</form>
	);
};

export default ApplyingPage;
