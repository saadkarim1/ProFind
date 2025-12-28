import {
	RouterProvider,
	ScrollRestoration,
	createBrowserRouter,
} from "react-router";
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
import RecruiterLoginPage from "./pages/RecruiterProfile/RecruiterLoginPage";
import RecruiterProfileLayout from "./pages/RecruiterProfile/RecruiterProfileLayout";
import SeekerProfileLayout from "./pages/SeekerProfile/SeekerProfileLayout";
import SeekerProfilePage from "./pages/SeekerProfile/SeekerProfilePage";
import RecruiterProfilePage from "./pages/RecruiterProfile/RecruiterProfilePage";
import CompanySummary from "./pages/RecruiterProfile/CompanySummary";
import CompanySettings from "./pages/RecruiterProfile/CompanySettings";
import OffersPage from "./pages/OffersPage";
import CreateOfferPage from "./pages/CreateOfferPage";
import ApplicantsPage from "./pages/ApplicantsPage";
import RecruiterRegisterPage from "./pages/RecruiterProfile/RecruiterRegisterPage";
import ProtectedRouteSeeker from "./components/shared/ProtectedRouteSeeker";
import PretectedRouteRecruiter from "./components/shared/PretectedRouteRecruiter";
import JobDetails from "./pages/JobDetails";

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<>
				<Layout />
				<ScrollRestoration />
			</>
		),
		children: [
			{ index: true, element: <HomePage /> },
			{ path: "jobs", element: <JobsPage /> },
			{ path: "about", element: <AboutPage /> },
			{ path: "login", element: <LoginPage /> },
			{ path: "register", element: <RegisterPage /> },
			{ path: "recruiter/login", element: <RecruiterLoginPage /> },
			{ path: "recruiter/register", element: <RecruiterRegisterPage /> },
			{ path: "jobs/:id", element: <JobDetails /> },

			{
				element: <ProtectedRouteSeeker />,
				children: [
					{
						path: "seeker",
						element: <SeekerProfileLayout />,
						children: [
							{ index: true, element: <SeekerProfilePage /> },
							{ path: "career-information", element: <SummaryPage /> },
							{ path: "my-applications", element: <ApplicationsPage /> },
							{ path: "saved", element: <SavedPage /> },
							{ path: "settings", element: <SettingsPage /> },
						],
					},
				],
			},

			{
				element: <PretectedRouteRecruiter />,
				children: [
					{
						path: "recruiter",
						element: <RecruiterProfileLayout />,
						children: [
							{ index: true, element: <RecruiterProfilePage /> },
							{ path: "summary", element: <CompanySummary /> },
							{ path: "settings", element: <CompanySettings /> },
						],
					},
					{ path: "offers/create-offer", element: <CreateOfferPage /> },
				],
			},

			{ path: "offers", element: <OffersPage /> },
			{ path: "offers/:id/applicants", element: <ApplicantsPage /> },
		],
	},
]);
function App() {
	return <RouterProvider router={router} />;
}

export default App;
