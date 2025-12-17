import { Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import JobsPage from "./pages/JobsPage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import ApplicationsPage from "./pages/ApplicationsPage";
import SavedPage from "./pages/SavedPage";
import SettingsPage from "./pages/SettingsPage";
import ProfileLayout from "./pages/ProfileLayout";
import SummaryPage from "./pages/SummaryPage";
import RecruiterLoginPage from "./pages/RecruiterLoginPage";

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
					<Route path='/recruiter/login' element={<RecruiterLoginPage />}></Route>
					<Route
						path='/profile'
						element={
							<ProfileLayout>
								<ProfilePage />
							</ProfileLayout>
						}
					></Route>
					<Route
						path='/career-information'
						element={
							<ProfileLayout>
								<SummaryPage />
							</ProfileLayout>
						}
					></Route>
					<Route
						path='/my-applications'
						element={
							<ProfileLayout>
								<ApplicationsPage />
							</ProfileLayout>
						}
					></Route>
					<Route
						path='/saved'
						element={
							<ProfileLayout>
								<SavedPage />
							</ProfileLayout>
						}
					></Route>
					<Route
						path='/settings'
						element={
							<ProfileLayout>
								<SettingsPage />
							</ProfileLayout>
						}
					></Route>
				</Route>
			</Routes>
		</>
	);
}

export default App;
