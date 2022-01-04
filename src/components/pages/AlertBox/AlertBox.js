import { Button, Modal } from "react-bootstrap";
import useAuth from "../../CustomHooks/Context/useAuth";
function AlertBox({ heading, message }) {
	const { show, setShow } = useAuth();
	const handleClose = () => setShow(false);
	return (
		<>
			<Modal style={{ zIndex: "4000" }} show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<h3
						className={`${
							heading.startsWith("Error") ? "text-danger" : "text-success"
						}`}
					>
						{heading}
					</h3>
				</Modal.Header>
				<Modal.Body>{message}</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Ok
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default AlertBox;
