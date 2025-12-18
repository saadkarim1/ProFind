import { MdWorkOutline } from "react-icons/md";
import { RiGraduationCapLine } from "react-icons/ri";
import { SlLocationPin } from "react-icons/sl";
import { RiEditFill } from "react-icons/ri";
import { Link } from "react-router";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { TiDocumentText } from "react-icons/ti";
import { CgSoftwareDownload } from "react-icons/cg";

const SeekerProfilePage = () => {
	return (
		<div className='h-fit grid w-[74%] grid-cols-2 gap-4'>
			<div className='col-span-2 h-fit rounded-3xl border-2 border-[#e9e9e9] bg-white'>
				<div className='p-6 text-[14px] font-normal w-[80%]'>
					<h2 className='font-medium text-lg'>About me</h2>
					<p>
						quos quae recusandae facere odit quo error eligendi nulla veritatis
						Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						Accusantium neque sapiente iusto aliquid nobis, eaque asperiores at
						ad rerum ex.
					</p>
				</div>
				<div className='rounded-b-3xl border-2  border-transparent flex items-center justify-evenly  bg-[#f1f1f1] w-full py-2'>
					<div className='flex items-center space-x-2 text-[#878787] w-[33.33%] justify-center'>
						<SlLocationPin className='text-xl' />
						<p>Casablanca settat, Morocco</p>
					</div>
					<div className='flex items-center space-x-2 text-[#878787] w-[33.33%] justify-center'>
						<RiGraduationCapLine className='text-xl' />
						<p>Fullstack developer</p>
					</div>
					<div className='flex items-center space-x-2 text-[#878787] w-[33.33%] justify-center'>
						<MdWorkOutline className='text-xl' />
						<p>student</p>
					</div>
				</div>
			</div>
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
							<h3>saad@gmail.com</h3>
							<p className='text-[#878787] text-[14px]'>Mail adress</p>
						</div>
					</div>
					<div className='flex items-center space-x-2'>
						<div className='flex items-center justify-center rounded-lg bg-[#e9e9e9] text-[#878787] p-1.5 text-2xl'>
							<MdOutlinePhoneAndroid />
						</div>
						<div className='-space-y-1'>
							<h3>+212 784 816 461</h3>
							<p className='text-[#878787] text-[14px]'>Phone Number</p>
						</div>
					</div>
				</div>
			</div>
			<div className='p-6 col-span-2 h-fit rounded-3xl border-2 border-[#e9e9e9] bg-white'>
				<h2 className='font-medium text-lg'>Resume</h2>
				<div className='flex items-center justify-between mt-2'>
					<div className='flex items-center space-x-2'>
						<div className='flex items-center justify-center rounded-lg bg-[#e9e9e9] text-[#878787] p-1.5 text-2xl'>
							<TiDocumentText />
						</div>
						<h3>resume.pdf</h3>
					</div>
					<button className='bg-[#0082FA] text-white rounded-full flex items-center space-x-2 px-3 p-1 cursor-pointer'>
						<span>Donwload</span>
						<CgSoftwareDownload />
					</button>
				</div>
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
