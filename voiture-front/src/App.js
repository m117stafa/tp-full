import React from "react";
import "./App.css";
import { Row, Container, Col } from "bootstrap-4-react";
import NavigationBar from "./Components/NavigationBar";
import Bienvenue from "./Components/Bienvenue";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Voiture from "./Components/Voiture";
import VoitureListe from "./Components/VoitureListe";

function App() {
	const marginTop = { marginTop: "20px" };
	return (
		<Router>
			<NavigationBar />
			<Container>
				<Row>
					<Col lg={12} style={marginTop}>
						<Switch>
							<Route path="/" exact component={Bienvenue} />
							<Route path="/add" exact component={Voiture} />
							<Route path="/edit/:id" exact component={Voiture} />
							<Route path="/list" exact component={VoitureListe} />
							
						</Switch>
					</Col>
				</Row>
			</Container>
			<Footer />
		</Router>
	);
}

export default App;
