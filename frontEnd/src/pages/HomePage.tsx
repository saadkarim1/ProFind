import { useRef } from "react";
import HeroSection from "@/components/Home/HeroSection";
import JobsSection from "@/components/Home/JobSection";
import NewsLetterSection from "@/components/Home/NewsLetterSection";
import { useGetUserQuery } from "@/app/services/authApi";
import { selectIsAuthenticated } from "@/features/auth/authSlice";
import { useSelector } from "react-redux";
import type { RooteState } from "@/app/store";

export default function Home() {
	const featuredJobsRef = useRef<HTMLElement>(null);
	const { data: authenticatedUser } = useGetUserQuery();
	const isAuthenticated = useSelector<RooteState>(selectIsAuthenticated);

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
	if (authenticatedUser) {
		console.log(authenticatedUser);
		console.log(isAuthenticated);
	}
	return (
		<>
			<HeroSection scrollToFeaturedJobs={scrollToFeaturedJobs} />
			<JobsSection featuredJobsRef={featuredJobsRef} />
			<NewsLetterSection />
		</>
	);
}
