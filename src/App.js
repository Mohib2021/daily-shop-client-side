import "./App.css";
import Home from "./components/Pages/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Pages/Login/Login";
import Register from "./components/Pages/Register/Register";
import NotFound from "./components/Pages/404/NotFound";
import Confirmation from "./components/Pages/Confirmation/Confirmation";
import MenuBar from "./components/Shared/MenuBar/MenuBar";
import Footer from "./components/Shared/Footer/Footer";
import Explore from "./components/Pages/Explore/Explore";
function App() {
	return (
		// adding react router
		<Router>
			<MenuBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/home" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/confirmation" element={<Confirmation />} />
				<Route path="/explore" element={<Explore />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
