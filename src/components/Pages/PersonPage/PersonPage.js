import React from 'react';
import { withRouter } from 'react-router-dom';

import Row from '../../Row';
import ErrorBoundary from '../../ErrorBoundary';
import { PersonList, PersonDetails } from '../../swComponents';

import './PersonPage.css';

const PersonPage = ({ match, history }) => {
	const {id} = match.params;

	const itemList = <PersonList onItemSelected={id => history.push(id)} />;
	const itemDetails = <PersonDetails itemId={id} />;

	return (
		<ErrorBoundary>
			<Row left={itemList} right={itemDetails} />
		</ErrorBoundary>
	);
};

export default withRouter(PersonPage);
