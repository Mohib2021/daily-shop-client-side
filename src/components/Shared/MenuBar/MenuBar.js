import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
// import { NavLink } from "react-router-dom";
// import useAuth from "../../../hooks/useAuth";
import bg from "../../../image/shop logo pic.jpg"


const MenuBar = () => {
//   const { user, logOut } = useAuth();
  return (
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="secondary"
        variant="dark"
        sticky="top"
      >
        <Container>
          <Navbar.Brand  to="/home">
            <div className="d-flex align-items-center">
              <img style={{ width: "40px" }} className="me-2" src={bg} alt="" />
              <div>
                <p className="mb-0 lh-1">
                  DailyShop
                </p>
              </div>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="me-auto">
              <Nav.Link  to="/home">
                Home
              </Nav.Link>
              <Nav.Link  to="/products">
                Products
              </Nav.Link>
              {/* {user?.email && (
                <>
                  <Nav.Link to="/dashboard">
                    Dashboard
                  </Nav.Link>
                </>
              )} */}
              <Nav.Link  to="/contact">
                Contact
              </Nav.Link>
            </Nav>
            {/* {user?.displayName && (
              <Navbar.Text>
                <span className="text-white me-2">{user?.displayName}</span>
              </Navbar.Text>
            )}
            {user?.displayName ? (
              <button
                onClick={logOut}
                className="btn btn-success text-white py-1"
              >
                LogOut
              </button>
            ) : (
              <>
                <Nav.Link as={NavLink} to="/login">
                  <button className="btn btn-info text-white">LogIn</button>
                </Nav.Link>
                <Nav.Link as={NavLink} to="/register">
                  <button className="btn btn-info text-white">
                    Register
                  </button> */}
                {/* </Nav.Link>
              </>
            )} */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};

export default MenuBar;
