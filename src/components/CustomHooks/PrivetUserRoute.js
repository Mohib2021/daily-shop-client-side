import { Spinner } from "react-bootstrap";
import { useLocation, Navigate } from "react-router-dom";
import useAuth from "./Context/useAuth";

const PrivetUserRoute = ({ children }) => {
	const { user, isLoading } = useAuth();
	console.log(user, isLoading);
	const location = useLocation();
	if (isLoading) {
		return (
			<div
				style={{ height: "80vh" }}
				className="mt-5 d-flex align-items-center justify-content-center"
			>
				<h4 className="me-2">Loading...</h4>
				<Spinner animation="border" variant="dark" />
			</div>
		);
	}
	if (user.displayName) {
		return children;
	} else {
		return <Navigate to="/login" state={{ from: location.pathname }} />;
	}
};
export default PrivetUserRoute;
