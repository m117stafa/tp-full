import React from "react";
import { Navbar, Nav } from "bootstrap-4-react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
class NavigationBar extends React.Component {
	render() {
		return (
			<Navbar bg="dark" variant="dark">
				<Navbar.Brand>
					<Link to={""} className="nav-link">
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/1/17/Tata_Tamo_Racemo.jpg"
							width="25"
							height="25"
							alt="logo"
						/>
					</Link>
				</Navbar.Brand>
				<Nav className="mr-auto">
					<Link to={"add"} className="nav-link">
						Ajouter Voiture
					</Link>
					<Link to={"list"} className="nav-link">
						Liste Voitures
					</Link>
				</Nav>
			</Navbar>
		);
	}
}
export default NavigationBar;
