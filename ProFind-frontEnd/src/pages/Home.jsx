import React from "react";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import JobsSection from "../components/JobsSection";
import Footer from "../components/Footer";

const Home = () => {
	return (
		<>
			<NavBar />
			<main>
				<HeroSection />
				<JobsSection />
			</main>
			<Footer />
		</>
	);
};

export default Home;
