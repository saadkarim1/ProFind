import { TiLocation } from "react-icons/ti";

const suggestions: string[] = [
	"Designer",
	"Fullstack developer",
	"Film maker",
	"Mareketing digital",
];
const SearchBar = () => {
	return (
		<section className='flex items-center space-y-2 flex-col max-w-[80%] mx-auto my-10'>
			<div className='space-x-2 w-full  p-1 border-2 border-gray-300 rounded-full bg-white flex items-center justify-between'>
				<input
					type='text'
					className='focus:outline-none p-3 border-r-2 border-gray-300 rounded-l-full w-[44%] text-lg'
					placeholder='Job title or keyword '
				/>
				<div className='w-[40%] flex items-center text-lg'>
					<TiLocation className='text-gray-500 text-2xl' />

					<select
						id='optionsList'
						className='no-arrow w-full focus:outline-none select-none text-gray-500'
					>
						<option disabled={true}>All locations</option>
						<hr />
						<option value='Banana'>Casablanca</option>
						<option value='Cherry'>Casablanca</option>
						<option value='Date'>Casablanca</option>
						<option value='Elderberry'>Casablanca</option>
					</select>
				</div>
				<div className='cursor-pointer font-normal text-lg rounded-full bg-[#0082FA] text-white py-2.5 px-3'>
					find Job
				</div>
			</div>
			<div className='w-full items-center flex space-x-1.5 justify-center'>
				<span className='text-gray-500 font-medium'>Seggustion: </span>
				{suggestions.map((s) => (
					<div key={s} className="flex items-center">
						<div className='h-1 w-1 bg-gray-500 rounded-full mx-1'></div>{" "}
						<p>{s}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default SearchBar;
