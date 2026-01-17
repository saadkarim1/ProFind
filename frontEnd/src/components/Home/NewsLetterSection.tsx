import { LuMailOpen } from "react-icons/lu";

const NewsLetterSection = () => {
	return (
		<section className='w-[95%] md:w-[90%] xl:w-[80%] mx-auto flex lg:items-center flex-col lg:flex-row bg-white rounded-4xl p-6 border-2 border-[#e9e9e9] mt-16 mb-10 gap-4'>
			<div className='lg:w-[50%] space-y-4 '>
				<div className='rounded-full w-fit h-fit bg-[#0082fa] p-3 text-xl text-white'>
					<LuMailOpen />
				</div>
				<h1 className='text-5xl md:text-6xl  lg:max-w-[80%]  font-semibold'>
					Keep with the latest
				</h1>
				<p className='text-gray-500'>
					join our newslatter to stay up to date on features and releases
				</p>
			</div>
			<div className='lg:w-[50%] space-y-3'>
				<label htmlFor='newslatter' className='block font-semibold text-xl'>
					Stay up to date
				</label>
				<div className='flex flex-col sm:flex-row gap-3 md:items-center'>
					<input
						type='text'
						id='newsletter'
						name='newslatter'
						className='bg-white w-full md:w-[60%] p-3.5 focus:outline-none rounded-full border-2 border-gray-300'
						placeholder='Enter email'
					/>
					<button className='cursor-pointer font-normal text-lg rounded-full bg-[#0082FA] text-white py-2.5 px-3'>
						subscibe
					</button>
				</div>
				<p className='text-gray-500'>
					bu subscibing you agree to with our{" "}
					<span className='text-black underline'>Privacy Policy</span>{" "}
				</p>
			</div>
		</section>
	);
};

export default NewsLetterSection;
