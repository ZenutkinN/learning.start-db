import React from 'react';

import './ItemList.css';

const ItemList = ({data, children: renderItem, onItemSelected}) => {
  const list = data.map((item) => {
    
    const {id} = item;
    const label = renderItem(item);

    return (
      <li
        className="list-group-item" 
        key={id}
        onClick={() => onItemSelected(id)}
      >
        {label}
      </li>
    );
  });

  return (
    <ul className="itemList list-group">
      {list}
    </ul>
  );
};

export default ItemList;




