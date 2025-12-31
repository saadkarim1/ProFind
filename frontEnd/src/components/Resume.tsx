import { useUploadResumeMutation } from "@/app/services/resumeApi";
import { useState } from "react";
import toast from "react-hot-toast";

const Resume = () => {
	const [cv_file, setCv_file] = useState<File>();
	const [uploadResume, { isLoading }] = useUploadResumeMutation();

	const upload = async () => {
		// console.log(cv_file);
		try {
			const res = await uploadResume(cv_file).unwrap();
			console.log(res);
			if (res.status === 200) {
				toast.success("Resume added", {
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
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div className='p-6 rounded-3xl border-2 border-[#e9e9e9] bg-white w-full space-y-4'>
			<h1 className='font-semibold text-lg'>Resume</h1>

			<div className='border-2 border-dashed border-[#0082FA] rounded-lg p-6 text-center bg-white'>
				<p className='text-[#878787] text-[15px]'>
					Drag & drop your Resume here or
				</p>
				<input
					type='file'
					accept='.pdf'
					className='hidden'
					id='fileInput'
					onChange={(e) => {
						if (e.currentTarget.files) {
							setCv_file(e.currentTarget.files[0]);
							// console.log(file);
						}
					}}
				/>
				<label
					htmlFor='fileInput'
					className='inline-block bg-[#0082FA] text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-[#0082FA] transition'
				>
					Choose File
				</label>
				<p>{cv_file?.name}</p>
				<p className='text-xs text-gray-400 mt-2'>PDF up to 10MB</p>
			</div>
			<button
				type='submit'
				disabled={isLoading}
				onClick={upload}
				className='w-full h-fit py-2 cursor-pointer border-2 text-white border-[#0082FA] flex items-center justify-center rounded-xl bg-[#0082FA]'
			>
				{/*  */}
				{isLoading ? (
					<div className=' w-7 h-7 border-3 animate-spin border-white border-t-transparent rounded-full '></div>
				) : (
					"Upload"
				)}
			</button>
		</div>
	);
};

export default Resume;
