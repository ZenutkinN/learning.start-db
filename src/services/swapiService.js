export default class SwapiService {
  _apiBase = 'https://swapi.dev/api';
  _imgBase = 'https://starwars-visualguide.com/assets/img';

  async getResource(url) {
    const res = await fetch(this._apiBase + url);

    if (!res.ok) throw new Error(`Could not fetch ${url}, received ${res.status}`);

    return await res.json();
  }

  getAllPerson = async () => {
    const persons = await this.getResource('/people');
    return persons.results.map(this._transformPerson);
  };

  getPerson = async (id) => {
    const person = await this.getResource(`/people/${id}`);
    return this._transformPerson(person);
  };

  getAllPlanets = async () => {
    const planets = await this.getResource('/planets');
    return planets.results.map(this._transformPlanet);
  };

  getPlanet = async (id) => {
    const planet = await this.getResource(`/planets/${id}/`);
    return this._transformPlanet(planet);
  };

  getAllStarships = async () => {
    const starships = await this.getResource('/starships');
    return starships.results.map(this._transformStarships);
  };

  getStarship = async (id) => {
    const starship = await this.getResource(`/starships/${id}`);
    return this._transformStarships(starship);
  };

  getPersonImage = ({ id }) => {
    return `${this._imgBase}/characters/${id}.jpg`;
  };

  getStarshipImage = ({ id }) => {
    return `${this._imgBase}/starships/${id}.jpg`;
  };

  getPlanetImage = ({ id }) => {
    return `${this._imgBase}/planets/${id}.jpg`;
  };

  _transformPlanet = (planet) => {
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter,
    };
  };

  _transformPerson = (person) => {
    return {
      id: this._extractId(person),
      name: person.name,
      birthYear: person.birth_year,
      gender: person.gender,
      eyeColor: person.eye_color,
    };
  };

  _transformStarships = (starship) => {
    return {
      id: this._extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.cost_in_credits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargoCapacity,
    };
  };

  _extractId(obj) {
    const regExp = /\/(\d*)\/$/;
    return obj.url.match(regExp)[1];
  }
}
