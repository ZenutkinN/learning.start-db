import React, { Component } from 'react';

import Row from '../../Row';
import ErrorBoundary from '../../ErrorBoundary';
import { PlanetList, PlanetDetails } from '../../swComponents';

import './PlanetPage.css';

export default class PlanetPage extends Component {
	state = {
		selectedPerson: null
	};

	onPersonSelected = id => {
		this.setState({
			selectedPerson: id
		});
	};

	render() {
		const { selectedPerson } = this.state;

		const itemList = <PlanetList onItemSelected={this.onPersonSelected} />;

		const itemDetails = <PlanetDetails itemId={selectedPerson} />;

		return (
			<ErrorBoundary>
				<Row left={itemList} right={itemDetails} />
			</ErrorBoundary>
		);
	}
}
