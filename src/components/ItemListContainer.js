import React from 'react';


export default function ItemListContainer(props) {
    return(
        <div className="header">
            <p>{props.greeting}</p>
            <p>Todas las marcas <a className="header-portybox" href="#">{props.name}</a>! Piezas Originales.</p>
        </div>
    )
}