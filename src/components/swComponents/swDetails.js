import React from 'react';

import ItemDetails, {Record} from '../ItemDetails';
import DetailsDataHandler from './../HOC-DetailsDataHandler/index';
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

const personRender = (
    <React.Fragment>
        <Record field="gender" label="Gender:"/>
        <Record field="eyeColor" label="Eye color:"/>
    </React.Fragment>
);

const planetRender = (
    <React.Fragment>
        <Record field="diametr" label="Diametr:"/>
        <Record field="population" label="population:"/>
    </React.Fragment>
);

const starshipRender = (
    <React.Fragment>
        <Record field="model" label="Model:"/>
        <Record field="costInCredits" label="Cost:"/>
    </React.Fragment>
);

const mapMethodsToPropsPerson = (swapiService) => {
    return {
        getData: swapiService.getPerson,
        getImageUrl: swapiService.getPersonImage,
    };
};

const mapMethodsToPropsPlanet = (swapiService) => {
    return {
        getData: swapiService.getPlanet,
        getImageUrl: swapiService.getPlanetImage,
    };
};

const mapMethodsToPropsStarship = (swapiService) => {
    return {
        getData: swapiService.getStarship,
        getImageUrl: swapiService.getStarshipImage,
    };
};

const PersonDetails =   compose(
                            SwapiServiceHandler(mapMethodsToPropsPerson),
                            DetailsDataHandler,
                            withChildFunction(personRender)
                        )(ItemDetails);

const PlanetDetails =   compose(
                            SwapiServiceHandler(mapMethodsToPropsPlanet),
                            DetailsDataHandler,
                            withChildFunction(planetRender)
                        )(ItemDetails);

const StarshipDetails = compose(
                            SwapiServiceHandler(mapMethodsToPropsStarship),
                            DetailsDataHandler,
                            withChildFunction(starshipRender)
                        )(ItemDetails);

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails,
};