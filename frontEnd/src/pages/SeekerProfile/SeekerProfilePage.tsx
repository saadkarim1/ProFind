import { MdWorkOutline } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { RiEditFill } from "react-icons/ri";
import { Link } from "react-router";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { TiDocumentText } from "react-icons/ti";
import { CgSoftwareDownload } from "react-icons/cg";
import { useSelector } from "react-redux";
import type { RooteState } from "@/app/store";
import { useGetUserResumesQuery } from "@/app/services/resumeApi";

const SeekerProfilePage = () => {
	const { user } = useSelector((state: RooteState) => state.auth);
	const { data: resumes } = useGetUserResumesQuery();
	console.log(resumes);
	return (
		<div className='h-fit grid w-[74%] grid-cols-2 gap-4'>
			<div className='p-6 col-span-2 h-fit rounded-3xl border-2 border-[#e9e9e9] bg-white'>
				<div className='text-[14px] font-normal w-full flex items-center justify-between'>
					<h2 className='font-medium text-lg'>All Personal Information</h2>
					<Link
						to={"/seeker/career-information"}
						className='flex items-center space-x-1 text-[#0082FA] text-[16px] cursor-pointer'
					>
						<RiEditFill className='text-xl' />
						<span>edit</span>
					</Link>
				</div>
				<div className='grid grid-cols-2 mt-2 gap-6'>
					<div className='flex items-center space-x-2'>
						<div className='flex items-center justify-center rounded-lg bg-[#e9e9e9] text-[#878787] p-1.5 text-2xl'>
							<HiOutlineMail />
						</div>
						<div className='-space-y-1'>
							<h3>{user?.email}</h3>
							<p className='text-[#878787] text-[14px]'>Mail adress</p>
						</div>
					</div>
					<div className='flex items-center space-x-2'>
						<div className='flex items-center justify-center rounded-lg bg-[#e9e9e9] text-[#878787] p-1.5 text-2xl'>
							<MdOutlinePhoneAndroid />
						</div>
						<div className='-space-y-1'>
							<h3>{user?.phone}</h3>
							<p className='text-[#878787] text-[14px]'>Phone Number</p>
						</div>
					</div>
					<div className='flex items-center space-x-2'>
						<div className='flex items-center justify-center rounded-lg bg-[#e9e9e9] text-[#878787] p-1.5 text-2xl'>
							<SlLocationPin strokeWidth='8' />
						</div>
						<div className='-space-y-1'>
							<h3>{user?.location}</h3>

							<p className='text-[#878787] text-[14px]'>Location</p>
						</div>
					</div>
					<div className='flex items-center space-x-2'>
						<div className='flex items-center justify-center rounded-lg bg-[#e9e9e9] text-[#878787] p-1.5 text-2xl'>
							<MdWorkOutline />
						</div>
						<div className='-space-y-1'>
							<h3>{user?.job}</h3>
							<p className='text-[#878787] text-[14px]'>Job</p>
						</div>
					</div>
				</div>
			</div>
			<div className='col-span-2 h-fit rounded-3xl border-2 border-[#e9e9e9] bg-white'>
				<div className='p-6 text-[16px] font-normal w-[80%]'>
					<h2 className='font-medium text-lg'>About me</h2>
					<p>{user?.about_me}</p>
				</div>
			</div>
			<div className='p-6 col-span-2 h-fit rounded-3xl border-2 border-[#e9e9e9] bg-white'>
				<h2 className='font-medium text-lg'>Resume</h2>
				{resumes?.map((resume) => (
					<div key={resume.id} className='flex flex-col space-y-2 items-center justify-center'>
						<div className='flex w-full justify-between items-center'>
							<div className='flex items-center space-x-2'>
								<div className='flex items-center justify-center rounded-lg bg-[#e9e9e9] text-[#878787] p-1.5 text-2xl'>
									<TiDocumentText />
								</div>
								<h3>{resume.file_name}</h3>
							</div>

							<a
								href={resume.cv_url}
								download={resume.file_name}
								className='bg-[#0082FA] text-white rounded-full flex items-center space-x-2 px-3 p-1 cursor-pointer'
							>
								<span>Donwload CV</span>
								<CgSoftwareDownload className='text-xl' />
							</a>
						</div>

						<div className='w-[50%] h-[500px] border rounded-lg overflow-hidden'>
							<iframe
								src={`${resume?.preview_url}#toolbar=0&view=FitH&view=FitV`}
								title='CV Preview'
								width='100%'
								height='100%'
								className='border-none'
							/>
						</div>
					</div>
				))}
			</div>
			<div className='rounded-3xl border-2 border-[#e9e9e9] bg-white p-6'>
				<h2 className='font-medium text-lg'>Skills</h2>
				<div className='flex flex-wrap mt-2 gap-2'>
					<div className='border-2 border-[#e9e9e9] rounded-full text-[14px] py-1 px-2'>
						Typescript
					</div>
					<div className='border-2 border-[#e9e9e9] rounded-full text-[14px] py-1 px-2'>
						Laravel
					</div>
					<div className='border-2 border-[#e9e9e9] rounded-full text-[14px] py-1 px-2'>
						React.js
					</div>
					<div className='border-2 border-[#e9e9e9] rounded-full text-[14px] py-1 px-2'>
						Php
					</div>
					<div className='border-2 border-[#e9e9e9] rounded-full text-[14px] py-1 px-2'>
						Next.js
					</div>
				</div>
			</div>
			<div className='rounded-3xl border-2 border-[#e9e9e9] bg-white p-6'>
				<h2 className='font-medium text-lg'>Tools</h2>
				<div className='flex flex-wrap mt-2 gap-2'>
					<div className='border-2 border-[#e9e9e9] rounded-full text-[14px] py-1 px-2'>
						vs code
					</div>
					<div className='border-2 border-[#e9e9e9] rounded-full text-[14px] py-1 px-2'>
						jira
					</div>
					<div className='border-2 border-[#e9e9e9] rounded-full text-[14px] py-1 px-2'>
						Trello
					</div>
					<div className='border-2 border-[#e9e9e9] rounded-full text-[14px] py-1 px-2'>
						vs code
					</div>
					<div className='border-2 border-[#e9e9e9] rounded-full text-[14px] py-1 px-2'>
						vs code
					</div>
				</div>
			</div>
		</div>
	);
};

export default SeekerProfilePage;
