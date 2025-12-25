export const OfferTypeStyle = (offer_type: string | undefined) => {
	switch (offer_type) {
		case "part_time":
			return (
				<div className='border-[1.5px] font-medium border-[#012eeb] text-[13px] px-2 py-0.5 w-fit h-fit rounded-full text-[#2c3ebc] bg-[#e6f6ff] '>
					Part Time
				</div>
			);

		case "remote":
			return (
				<div className='border-[1.5px] font-medium border-[#d4ab60] text-[13px] px-2 py-0.5 w-fit h-fit rounded-full text-[#655b41] bg-[#fff1d3] '>
					Remote
				</div>
			);

		case "freelance":
			return (
				<div className='border-[1.5px] font-medium border-[#4b9964] text-[13px] px-2 py-0.5 w-fit h-fit rounded-full text-[#22352f] bg-[#e2fce8] '>
					Freelance
				</div>
			);

		default:
			return (
				<div className='border-[1.5px] font-medium border-[#532d9e] text-[13px] px-2 py-0.5 w-fit h-fit rounded-full text-[#532d9e] bg-[#ffecff] '>
					Full Time
				</div>
			);
	}
};
