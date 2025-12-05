import { LuMailOpen } from "react-icons/lu";

const NewsLetterSection = () => {
	return (
		<section className='w-[80%] mx-auto flex items-center bg-white rounded-4xl p-6 border-2 border-gray-300 my-10'>
			<div className='w-[50%] space-y-4'>
				<div className='rounded-full w-fit h-fit bg-[#0082fa] p-3 text-xl text-white'>
					<LuMailOpen />
				</div>
				<h1 className='text-6xl max-w-[60%] font-semibold'>
					Keep with the latest
				</h1>
				<p className='text-gray-500'>
					join our newslatter to stay up to date on features and releases
				</p>
			</div>
			<div className='w-[50%] space-y-4'>
				<label htmlFor='newslatter' className='block font-semibold text-lg'>
					Stay up to date
				</label>
				<div className='flex items-center space-x-3'>
					<input
						type='text'
						id='newsletter'
						name='newslatter'
						className='bg-white w-[60%] p-3.5 focus:outline-none rounded-full border-2 border-gray-300'
						placeholder='Enter email'
					/>
					<button className='cursor-pointer font-normal text-lg rounded-full bg-[#0082FA] text-white py-2.5 px-3'>
						subscibe
					</button>
				</div>
				<p className='text-gray-500'>
					bu subscibing you agree to with our <span className="text-black underline">Privacy Policy</span>{" "}
				</p>
			</div>
		</section>
	);
};

export default NewsLetterSection;
