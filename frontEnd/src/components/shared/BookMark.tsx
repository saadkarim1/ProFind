import { useSaveOfferMutation } from "@/app/services/offersApi";
import toast from "react-hot-toast";

const BookMark = ({
	offer_id,
	is_saved,
	isAuthenticated,
}: {
	offer_id: string | undefined;
	is_saved: boolean | undefined;
	isAuthenticated: boolean;
}) => {
	const [saveOffer] = useSaveOfferMutation();
	const handleSave = async () => {
		if (!isAuthenticated) return;
		const res = await saveOffer(offer_id).unwrap();
		console.log(res);
		console.log(res.data.is_saved);
		if (res.data.is_saved) {
			toast.success("Offer saved successfully", {
				position: "bottom-right",
				style: {
					border: "2px solid #0082FA",
					borderRadius: "50px",
				},
				iconTheme: {
					primary: "#0082FA",
					secondary: "#fff",
				},
			});
		}
		if (!res.data.is_saved) {
			toast.success("Offer unsaved successfully", {
				position: "bottom-right",
				style: {
					border: "2px solid #0082FA",
					borderRadius: "50px",
				},
				iconTheme: {
					primary: "#0082FA",
					secondary: "#fff",
				},
			});
		}
	};
	return (
		<div
			onClick={handleSave}
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
