import "./App.css";
import InputPoids from "./InputPoids";
import { useState } from "react";

function App() {
  const [weight, setWeight] = useState({
    poids: "0",
    format: "kg",
  });
  
  const poidsKg = weight.format === "kg" ? weight.poids : (weight.poids / 2.2).toFixed(2);
  const poidsLbs = weight.format === "lbs" ? weight.poids : (weight.poids * 2.2).toFixed(2);

  const ajustePoidsKg = e => setWeight({ poids: e.target.value, format: "kg" });
  const ajustePoidsLbs = e => setWeight({ poids: e.target.value, format: "lbs" });

  return (
    <div className="App">
      <InputPoids placeholder="kg" format="kg" fonctionApp={ajustePoidsKg} poids={poidsKg} />
      <InputPoids placeholder="lbs" format="lbs" fonctionApp={ajustePoidsLbs} poids={poidsLbs} />
    </div>
  );
}

export default App;
