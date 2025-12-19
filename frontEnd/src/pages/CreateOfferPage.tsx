import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router";

const CreateOfferPage = () => {
	return (
		<section>
			<Link to='/offers'>
				<button className='p-4 my-10 cursor-pointer bg-white rounded-xl border-2 border-[#e9e9e9] text-2xl'>
					<IoArrowBack />
				</button>
			</Link>
		</section>
	);
};

export default CreateOfferPage;
