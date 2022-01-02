import "./App.css";
import Home from "./components/Pages/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/home" element={<Home />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
