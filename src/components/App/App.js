import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import { StarshipDetails } from '../swComponents';
import { SwapiServiceProvider } from '../../services/swapiServiceContext';
import SwapiService from '../../services/swapiService';
import {
	PersonPage,
	PlanetPage,
	StarshipPage,
	loginPage as LoginPage,
	secretPage as Secretpage
} from './../Pages';

import './App.css';

const swapiService = new SwapiService();

const App = () => {
	const [isLoggedIn, setLoggedIn] = useState(false);

	return (
		<div className="stardb-app">
			<Router>
				<SwapiServiceProvider value={swapiService}>
					<Header />
					<RandomPlanet />
					<Route
						path="/"
						render={() => <h2>Welcome to StarDB</h2>}
						exact
					/>
					<Route path="/persons/:id?" component={PersonPage} />
					<Route path="/planets/:id?" component={PlanetPage} />
					<Route path="/starships/:id?" component={StarshipPage} />
					<Route
						path="/starships/:id"
						render={({
							match: {
								params: { id }
							}
						}) => {
							return <StarshipDetails itemId={id} />;
						}}
					/>
					<Route
						path="/login"
						render={() => (
							<LoginPage
								onLogin={() => setLoggedIn(true)}
								isLoggedIn={isLoggedIn}
							/>
						)}
					/>
					<Route
						path="/secret"
						render={() => <Secretpage isLoggedIn={isLoggedIn} />}
					/>
				</SwapiServiceProvider>
			</Router>
		</div>
	);
};

export default App;
