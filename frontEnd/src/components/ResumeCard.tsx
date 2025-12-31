import type { ResumeType } from "@/models/resume";
import { Activity, useState } from "react";
import { CgSoftwareDownload } from "react-icons/cg";
import { TiDocumentText } from "react-icons/ti";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdRemoveRedEye } from "react-icons/md";
import { useDeleteResumeMutation } from "@/app/services/resumeApi";
import toast from "react-hot-toast";

const ResumeCard = ({ resume }: { resume: ResumeType }) => {
	const [showResume, setShowResume] = useState<boolean>(false);
	const [deleteResume, { isLoading }] = useDeleteResumeMutation();

	const handleDeleteResume = async () => {
		if (!isLoading) {
			const res = await deleteResume(resume.id);
			console.log(res);
			if (res.data.status === 200) {
				toast.success("Resume deleted", {
					position: "bottom-right",
					style: {
						border: "2px solid #0082FA",
						borderRadius: "50px",
					},
					iconTheme: {
						primary: "#0082FA",
						secondary: "#fff",
					},
				});
			}
		}
	};
	return (
		<div
			key={resume.id}
			className='cursor-pointer flex flex-col items-center justify-center'
		>
			<div className='flex w-full justify-between items-center'>
				<div className='flex items-center space-x-2'>
					<div className='flex items-center justify-center rounded-lg bg-[#e9e9e9] text-[#878787] p-1.5 text-2xl'>
						<TiDocumentText />
					</div>
					<h3>{resume.file_name}</h3>
				</div>
				<div className='flex items-center space-x-2'>
					<div
						onClick={() => setShowResume((prev) => !prev)}
						className='bg-[#ffda0a] text-white p-2 rounded-xl text-lg'
					>
						<MdRemoveRedEye />
					</div>
					<a
						href={resume.cv_url}
						download={resume.file_name}
						className='bg-[#0082FA] text-white rounded-xl  p-2 cursor-pointer'
					>
						<CgSoftwareDownload className='text-xl' />
					</a>
					<div
						onClick={handleDeleteResume}
						className='text-white  bg-red-500 p-2 rounded-xl  text-lg'
					>
						<FaRegTrashAlt />
					</div>
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
	);
};

export default ResumeCard;
