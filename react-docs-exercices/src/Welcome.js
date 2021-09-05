import React from 'react';
import "./Welcome.css"

export default function Welcome(props) {
  return (
    <div className="presentation">
      <h1>Salut {props.name}, comment vas-tu ?</h1>
    </div>
  )
}
