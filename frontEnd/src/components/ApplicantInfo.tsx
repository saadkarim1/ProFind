import {
	useAccepApplicationMutation,
	useRejectpplicationMutation,
} from "@/app/services/offersApi";
import { useGetResumeQuery } from "@/app/services/resumeApi";
import type { applicantType } from "@/models/applicant";
import { Activity, useState } from "react";
import { CgSoftwareDownload } from "react-icons/cg";
import { HiOutlineMail } from "react-icons/hi";
import { LuUser } from "react-icons/lu";
import {
	MdOutlinePhoneAndroid,
	MdRemoveRedEye,
	MdWorkOutline,
} from "react-icons/md";
import { TiDocumentText } from "react-icons/ti";

const ApplicantInfo = ({
	applicant,
	offerId,
}: {
	applicant: applicantType | undefined;
	offerId: string | undefined;
}) => {
	const { data: resume } = useGetResumeQuery(applicant?.resume_id);
	const [showResume, setShowResume] = useState(false);
	const [acceptApplication] = useAccepApplicationMutation();
	const [rejectApplication] = useRejectpplicationMutation();
	// console.log(resume);

	const handleAcceptApplicantion = async () => {
		const res = await acceptApplication({
			userId: applicant?.applicant_id,
			offerId,
		});
		console.log(res);
	};
	const handleRejectApplicantion = async () => {
		const res = await rejectApplication({
			userId: applicant?.applicant_id,
			offerId,
		});
		console.log(res);
	};
	return (
		<div className='w-[49%] h-fit sticky top-30 space-y-4 rounded-4xl p-10 border-2 border-[#e9e9e9] bg-white'>
			<div>
				<h1 className='font-medium text-xl col-span-2'>Personal Information</h1>
				<div className='grid grid-cols-2 mt-2 gap-3'>
					<div className='flex items-center space-x-2'>
						<div className='flex items-center justify-center rounded-lg bg-[#e9e9e9] text-[#878787] p-1.5 text-2xl'>
							<LuUser />
						</div>
						<div className='-space-y-1'>
							<h3>{applicant?.name}</h3>
							<p className='text-[#878787] text-[14px]'>Full Name</p>
						</div>
					</div>
					<div className='flex items-center space-x-2'>
						<div className='flex items-center justify-center rounded-lg bg-[#e9e9e9] text-[#878787] p-1.5 text-2xl'>
							<MdWorkOutline />
						</div>
						<div className='-space-y-1'>
							<h3>{applicant?.job}</h3>
							<p className='text-[#878787] text-[14px]'>job</p>
						</div>
					</div>
					<div className='flex items-center space-x-2'>
						<div className='flex items-center justify-center rounded-lg bg-[#e9e9e9] text-[#878787] p-1.5 text-2xl'>
							<HiOutlineMail />
						</div>
						<div className='-space-y-1'>
							<h3>{applicant?.email}</h3>
							<p className='text-[#878787] text-[14px]'>Mail adress</p>
						</div>
					</div>
					<div className='flex items-center space-x-2'>
						<div className='flex items-center justify-center rounded-lg bg-[#e9e9e9] text-[#878787] p-1.5 text-2xl'>
							<MdOutlinePhoneAndroid />
						</div>
						<div className='-space-y-1'>
							<h3>{applicant?.phone}</h3>
							<p className='text-[#878787] text-[14px]'>Phone Number</p>
						</div>
					</div>
				</div>
			</div>
			<div>
				<h1 className='font-medium text-xl'>Profile</h1>
				<p>{applicant?.about_me}</p>
			</div>
			{applicant?.message && (
				<div>
					<h1 className='font-medium text-xl'>Profile</h1>
					<p>{applicant?.message}</p>
				</div>
			)}
			<div>
				<h1 className='font-medium text-xl'>Resume</h1>
				<div className='flex flex-col items-center justify-center'>
					<div className='flex w-full justify-between items-center'>
						<div className='flex items-center space-x-2'>
							<div className='flex items-center justify-center rounded-lg bg-[#e9e9e9] text-[#878787] p-1.5 text-2xl'>
								<TiDocumentText />
							</div>
							<h3>{resume?.file_name}</h3>
						</div>

						<div className='flex items-center space-x-2'>
							<div
								onClick={() => setShowResume((prev) => !prev)}
								className='bg-[#ffda0a] text-white p-2 rounded-xl text-lg'
							>
								<MdRemoveRedEye />
							</div>
							<a
								href={resume?.cv_url}
								download={resume?.file_name}
								className='bg-[#0082FA] text-white rounded-xl  p-2 cursor-pointer'
							>
								<CgSoftwareDownload className='text-xl' />
							</a>
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
			</div>
			<div className='flex items-center w-full space-x-2'>
				<button
					onClick={handleRejectApplicantion}
					className='border-2 cursor-pointer rounded-xl p-1.5 font-medium w-[50%] text-red-500'
				>
					Rejected
				</button>
				<button
					onClick={handleAcceptApplicantion}
					className='border-2 cursor-pointer rounded-xl p-1.5 font-medium w-[50%] text-green-500'
				>
					Accepted
				</button>
			</div>
		</div>
	);
};

export default ApplicantInfo;
