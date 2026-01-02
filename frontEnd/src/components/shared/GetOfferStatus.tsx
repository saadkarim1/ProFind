const GetOfferStatus = ({
	offerStatus,
}: {
	offerStatus: string | undefined;
}) => {
	switch (offerStatus) {
		case "pending":
			return (
				<div
					className={`text-yellow-600 capitalize bg-yellow-50 rounded-full text-center w-fit px-3 py-1 text-sm font-medium border-2 `}
				>
					pending
				</div>
			);

		case "accepted":
			return (
				<div
					className={` text-green-600 w-fit bg-green-50 capitalize rounded-full text-center px-3 py-1 text-sm font-medium border-2 `}
				>
					accepted
				</div>
			);
		default:
			return (
				<div
					className={` text-red-600 bg-red-50 capitalize rounded-full text-center w-fit px-3 py-1 text-sm font-medium border-2 `}
				>
					rejected
				</div>
			);
	}
};

export default GetOfferStatus;
