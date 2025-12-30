import { useState } from "react";

const Resume = () => {
	const [file, setFile] = useState<File>();

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
							setFile(e.currentTarget.files[0]);
							console.log(file);
						}
					}}
				/>
				<label
					htmlFor='fileInput'
					className='inline-block bg-[#0082FA] text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-[#0082FA] transition'
				>
					Choose File
				</label>
				<p>{file?.name}</p>
				<p className='text-xs text-gray-400 mt-2'>PDF up to 10MB</p>
			</div>
			<button
				type='submit'
				onClick={() => console.log(file)}
				className='w-full h-fit py-2 cursor-pointer border-2 text-white border-[#0082FA]  rounded-xl bg-[#0082FA]'
			>
				Upload{" "}
			</button>
		</div>
	);
};

export default Resume;
