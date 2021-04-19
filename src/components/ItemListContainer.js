import React from 'react';
import ItemCount from './ItemCount';

export default function ItemListContainer(props) {
    return(
        <div className="header">
            <p>{props.greeting}</p>
            <p>Todas las marcas{props.name}! Piezas Originales.</p>
            <ItemCount />
        </div>
    )
}