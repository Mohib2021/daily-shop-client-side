import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import style from "./Dashboard.module.css";
import { Outlet, useNavigate } from "react-router-dom";
import userDashboardRoute from "./DashboardRoute/DashboardRoute";
import { adminDashboardRoute } from "./DashboardRoute/DashboardRoute";
import Footer from "../../Shared/Footer/Footer";
import useAuth from "../../CustomHooks/Context/useAuth";

const drawerWidth = 300;

function Dashboard(props) {
	const { singleUser } = useAuth();

	const menuBar = <FontAwesomeIcon icon={faBars} />;
	const { window } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);
	const navigate = useNavigate();
	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const drawer = (
		<div>
			<div className="text-center my-3">
				<img
					className="w-50"
					src="https://i.ibb.co/sHw3Sfr/daily-shop-logo.png"
					alt="logo-img"
				/>
			</div>
			<Divider />
			<List>
				{singleUser?.role === "user" ? (
					<div>
						{userDashboardRoute.map((item) => {
							return (
								<p
									onClick={() => navigate(item.route)}
									className={`text-center fw-bold ${style.item}`}
									key={item.name}
								>
									<span className="text-decoration-none ">{item.name}</span>
								</p>
							);
						})}
					</div>
				) : (
					<div>
						{adminDashboardRoute.map((item) => {
							return (
								<p
									onClick={() => navigate(item.route)}
									className={`text-center fw-bold ${style.item}`}
									key={item.name}
								>
									<span className="text-decoration-none ">{item.name}</span>
								</p>
							);
						})}
					</div>
				)}
			</List>
		</div>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;

	return (
		<>
			<Box sx={{ display: "flex" }}>
				<CssBaseline />
				<AppBar
					style={{ background: "#212529" }}
					position="fixed"
					sx={{
						width: { sm: `calc(100% - ${drawerWidth}px)` },
						ml: { sm: `${drawerWidth}px` },
					}}
				>
					<Toolbar>
						<IconButton
							color="inherit"
							aria-label="open drawer"
							edge="start"
							onClick={handleDrawerToggle}
							sx={{ mr: 2, display: { sm: "none" } }}
						>
							<div style={{ fontSize: "2rem" }}>{menuBar}</div>
						</IconButton>
						<div className="mx-auto">
							<Typography noWrap component="div">
								<h2 style={{ fontFamily: "Oswald" }}>Welcome To Dashboard</h2>
							</Typography>
						</div>
					</Toolbar>
				</AppBar>
				<Box
					component="nav"
					sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
					aria-label="mailbox folders"
				>
					<Drawer
						container={container}
						variant="temporary"
						open={mobileOpen}
						onClose={handleDrawerToggle}
						ModalProps={{
							keepMounted: true, // Better open performance on mobile.
						}}
						sx={{
							display: { xs: "block", sm: "none" },
							"& .MuiDrawer-paper": {
								boxSizing: "border-box",
								width: drawerWidth,
							},
						}}
					>
						<div className="h-100 bg-dark text-white">{drawer}</div>
					</Drawer>
					<Drawer
						variant="permanent"
						sx={{
							display: { xs: "none", sm: "block" },
							"& .MuiDrawer-paper": {
								boxSizing: "border-box",
								width: drawerWidth,
							},
							borderRight: "0px solid white",
						}}
						open
					>
						<div
							style={{ borderRight: "4px solid white" }}
							className="h-100 bg-dark text-white"
						>
							{drawer}
						</div>
					</Drawer>
				</Box>
				<Box
					component="main"
					sx={{
						flexGrow: 1,

						width: { sm: `calc(100% - ${drawerWidth}px)` },
					}}
				>
					<Toolbar />
					<div className="">
						<Outlet />
					</div>
				</Box>
			</Box>
			<div className={`${style.footer} ${style.footerRes}`}>
				<Footer />
			</div>
		</>
	);
}

Dashboard.propTypes = {
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	window: PropTypes.func,
};

export default Dashboard;
