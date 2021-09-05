import React from "react";
import { useState } from "react";

export default function Formulaire() {
  const [value, setValue] = useState("");
  const changeValeur = e => {
    setValue(e.target.value);
  };

  const envoiForm = e => {
    e.preventDefault();
    console.log("le formulaire est envoyé avec : " + value);
  };
  return (
    <>
      <form onSubmit={envoiForm}>
        <label htmlFor="">Prénom :</label>
        <input type="text" value={value} onChange={changeValeur} />
        <button>Envoyer</button>
      </form>
      <textarea id="" cols="15" rows="2" value={value}></textarea>
    </>
  );
}
