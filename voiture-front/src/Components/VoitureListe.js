import React, { Component } from "react";
import { Card, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faList, faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { Button, ButtonGroup } from "react-bootstrap";
import CustomToast from "./myToast";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default class VoitureListe extends Component {
	constructor(props) {
		super(props);
		this.state = {
			voitures: [],
			show: false,
		};
	}
	componentDidMount() {
		axios
			.get("http://localhost:8080/voiture")
			.then((response) => response.data)
			.then((data) => {
				this.setState({ voitures: data });
			});
	}
	deleteVoiture = (voitureId) => {
		axios
			.delete("http://localhost:8080/voiture/" + voitureId)
			.then((response) => {
				if (response.status === 200) {
					this.setState({ show: true });
					setTimeout(() => this.setState({ show: false }), 3000);
					this.setState({
						voitures: this.state.voitures.filter(
							(voiture) => voiture.id !== voitureId
						),
					});
				} else {
					this.setState({ show: false });
				}
			});
	};
	render() {
		return (
			<Card className={"border border-dark bg-dark text-white"}>
				<div style={{ display: this.state.show ? "block" : "none" }}>
					<CustomToast
						children={{
							show: this.state.show,
							message: "Voiture supprime.",
							type: "danger",
						}}
					/>
				</div>
				<Card.Header>
					<FontAwesomeIcon icon={faList} /> Liste Voitures
				</Card.Header>
				<Card.Body>
					<Table bordered hover striped variant="dark">
						<thead>
							<tr>
								<th>Marque</th>
								<th>Modele </th>
								<th>Couleur</th>
								<th>Annee</th>
								<th>Prix</th>
							</tr>
						</thead>
						<tbody>
							{this.state.voitures.length === 0 ? (
								<tr align="center">
									<td colSpan="6">
										Pas de Voitures disponibles.
									</td>
								</tr>
							) : (
								this.state.voitures.map((voiture) => (
									<tr key={voiture.id}>
										<td>{voiture.marque}</td>
										<td>{voiture.modele}</td>
										<td>{voiture.couleur}</td>
										<td>{voiture.immatricule}</td>
										<td>{voiture.annee}</td>
										<td>{voiture.prix}</td>
										<td>
											<ButtonGroup>
												<Link to={"edit/" + voiture.id}>
													<Button
														size="sm"
														variant="outline-primary"
													>
														<FontAwesomeIcon
															icon={faEdit}
														/>
													</Button>
												</Link>
												<Button
													size="sm"
													variant="outline-danger"
													onClick={this.deleteVoiture.bind(
														this,
														voiture.id
													)}
												>
													<FontAwesomeIcon
														icon={faTrash}
													/>
												</Button>
											</ButtonGroup>
										</td>
									</tr>
								))
							)}
						</tbody>
					</Table>
				</Card.Body>{" "}
			</Card>
		);
	}
}
