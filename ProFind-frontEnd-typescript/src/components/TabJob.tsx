const Tab = ({
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
		if (selectedDomaine == item) {
			setPosition({
				width: ref.current.getBoundingClientRect().width,
				left: ref.current.offsetLeft,
				opacity: 1,
				height: ref.current.getBoundingClientRect().height,
			});
		}
	}, [selectedDomaine]);

	return (
		<li
			className={`cursor-pointer py-1.5 px-4 rounded-full z-10 text-lg font-medium transition duration-300 ease-in-out ${
				selectedDomaine == item ? "font-bold text-black" : "text-gray-500"
			}`}
			onClick={() => {
				setSelectedDomaine(item);
			}}
			ref={ref}
			to={item.path}
		>
			{item}
		</li>
	);
};
