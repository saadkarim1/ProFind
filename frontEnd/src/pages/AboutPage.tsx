const About = () => {
	return (
		<section className='relative'>
			<div className='secondaryContainer'>
				<div></div>
				<div></div>
				<div></div>
			</div>
			<div className='absolute  w-[95%] md:w-[90%] xl:w-[80%] mx-auto top-[60%] left-[50%] transform -translate-[50%]'>
				<div className='flex'>
					<div className='w-full lg:w-[50%] space-y-6'>
						<h2 className='font-medium w-fit py-1 px-3 rounded-full bg-[#cae4fd]'>
							About ProFind
						</h2>
						<h1 className='capitalize font-medium text-4xl w-[80%]'>
							a smarter way to connect{" "}
							<span className='text-[#0082FA]'>Talent</span> and{" "}
							<span className='text-[#0082FA]'>Opportunity</span>
						</h1>
						<p className='font-medium text-lg'>
							ProFind is a modern job discovery platform designed to simplify
							how jobseekers and recruiters connect. We help professionals find
							opportunities that truly match their skills, while enabling
							companies to discover talent faster and smarter.
						</p>
						<br />
						<p className='font-medium text-lg'>
							With intelligent matching, a clean user experience, and powerful
							tools for both sides, ProFind reduces friction in the hiring
							process and turns job searching into a seamless experience
						</p>
					</div>
					<div className='hidden lg:flex w-[50%] justify-center items-start'>
						<img src='/src/assets/Hiring.svg' alt='' />
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
