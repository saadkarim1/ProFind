import type { RooteState } from "@/app/store";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { RiEditFill } from "react-icons/ri";
import { SlLocationPin } from "react-icons/sl";
import { useSelector } from "react-redux";
import { Link } from "react-router";

const RecruiterProfilePage = () => {
	const user = useSelector((state: RooteState) => state.auth.user);
	return (
		<div className='h-fit grid w-[74%] grid-cols-2 gap-4'>
			<div className='p-6 col-span-2 h-fit rounded-3xl border-2 border-[#e9e9e9] bg-white'>
				<div className='text-[14px] font-normal w-full flex items-center justify-between'>
					<h2 className='font-medium text-lg'>All Information</h2>
					<Link
						to={"/recruiter/summary"}
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
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
								className={`lucide lucide-link-icon lucide-link fill-none w-6 h-6 stroke-[#878787] group-hover:stroke-[#AC1DE4] transition-all duration-250 ease-in-out`}
							>
								<path d='M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71' />
								<path d='M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71' />
							</svg>
						</div>
						<div className='-space-y-1'>
							<h3>{user?.company_website}</h3>
							<p className='text-[#878787] text-[14px]'>Link</p>
						</div>
					</div>
					<div className='flex items-center space-x-2'>
						<div className='flex items-center justify-center rounded-lg bg-[#e9e9e9] text-[#878787] p-1.5 text-2xl'>
							<SlLocationPin />
						</div>
						<div className='-space-y-1'>
							<h3>{user?.location}</h3>
							<p className='text-[#878787] text-[14px]'>Location</p>
						</div>
					</div>
				</div>
			</div>
			<div className='p-6 text-[14px] font-normal col-span-2 h-fit rounded-3xl border-2 border-[#e9e9e9] bg-white'>
				<h2 className='font-medium text-lg'>Description</h2>
				<p className='w-[80%]'>{user?.company_description}</p>
			</div>

			{/* <div className='rounded-3xl border-2 border-[#e9e9e9] bg-white p-6'>
				<h2 className='font-medium text-lg'>Sectors</h2>
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
			</div> */}
			{/* <div className='rounded-3xl border-2 border-[#e9e9e9] bg-white p-6'>
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
			</div> */}
		</div>
	);
};

export default RecruiterProfilePage;
