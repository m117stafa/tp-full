import React, { Component } from "react";
import { Card } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Col, Row } from "bootstrap-4-react/lib/components/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPlusSquare,
	faSave,
	faUndo,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import CustomToast from "./myToast";

export default class Voiture extends Component {
	constructor(props) {
		super(props);
		this.state = {
			marque: "",
			modele: "",
			couleur: "",
			immatricule: "",
			annee: "",
			prix: "",
			show: false,
		};
		this.voitureChange = this.voitureChange.bind(this);
		this.submitVoiture = this.submitVoiture.bind(this);
	}
	initialState = {
		marque: "",
		modele: "",
		couleur: "",
		immatricule: "",
		annee: "",
		prix: "",
	};
	resetVoiture = () => {
		this.setState(() => this.initialState);
	};
	submitVoiture(event) {
		event.preventDefault();
		const voiture = {
			marque: this.state.marque,
			modele: this.state.modele,
			couleur: this.state.couleur,
			immatricule: this.state.immatricule,
			annee: this.state.annee,
			prix: this.state.prix,
		};
		axios
			.post("http://localhost:8080/voiture", voiture)
			.then((response) => {
				if (response.data != null) {
					this.setState(this.initialState);
					this.setState({
						show: true,
					});
					setTimeout(() => this.setState({ show: false }), 3000);
				}
			});
	}
	voitureChange(event) {
		this.setState({
			[event.target.name]: event.target.value,
		});
	}
	render() {
		return (
			<Card className={"border border-dark bg-dark text-white"}>
				<div style={{"display":this.state.show ? "block":"none"}}>
					<CustomToast
						children={{
							show: this.state.show,
							message: "Voiture ajouter avec succes.",
                            type: "success",
						}}
					/>
				</div>
				<Card.Header>
					<FontAwesomeIcon icon={faPlusSquare} /> Ajouter Voiture
				</Card.Header>
				<Card.Body>
					<Form
						onSubmit={this.submitVoiture}
						onReset={this.resetVoiture}
						id="VoitureFormId"
					>
						<Card.Body>
							<Row>
								<Form.Group as={Col} controlId="fromGridMarque">
									<Form.Label> Marque </Form.Label>{" "}
									<Form.Control
										name="marque"
										type="text"
										className={"bg-dark text-white"}
										placeholder="Entrez Marque Voiture"
										required
										value={this.state.marque}
										onChange={this.voitureChange}
										autoComplete="off"
									/>
								</Form.Group>
								<Form.Group as={Col} controlId="fromGridMarque">
									<Form.Label> Modele </Form.Label>{" "}
									<Form.Control
										name="modele"
										type="text"
										className={"bg-dark text-white"}
										placeholder="Entrez Modele Voiture"
										value={this.state.modele}
										onChange={this.voitureChange}
										autoComplete="off"
									/>
								</Form.Group>
								<Form.Group as={Col} controlId="fromGridMarque">
									<Form.Label> Couleur </Form.Label>{" "}
									<Form.Control
										name="couleur"
										type="text"
										className={"bg-dark text-white"}
										placeholder="Entrez Couleur Voiture"
										value={this.state.couleur}
										onChange={this.voitureChange}
										autoComplete="off"
									/>
								</Form.Group>
								<Form.Group as={Col} controlId="fromGridMarque">
									<Form.Label> Immatricule </Form.Label>{" "}
									<Form.Control
										name="immatricule"
										type="text"
										className={"bg-dark text-white"}
										placeholder="Entrez Immatricule Voiture"
										value={this.state.immatricule}
										onChange={this.voitureChange}
										autoComplete="off"
									/>
								</Form.Group>
								<Form.Group as={Col} controlId="fromGridMarque">
									<Form.Label> Prix </Form.Label>{" "}
									<Form.Control
										name="prix"
										type="text"
										className={"bg-dark text-white"}
										placeholder="Entrez Prix Voiture"
										value={this.state.prix}
										onChange={this.voitureChange}
										autoComplete="off"
									/>
								</Form.Group>
								<Form.Group as={Col} controlId="fromGridMarque">
									<Form.Label> Annee </Form.Label>{" "}
									<Form.Control
										name="annee"
										type="text"
										className={"bg-dark text-white"}
										placeholder="Entrez Annee Voiture"
										value={this.state.annee}
										onChange={this.voitureChange}
										autoComplete="off"
									/>
								</Form.Group>
							</Row>
						</Card.Body>
						<Card.Footer style={{ textAlign: "right" }}>
							<Button size="sm" variant="success" type="submit">
								<FontAwesomeIcon icon={faSave} /> Submit
							</Button>
							<Button size="sm" variant="info" type="reset">
								<FontAwesomeIcon icon={faUndo} /> Reset
							</Button>
						</Card.Footer>
					</Form>
				</Card.Body>
			</Card>
		);
	}
}
