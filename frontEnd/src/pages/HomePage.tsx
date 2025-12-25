import { useRef } from "react";
import HeroSection from "@/components/Home/HeroSection";
import JobsSection from "@/components/Home/JobSection";
import NewsLetterSection from "@/components/Home/NewsLetterSection";

export default function Home() {
	const featuredJobsRef = useRef<HTMLElement>(null);

	const scrollToFeaturedJobs = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		e.preventDefault();
		if (featuredJobsRef.current) {
			featuredJobsRef.current.scrollIntoView({
				behavior: "smooth",
				block: "start",
			});
		}
	};
	return (
		<>
			<HeroSection scrollToFeaturedJobs={scrollToFeaturedJobs} />
			<JobsSection featuredJobsRef={featuredJobsRef} />
			<NewsLetterSection />
		</>
	);
}
