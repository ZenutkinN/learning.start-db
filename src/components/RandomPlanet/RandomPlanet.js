import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SwapiService from '../../services/swapiService';
import Spinner from '../Spinner';
import ErrorIndicator from '../ErrorIndicator';

import './RandomPlanet.css';

export default class RandomPlanet extends Component {
  static defaultProps = {
      updateInterval: 10000,
  };
  static propTypes = {
    updateInterval: PropTypes.number,
  };
  swapiService = new SwapiService();
  state = {
    planet: {},
    loading: true,
    error: false,
  };
  
  componentDidMount() {
    this.updatePlanet();
    setInterval(this.updatePlanet, this.props.updateInterval);
  };

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 25) + 3;
    this.swapiService.getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  };

  onPlanetLoaded = (planet) => {
    this.setState({planet, loading: false});
  };

  onError = (error) => {
    this.setState({
      error: true,
      loading: false,
    });
  };

  render() {
    const {planet, loading, error} = this.state;

    const hasData = !(loading || error)

    const errorMessage = error ? <ErrorIndicator/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = hasData ? <PlanetView planet={planet}/> : null;

    return (
        <div className="randomPlanet jumbotron rounded">
          {errorMessage}
          {spinner}
          {content}
        </div>
    );
  };
};

const PlanetView = ({planet}) => {
  const {id, name, population, rotationPeriod, diameter} = planet;
  const alt = `Image of ${name}`;

  return (
    <React.Fragment>
        <img className="planet-image"
            src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
            alt={alt}
        />
        <div>
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>{population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>{rotationPeriod}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>{diameter}</span>
            </li>
          </ul>
        </div>
    </React.Fragment>
  );
};