import React, { useState } from "react";
//import ItemCount from './ItemCount';
import ItemList from "./ItemList";
import datajson from "../assets/data/data.json";

/*export default function ItemListContainer(props) {
  return(
    <div className="header">
      <p>Todas las marcas{props.titulo}! Piezas Originales.</p>
      <ItemCount />
      <p>{props.stock}Stock 10 unidades</p>
    </div>
  )
}   desafio anterior
*/

export default function ItemListContainer({ name, greeting }) {
  const [data, setData] = useState([]);

  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(datajson);
      console.log("2 seconds delay for test");
    }, 2000);
  }).then((res) => setData(res));

  return (
    <div>
      <ItemList dataInput={data} />
    </div>
  );
}
