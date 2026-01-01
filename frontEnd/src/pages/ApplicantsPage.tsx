import { useGetOfferApplicantsQuery } from "@/app/services/offersApi";
import ApplicantInfo from "@/components/ApplicantInfo";
import CaondidateStatuesDropDownList from "@/components/CaondidateStatuesDropDownList";
import GetOfferStatus from "@/components/shared/GetOfferStatus";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const ApplicantsPage = () => {
	const { id } = useParams();
	const { data: applicants } = useGetOfferApplicantsQuery(id);
	const [selectedApplicant, setSelectedApplicant] = useState();

	useEffect(() => {
		if (applicants) {
			setSelectedApplicant(applicants[0]);
		}
	}, [applicants]);
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
							onClick={() => setSelectedApplicant(applicant)}
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
								<GetOfferStatus offerStatus={applicant.pivot.status} />
							</div>
						</div>
					))}
				</div>
			</div>
			<ApplicantInfo applicant={selectedApplicant} />
		</div>
	);
};

export default ApplicantsPage;
