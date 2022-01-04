import "./App.css";
import Home from "./components/pages/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/pages/Login/Login";
import Register from "./components/pages/Register/Register";
import NotFound from "./components/pages/404/NotFound";
import Confirmation from "./components/pages/Confirmation/Confirmation";
import MenuBar from "./components/Shared/MenuBar/MenuBar";
import Footer from "./components/Shared/Footer/Footer";
import PrivetUserRoute from "./components/CustomHooks/PrivetUserRoute";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import Review from "./components/pages/Dashboard/Review/Review";
import OrderList from "./components/pages/Dashboard/OrderList/OrderList";
import Pay from "./components/pages/Dashboard/Pay/Pay";
import PrivetAdminRoute from "./components/CustomHooks/PrivetAdminRoute";
import HandleService from "./components/pages/Dashboard/HandleService/HandleService";
import AddService from "./components/pages/Dashboard/AddService/AddService";
import ManageOrder from "./components/pages/Dashboard/ManageOrder/ManageOrder";
import AllUsers from "./components/pages/Dashboard/AllUsers/AllUsers";
import AuthProvider from "./components/CustomHooks/Context/AuthProvider";

import Explore from "./components/pages/Explore/Explore";

function App() {
	return (
		// adding react router
		<Router>
			<AuthProvider>
				<MenuBar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/home" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/confirmation" element={<Confirmation />} />
					<Route path="/explore" element={<Explore />} />
					<Route
						path="/dashboard"
						element={
							<PrivetUserRoute>
								<Dashboard />
							</PrivetUserRoute>
						}
					>
						<Route path="/dashboard" element={<Review />} />
						<Route path="orderList" element={<OrderList />} />
						<Route path="pay/:payId" element={<Pay />} />
						<Route path="review" element={<Review />} />
						<Route
							path="handleProducts"
							element={
								// <PrivetAdminRoute>
								<HandleService />
								// </PrivetAdminRoute>
							}
						/>
						<Route
							path="addProduct"
							element={
								// <PrivetAdminRoute>
								<AddService />
								/* </PrivetAdminRoute> */
							}
						/>
						<Route
							path="manageOrders"
							element={
								// <PrivetAdminRoute>
								<ManageOrder />
								/* </PrivetAdminRoute> */
							}
						/>
						<Route
							path="allUsers"
							element={
								// <PrivetAdminRoute>
								<AllUsers />
								/* </PrivetAdminRoute> */
							}
						/>
					</Route>
					<Route path="*" element={<NotFound />} />
				</Routes>
				<Footer />
			</AuthProvider>
		</Router>
	);
}

export default App;
