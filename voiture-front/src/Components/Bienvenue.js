import React from "react";
import { Jumbotron } from "bootstrap-4-react";

class Bienvenue extends React.Component {
	render() {
		return (
			<Jumbotron className="bg-dark text-white">
				<h1>Bienvenue au Magasin des Voitures</h1>
				<blockquote className="blockquote mb-0">
					<p>
						Le meilleur de nos voitures est exposé près de chez vous
					</p>
					<footer className="blockquote-footer">IDSIT</footer>
				</blockquote>
			</Jumbotron>
		);
	}
}

export default Bienvenue;
