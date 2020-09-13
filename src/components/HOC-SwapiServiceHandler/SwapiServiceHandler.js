import React from 'react';

import { SwapiServiceConsumer } from '../../services/swapiServiceContext';

const SwapiServiceHandler = (mapMethodsToProps) => (View) => {
    return (props) => {
        return (
            <SwapiServiceConsumer>
                {(swapiService) => {
                    const swapiServiceProps = mapMethodsToProps(swapiService);
                    
                    return <View {...props} {...swapiServiceProps} />}
                }
            </SwapiServiceConsumer>
        ); 
    };
};

export {
    SwapiServiceHandler
};
