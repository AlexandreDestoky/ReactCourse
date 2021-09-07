import React from 'react'

export default function BarreRecherche(props) {
  return (
    <div>
      <div><input type="text" placeholder="Search..." onChange={props.fctFiltrage}/></div>
      <input type="checkbox" id="box" onChange={props.fctStock}/> 
      <label htmlFor="box">Only show products in stock</label>
    </div>
  )
}
