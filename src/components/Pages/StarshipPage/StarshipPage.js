import React from 'react';
import { withRouter } from 'react-router-dom';

import ErrorBoundary from '../../ErrorBoundary';
import { StarshipList } from '../../swComponents';

import './StarshipPage.css';

const StarshipPage = ({ history }) => {
	return (
		<ErrorBoundary>
			<StarshipList
				onItemSelected={itemId => history.push(itemId)}
			/>
		</ErrorBoundary>
	);
};

export default withRouter(StarshipPage);
