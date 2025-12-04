import JobCard from "../components/JobCard";

const Jobs: React.FC = () => {
	return (
		<div className='h-screen w-[85%] mx-auto'>
			<div className='grid grid-cols-4 gap-4 w-full'>
				{[1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
					<>
						<JobCard key={index} />
					</>
				))}
			</div>
		</div>
	);
};

export default Jobs;
