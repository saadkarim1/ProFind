import JobCard from "@/components/JobCard";
import SearchBar from "@/components/jobs/SearchBar";

const Jobs: React.FC = () => {
	return (
		<div className=' w-[80%] mx-auto py-30'>
			<SearchBar />
			<div className='grid grid-cols-4 gap-4 w-full'>
				{[1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
					<JobCard key={index} />
				))}
			</div>
		</div>
	);
};

export default Jobs;
