import { useState } from "react";

const CopyButton = ({ offerId }: { offerId: string | undefined }) => {
	const [isCopied, setIsCopied] = useState(false);
	const handleClick = async () => {
		await navigator.clipboard.writeText(
			`http://localhost:5173/jobs/${offerId}`
		);
		setIsCopied(true);
		setTimeout(() => setIsCopied(false), 2000);
	};

	return (
		<div
			onClick={handleClick}
			className='border-2 border-[#e9e9e9] rounded-xl p-1 cursor-pointer'
		>
			{isCopied ? (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					stroke='#878787'
					strokeWidth='3'
					strokeLinecap='round'
					strokeLinejoin='round'
					className='lucide lucide-check-icon lucide-check'
				>
					<path d='M20 6 9 17l-5-5' />
				</svg>
			) : (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 24 24'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
					className={`lucide lucide-link-icon lucide-link fill-none w-6 h-6 stroke-[#878787]`}
				>
					<path d='M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71' />
					<path d='M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71' />
				</svg>
			)}
		</div>
	);
};

export default CopyButton;
