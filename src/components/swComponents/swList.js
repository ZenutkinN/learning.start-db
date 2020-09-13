import React from 'react';

import ItemList from './../ItemList';
import DataHandler from './../HOC-DataHandler';
import { SwapiServiceHandler } from '../HOC-SwapiServiceHandler/SwapiServiceHandler';
import compose from './compose';

const withChildFunction = (render) => (View) => {
    return (props) => {
        return (
            <View {...props}>
                {render}
            </View>
        );
    };
};

const mapMethodsToPropsPerson = (swapiService) => {
    return {
        getData: swapiService.getAllPerson,
    };
};

const mapMethodsToPropsPlanet = (swapiService) => {
    return {
        getData: swapiService.getAllPlanets,
    };
};

const mapMethodsToPropsStarship = (swapiService) => {
    return {
        getData: swapiService.getAllStarships,
    };
};

const render = ({name}) => <span>{name}</span>;

const PersonList = compose(
                        SwapiServiceHandler(mapMethodsToPropsPerson),
                        DataHandler,
                        withChildFunction(render)
                    )(ItemList);

const PlanetList = compose(
                        SwapiServiceHandler(mapMethodsToPropsPlanet),
                        DataHandler,
                        withChildFunction(render)
                    )(ItemList);

const StarshipList = compose(
                        SwapiServiceHandler(mapMethodsToPropsStarship),
                        DataHandler,
                        withChildFunction(render)
                    )(ItemList);

export {
    PersonList,
    PlanetList,
    StarshipList,
};