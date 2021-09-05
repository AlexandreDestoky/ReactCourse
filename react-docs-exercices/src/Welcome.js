import React from "react";
import "./Welcome.css";
import { useState } from "react";

export default function Welcome(props) {
  const [coucou, setCoucou] = useState(false);
  const toggleCoucou = () => setCoucou(!coucou);

  return (
    <div className="presentation">
      <h1>Salut {props.name}, comment vas-tu ?</h1>
      <button onClick={toggleCoucou}>Faire salut</button>
      {coucou && <p>👋😀</p>}
    </div>
  );
}
