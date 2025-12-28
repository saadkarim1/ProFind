import { useSaveOfferMutation } from "@/app/services/offersApi";

const BookMark = ({
	offer_id,
	is_saved,
}: {
	offer_id: string | undefined;
	is_saved: boolean | undefined;
}) => {
	const [saveOffer] = useSaveOfferMutation();
	return (
		<div
			onClick={async () => {
				const res = await saveOffer(offer_id);
				console.log(res);
			}}
			className='border-2 border-[#e9e9e9] cursor-pointer rounded-xl p-1'
		>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 24 24'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
				className={`lucide lucide-bookmark-icon lucide-bookmark w-6 h-6 ${
					is_saved
						? "fill-[#0082FA] stroke-[#0082FA]"
						: "fill-none stroke-[#878787]"
				} hover:stroke-[#0082FA] transition-all duration-200 ease-in-out`}
			>
				<path d='m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z' />
			</svg>
		</div>
	);
};

export default BookMark;
