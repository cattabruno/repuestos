import React from 'react';
import ItemCount from './ItemCount';

export default function ItemListContainer(props) {
    return(
        <div className="header">
            <p>Todas las marcas{props.titulo}! Piezas Originales.</p>
            <ItemCount />
            <p>{props.stock}Stock 10 unidades</p>
        </div>
    )
}