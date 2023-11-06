import React, { Component } from "react";
import { Navbar, Container, Col } from "bootstrap-4-react/lib/components";

export default class Footer extends Component {
	render() {
		let fullYear = new Date().getFullYear();
		return (
			<Navbar fixed="bottom" bg="dark" variant="dark">
				<Container>
					<Col lg={12} className="text-center text-muted">
						<div>
							{fullYear} - {fullYear + 1}, All Rights Reserved by
							IDSIT
						</div>
					</Col>
				</Container>
			</Navbar>
		);
	}
}
