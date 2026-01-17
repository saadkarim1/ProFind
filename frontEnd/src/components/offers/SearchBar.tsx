import { useState } from "react";
import { TiLocation } from "react-icons/ti";

const suggestions: string[] = [
	"Designer",
	"Fullstack developer",
	"Film maker",
	"Mareketing digital",
];
const SearchBar = ({
	setInputsValues,
}: {
	setInputsValues: React.Dispatch<
		React.SetStateAction<{ location: string; keyword: string }>
	>;
}) => {
	const [inputFields, setInputsfields] = useState<{
		location: string;
		keyword: string;
	}>({
		location: "",
		keyword: "",
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
	) => {
		setInputsfields({
			...inputFields,
			[e.currentTarget.name]: e.currentTarget.value,
		});
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setInputsValues(inputFields);
	};

	return (
		<section className='flex items-center space-y-2 flex-col w-[95%] md:w-[80%] mx-auto my-10'>
			<form
				onSubmit={handleSubmit}
				className=' w-full p-1 border-2 border-gray-300 rounded-full bg-white flex items-center justify-between'
			>
				<input
					type='text'
					onChange={handleChange}
					name='keyword'
					className='focus:outline-none w-[40%] p-3 border-r-2 border-gray-300 rounded-l-full text-[16px] md:text-lg'
					placeholder='Job title or keyword '
				/>
				<div className='flex items-center text-lg'>
					<TiLocation className='text-gray-500 text-2xl' />

					<select
						id='optionsList'
						name='location'
						onChange={handleChange}
						className='no-arrow w-full focus:outline-none select-none text-gray-500 text-[16px] md:text-lg'
					>
						<option>All locations</option>
						<hr />

						<option value='casablanca'>Casablanca</option>
						<option value='casablanca'>Casablanca</option>
						<option value='casablanca'>Casablanca</option>
						<option value='casablanca'>Casablanca</option>
					</select>
				</div>
				<button
					type='submit'
					className='cursor-pointer font-normal text-[14px] md:text-lg rounded-full bg-[#0082FA] text-white py-3 px-3'
				>
					find Job
				</button>
			</form>
			<div className='hidden md:flex w-full items-center space-x-1.5 justify-center text-[14px] lg:text-[16px]'>
				<span className='text-gray-500 font-medium'>Seggustion: </span>
				{suggestions.map((s) => (
					<div key={s} className='flex items-center'>
						<div className='h-1 w-1 bg-gray-500 rounded-full mx-1'></div>{" "}
						<p>{s}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default SearchBar;
