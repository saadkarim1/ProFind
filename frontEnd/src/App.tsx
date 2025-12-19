import { Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import JobsPage from "./pages/JobsPage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/SeekerProfile/LoginPage";
import RegisterPage from "./pages/SeekerProfile/RegisterPage";
import ApplicationsPage from "./pages/SeekerProfile/ApplicationsPage";
import SavedPage from "./pages/SeekerProfile/SavedPage";
import SettingsPage from "./pages/SeekerProfile/SettingsPage";
import SummaryPage from "./pages/SeekerProfile/SummaryPage";
import RecruiterLoginPage from "./pages/RecruiterLoginPage";
import RecruiterProfileLayout from "./pages/RecruiterProfile/RecruiterProfileLayout";
import SeekerProfileLayout from "./pages/SeekerProfile/SeekerProfileLayout";
import SeekerProfilePage from "./pages/SeekerProfile/SeekerProfilePage";
import RecruiterProfilePage from "./pages/RecruiterProfile/RecruiterProfilePage";
import CompanySummary from "./pages/RecruiterProfile/CompanySummary";
import CompanySettings from "./pages/RecruiterProfile/CompanySettings";
import OffersPage from "./pages/OffersPage";
import CreateOfferPage from "./pages/CreateOfferPage";
import ApplicantsPage from "./pages/ApplicantsPage";

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<HomePage />}></Route>
					<Route path='/jobs' element={<JobsPage />}></Route>
					<Route path='/about' element={<AboutPage />}></Route>
					<Route path='/login' element={<LoginPage />}></Route>
					<Route path='/register' element={<RegisterPage />}></Route>
					<Route
						path='/recruiter/login'
						element={<RecruiterLoginPage />}
					></Route>

					<Route path='/seeker' element={<SeekerProfileLayout />}>
						<Route index element={<SeekerProfilePage />}></Route>
						<Route path='career-information' element={<SummaryPage />}></Route>
						<Route
							path='my-applications'
							element={<ApplicationsPage />}
						></Route>
						<Route path='saved' element={<SavedPage />}></Route>
						<Route path='settings' element={<SettingsPage />}></Route>
					</Route>
					<Route path='/recruiter' element={<RecruiterProfileLayout />}>
						<Route index element={<RecruiterProfilePage />}></Route>
						<Route path='summary' element={<CompanySummary />}></Route>
						<Route path='settings' element={<CompanySettings />}></Route>
					</Route>

					<Route path='offers' element={<OffersPage />}></Route>
					<Route
						path='offers/create-offer'
						element={<CreateOfferPage />}
					></Route>
					<Route
						path='offers/:id/applicants'
						element={<ApplicantsPage />}
					></Route>
				</Route>
			</Routes>
		</>
	);
}

export default App;
