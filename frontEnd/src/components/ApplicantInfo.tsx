import { HiOutlineMail } from "react-icons/hi";
import { LuUser } from "react-icons/lu";
import { MdOutlinePhoneAndroid, MdWorkOutline } from "react-icons/md";

const ApplicantInfo = ({ applicant }) => {
	console.log(applicant);
	return (
		<div className='w-[49%] h-fit sticky top-30 space-y-4 rounded-4xl p-10 border-2 border-[#e9e9e9] bg-white'>
			<div>
				<h1 className='font-medium text-xl col-span-2'>Personal Information</h1>
				<div className='grid grid-cols-2 mt-2 gap-6'>
					<div className='flex items-center space-x-2'>
						<div className='flex items-center justify-center rounded-lg bg-[#e9e9e9] text-[#878787] p-1.5 text-2xl'>
							<LuUser />
						</div>
						<div className='-space-y-1'>
							<h3>karim saad</h3>
							<p className='text-[#878787] text-[14px]'>Full Name</p>
						</div>
					</div>
					<div className='flex items-center space-x-2'>
						<div className='flex items-center justify-center rounded-lg bg-[#e9e9e9] text-[#878787] p-1.5 text-2xl'>
							<MdWorkOutline />
						</div>
						<div className='-space-y-1'>
							<h3>Fullstack developper</h3>
							<p className='text-[#878787] text-[14px]'>job</p>
						</div>
					</div>
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
			<hr className='text-[#e9e9e9] h-3' />
			<div>
				<h1 className='font-medium text-xl'>Profile</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt qui
					atque laboriosam et quae. Cum iste a officia reprehenderit, officiis
					dignissimos. Eum alias quidem incidunt nulla iure, officia ipsa ex.
				</p>
			</div>
			<hr className='text-[#e9e9e9] h-3' />
			<h1 className='font-medium text-xl'>Resume</h1>
		</div>
	);
};

export default ApplicantInfo;
