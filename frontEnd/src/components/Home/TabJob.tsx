import { useEffect, useRef } from "react";
import type { Position } from "../../models/model";

const TabJob = ({
	item,
	setPosition,
	selectedDomaine,
	setSelectedDomaine,
}: {
	item: string;
	setPosition: React.Dispatch<React.SetStateAction<Position>>;
	selectedDomaine: string;
	setSelectedDomaine: React.Dispatch<React.SetStateAction<string>>;
}) => {
	const ref = useRef<HTMLLIElement>(null);

	useEffect(() => {
		if (selectedDomaine == item && ref.current) {
			const refeCurrent = ref.current.getBoundingClientRect();
			setPosition({
				width: refeCurrent.width,
				left: ref.current.offsetLeft,
				opacity: 1,
				height: refeCurrent.height,
			});
		}
	}, [selectedDomaine]);

	return (
		<li
			className={`cursor-pointer py-1.5 px-1.5 sm:px-4 capitalize rounded-full z-10 font-medium transition duration-300 ease-in-out ${
				selectedDomaine == item ? "font-bold text-black" : "text-gray-500"
			}`}
			onClick={() => {
				setSelectedDomaine(item);
			}}
			ref={ref}
		>
			{item}
		</li>
	);
};

export default TabJob;
