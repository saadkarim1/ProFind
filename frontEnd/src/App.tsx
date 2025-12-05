import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Jobs from "./pages/Jobs";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />}></Route>
					<Route path='/jobs' element={<Jobs />}></Route>
					<Route path='/about' element={<About />}></Route>
					<Route path='/login' element={<Login />}></Route>
					<Route path='/register' element={<Register />}></Route>
				</Route>
			</Routes>
		</>
	);
}

export default App;
