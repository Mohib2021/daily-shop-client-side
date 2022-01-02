import "./App.css";
import Home from "./components/Pages/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Pages/Login/Login";
import Register from "./components/Pages/Register/Register";
import NotFound from "./components/Pages/404/NotFound";
function App() {
	return (
		// adding react router
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/home" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Router>
	);
}

export default App;
