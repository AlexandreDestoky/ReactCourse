import "./App.css";
import { useState } from "react";
import Footer from "./Footer";

function App() {

  return (
    <div className="App">
      <h1>APP</h1>
      <Footer>
        <h1>Le footer</h1>
        <p>Ce texte va dans props.children</p>
      </Footer>
    </div>
  );
}

export default App;
