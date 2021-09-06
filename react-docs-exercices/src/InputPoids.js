import React from "react";

export default function InputPoids(props) {
  return (
    <div>
      <input
        id={props.placeholder}
        type="number"
        placeholder={props.placeholder}
        onChange={props.fonctionApp}
        value={props.poids}
      />
      <label htmlFor={props.placeholder}>{props.placeholder}</label>
    </div>
  );
}
