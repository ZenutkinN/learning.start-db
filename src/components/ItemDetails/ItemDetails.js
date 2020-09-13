import React, { Children, cloneElement } from 'react';

import './ItemDetails.css'; 

const ItemDetails = ({data, img, children}) => {
    return (
        <div className="personDetails card">
            <ItemCard 
                item={data} 
                img={img} 
                children={children}
            /> 
        </div>
    );
};

const ItemCard = ({item, img, children}) => {
    const {name} = item;
    const alt = `Image of ${name}`;

    return (
        <React.Fragment>
            <img className="person-image"
                src={img} alt={alt}/>

            <div className="card-body">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    {Children.map(children.props.children, (child) => {
                        return cloneElement(child, {item});
                    })}
                </ul>
            </div>
        </React.Fragment>
    );
};

const Record = ({item, field, label}) => {
    return (
        <li className="list-group-item">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    );
}; 

export default ItemDetails;
export {Record};
