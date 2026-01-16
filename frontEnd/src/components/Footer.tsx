import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";

const Footer = () => {
	return (
		<footer className='w-full rounded-t-3xl bg-white mt-10'>
			<div className='w-[80%] mx-auto bg-white rounded-2xl  py-8'>
				<div className='grid md:grid-cols-2 place-items-center-safe  gap-6'>
					<div className='space-y-2 '>
						<Link to={"/"} className='flex items-center justify-center lg:justify-start gap-0.5'>
							<img src='/src/assets/logo.svg' width={45} alt='' />
							<h1 className='text-6xl font-semibold'>ProFind.</h1>
						</Link>
						<p className='text-lg max-w-[80%] lg:max-w-full  mx-auto text-gray-500 text-center lg:text-left'>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
							quia necessitatibus ipsum vero, nam aperiam aliquid magnam?
						</p>
						<div className=' flex items-center justify-center lg:justify-start text-[20px] text-black  '>
							<div className='group rounded-full hover:bg-[#0082fa]  transition duration-200 ease-in-out p-1.5 mr-1.5'>
								<FaFacebookF className='group-hover:text-white transition duration-200 ease-in-out' />
							</div>
							<div className='group rounded-full hover:bg-[#0082fa]  transition duration-200 ease-in-out p-1.5 mx-1.5'>
								<FaInstagram className='group-hover:text-white transition duration-200 ease-in-out' />
							</div>
							<div className='group rounded-full hover:bg-[#0082fa]  transition duration-200 ease-in-out p-1.5 mx-1.5'>
								<FaLinkedinIn className='group-hover:text-white transition duration-200 ease-in-out' />
							</div>
							<div className='group rounded-full hover:bg-[#0082fa]  transition duration-200 ease-in-out p-1.5 mx-1.5'>
								<FaXTwitter className='group-hover:text-white transition duration-200 ease-in-out' />
							</div>
						</div>
					</div>
					<div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full'>
						<div className='flex flex-col items-center justify-center text-center lg:text-left '>
							<h3 className='font-medium text-xl'>Company</h3>
							<ul className='text-gray-500 text-lg'>
								<li>Pricing</li>
								<li>About us</li>
								<li>Contact us</li>
							</ul>
						</div>
						<div className='flex flex-col items-center justify-center text-center lg:text-left '>
							<h3 className='font-medium text-xl'>Company</h3>
							<ul className='text-gray-500 text-lg'>
								<li>Pricing</li>
								<li>About us</li>
								<li>Contact us</li>
							</ul>
						</div>
						<div className='flex flex-col items-center justify-center text-center lg:text-left '>
							<h3 className='font-medium text-xl'>Company</h3>
							<ul className='text-gray-500 text-lg'>
								<li>Pricing</li>
								<li>About us</li>
								<li>Contact us</li>
							</ul>
						</div>
						<div className='flex flex-col items-center justify-center text-center lg:text-left '>
							<h3 className='font-medium text-xl'>Company</h3>
							<ul className='text-gray-500 text-lg'>
								<li>Pricing</li>
								<li>About us</li>
								<li>Contact us</li>
							</ul>
						</div>
					</div>
				</div>
				<hr className='text-gray-400 my-2' />
				<p className='text-center text-gray-500 text-[12px]'>
					@2025 Profind, All rights reserved
				</p>
			</div>
		</footer>
	);
};

export default Footer;
