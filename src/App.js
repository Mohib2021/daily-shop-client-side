import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/pages/Login/Login"

function App() {
	return (
		<BrowserRouter>
			<div>
				<h1>Hello, React Router!</h1>
				<Routes>
					<Route path="/" element={<Login />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
