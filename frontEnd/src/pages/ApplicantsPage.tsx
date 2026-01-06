import { useGetOfferApplicantsQuery } from "@/app/services/offersApi";
import ApplicantInfo from "@/components/ApplicantInfo";
import GetOfferStatus from "@/components/shared/GetOfferStatus";
import type { applicantType } from "@/models/applicant";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const ApplicantsPage = () => {
	const { id } = useParams();
	const { data: applicants, isLoading } = useGetOfferApplicantsQuery(id);
	const [selectedApplicant, setSelectedApplicant] = useState<applicantType>();

	useEffect(() => {
		if (applicants) {
			setSelectedApplicant(applicants[0]);
		}
	}, [applicants]);

	if (isLoading) {
		return (
			<div className='w-full h-[80vh] bg-red-50 flex items-center justify-center'>
				<div className=' w-7 h-7 border-3 animate-spin border-white border-t-transparent rounded-full '></div>
			</div>
		);
	}

	if (applicants?.length === 0) {
		return (
			<div className='w-full h-[80vh]  flex items-center justify-center flex-col	space-y-2'>
				<h1 className='font-medium text-xl'>Not applicants yet!</h1>
				<button className='w-fit h-fit py-2 px-4 cursor-pointer border-2 text-white border-[#0082FA] flex items-center justify-center rounded-full bg-[#0082FA]'>
					Back to your offers
				</button>
			</div>
		);
	}

	return (
		<div className='flex justify-between'>
			<div className='w-[49%]  h-screen border-2 border-[#e9e9e9] bg-white rounded-4xl overflow-scroll applicants'>
				<div className='flex items-center justify-between bg-white px-8 py-4 sticky top-0 border-b-2 border-[#e9e9e9]'>
					<h1 className='font-medium text-xl'>Applicants</h1>
				</div>
				<div className='space-y-2 p-8'>
					{applicants?.map((applicant, index) => (
						<div
							key={applicant.applicant_id}
							onClick={() => setSelectedApplicant(applicant)}
							className={`w-full rounded-2xl p-2 bg-white border-3 cursor-pointer ${
								applicant.applicant_id === selectedApplicant?.applicant_id
									? "border-[#99C3FF]"
									: "border-[#e9e9e9]"
							} flex items-center`}
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
								<GetOfferStatus offerStatus={applicant.status} />
							</div>
						</div>
					))}
				</div>
			</div>
			<ApplicantInfo applicant={selectedApplicant} offerId={id} />
		</div>
	);
};

export default ApplicantsPage;
