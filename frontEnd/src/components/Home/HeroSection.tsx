import { IoMdArrowRoundForward } from "react-icons/io";

type Props = {
	scrollToFeaturedJobs: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
const HeroSection: React.FC<Props> = ({ scrollToFeaturedJobs }) => {
	return (
		<section className='relative '>
			<div className='secondaryContainer'>
				<div></div>
				<div></div>
				<div></div>
			</div>
			<div className='absolute top-[60%] left-[50%] transform -translate-[50%] flex items-center justify-center flex-col space-y-6'>
				<div className='flex items-center bg-white  w-fit rounded-full border border-black'>
					<div className='bg-black rounded-full text-white py-1 px-2 text-center'>
						soon🎉
					</div>
					<div className='px-2 text-[14px] font-medium'>
						ProFind AI Agent Coming Soon
					</div>
				</div>
				<div className='text-5xl font-semibold text-center leading-16'>
					Discover Better Opportunities. Build Your{" "}
					<span className='rounded-full text-[46px]  px-3 py-0 bg-[#E2EFFF] border-2 border-[#D1E2F5] '>
						<span className='bg-linear-to-r from-[#2C8EFF] from-0% via-[#005FCC] via-50% to-[#2C8EFF] to-100% bg-clip-text text-transparent'>
							Career.
						</span>
					</span>
					<p className='text-center text-[#616161] text-[18px] font-medium leading-normal'>
						Your future is just one search away. Discover tailored job offers
						and apply in a few clicks with ProFind.
					</p>
				</div>

				<button
					onClick={(e) => scrollToFeaturedJobs(e)}
					className='group cursor-pointer font-normal text-lg flex items-center justify-center space-x-2 rounded-full bg-[#0082FA] text-white p-1.5'
				>
					<a href='#featured-jobs' className='pl-1'>
						explore job offers
					</a>
					<span className='bg-white rounded-full flex items-center justify-center p-2 text-[26px] text-[#0082FA]'>
						<IoMdArrowRoundForward className='group-hover:rotate-90 transition-transform duration-400 ease-in-out' />
					</span>
				</button>
				<div className='mt-2'>
					<p className='text-center font-medium text-2xl'>
						Trusted <span className='text-[#0082FA]'>100+</span> company find
						jobseeker
					</p>
					<div className='flex items-center justify-center space-x-5 '>
						<img src='src/assets/Deloitte.svg' alt='' className='max-w-35' />
						<img src='src/assets/Capgemini.svg' alt='' className='max-w-35' />
						<img src='src/assets/sofac.svg' alt='' className='max-w-35' />
						<img src='src/assets/Atos.svg' alt='' className='max-w-35' />
						<img src='src/assets/Globant.svg' alt='' className='max-w-35' />
						<img src='src/assets/inwi.svg' alt='' className='max-w-35' />
						<img
							src='src/assets/marocTelecom.svg'
							alt=''
							className='max-w-35'
						/>
						<img src='src/assets/cih.svg' alt='' className='max-w-35' />
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
