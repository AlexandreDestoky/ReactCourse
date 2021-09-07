import React from "react";
import BarreRecherche from "./BarreRecherche";
import TableProduit from "./TableProduit";
import { useState } from "react";

export default function BlocProduit(props) {
  const [dataFiltre, setDataFiltre] = useState(props.data);

  const filtreData = e =>
    setDataFiltre(dataFiltre => props.data.filter(el => el.name.toUpperCase().includes(e.target.value.toUpperCase())));

  const filtreStock = (e) => {
    if(e.target.checked) {
      setDataFiltre(dataFiltre => dataFiltre.filter(el => el.stocked ))
    } else {
      setDataFiltre(props.data);
    }
  }

  return (
    <div>
      <BarreRecherche fctFiltrage={filtreData} fctStock={filtreStock}/>
      <TableProduit data={dataFiltre} />
    </div>
  );
}
