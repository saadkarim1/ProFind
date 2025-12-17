import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";

const Footer = () => {
	return (
		<footer className='w-full rounded-t-3xl bg-white mt-10'>
			<div className='w-[80%] mx-auto bg-[white] rounded-2xl  py-8'>
				<div className='flex items-center justify-between'>
					<div className='w-[50%] space-y-2'>
						<Link to={"/"} className='flex items-center space-x-0.5'>
							<img src='/src/assets/logo.svg' width={30} alt='' />
							<h1 className='text-3xl font-semibold'>ProFind.</h1>
						</Link>
						<p className='text-[13px] max-w-[80%] text-gray-500'>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
							quia necessitatibus ipsum vero, nam aperiam aliquid magnam?
						</p>
						<div className=' flex items-center justify-start text-[16px] :bg-red-400 text-black  '>
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
					<div className=' w-[20%] flex flex-col items-center justify-start'>
						<h3 className='font-medium text-lg'>Company</h3>
						<ul className='text-gray-500'>
							<li>Pricing</li>
							<li>About us</li>
							<li>Contact us</li>
						</ul>
					</div>
					<div className=' w-[20%] flex flex-col items-center justify-start'>
						<h3 className='font-medium text-lg'>Company</h3>
						<ul className='text-gray-500'>
							<li>Pricing</li>
							<li>About us</li>
							<li>Contact us</li>
						</ul>
					</div>
					<div className=' w-[20%] flex flex-col items-center justify-start'>
						<h3 className='font-medium text-lg'>Company</h3>
						<ul className='text-gray-500'>
							<li>Pricing</li>
							<li>About us</li>
							<li>Contact us</li>
						</ul>
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
