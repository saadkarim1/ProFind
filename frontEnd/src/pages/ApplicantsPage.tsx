import { useGetOfferApplicantsQuery } from "@/app/services/offersApi";
import CaondidateStatuesDropDownList from "@/components/CaondidateStatuesDropDownList";
import GetOfferStatus from "@/components/shared/GetOfferStatus";
import { HiOutlineMail } from "react-icons/hi";
import { LuUser } from "react-icons/lu";
import { MdOutlinePhoneAndroid, MdWorkOutline } from "react-icons/md";
import { useParams } from "react-router";

const ApplicantsPage = () => {
	const { id } = useParams();
	const { data: applicants } = useGetOfferApplicantsQuery(id);
	console.log(applicants);
	return (
		<div className='flex justify-between'>
			<div className='w-[49%]  h-screen border-2 border-[#e9e9e9] bg-white rounded-4xl overflow-scroll applicants'>
				<div className='flex items-center justify-between bg-white px-8 py-4 sticky top-0 border-b-2 border-[#e9e9e9]'>
					<h1 className='font-medium text-xl'>Applicants</h1>
					<CaondidateStatuesDropDownList />
				</div>
				<div className='space-y-2 p-8'>
					{applicants?.map((applicant, index) => (
						<div
							key={applicant.id}
							className='w-full rounded-2xl p-2 bg-white border-2 border-[#e9e9e9] flex items-center'
						>
							<h4 className='w-[10%] text-center font-medium'>{index + 1}</h4>
							<div className='w-[70%] flex items-center space-x-2 capitalize '>
								<div className='w-11 h-11 bg-sky-100 rounded-full text-[#0082FA] flex items-center justify-center font-bold text-2xl'>
									{applicant?.name?.slice(0, 1)}
									{applicant?.name?.split(" ")[1]?.slice(0, 1)}
								</div>
								<h2 className='font-medium text-lg'>{applicant.name}</h2>
							</div>
							<div className='w-[20%]'>
								{/* applicant.pivot.status */}
								<GetOfferStatus offerStatus={applicant.pivot.status} />
							</div>
						</div>
					))}
				</div>
			</div>
			<div className='w-[49%] h-fit sticky top-30 space-y-4 rounded-4xl p-10 border-2 border-[#e9e9e9] bg-white'>
				<div className=''>
					<h1 className='font-medium text-xl col-span-2'>
						Personal Information
					</h1>
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
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
						qui atque laboriosam et quae. Cum iste a officia reprehenderit,
						officiis dignissimos. Eum alias quidem incidunt nulla iure, officia
						ipsa ex.
					</p>
				</div>
				<hr className='text-[#e9e9e9] h-3' />
				<h1 className='font-medium text-xl'>Resume</h1>
			</div>
		</div>
	);
};

export default ApplicantsPage;
