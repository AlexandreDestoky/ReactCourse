import "./App.css";
import Btn from "./Btn";
import ThemeContextProvider from "./Context/ThemeContext";

function App() {
  return (
    <div className="App">
      <h1>APP</h1>
      <p>Test mode jour nuit</p>
      <ThemeContextProvider>
        <Btn />
      </ThemeContextProvider>
    </div>
  );
}
//Explication optimisation accèsibilité pour personne avec handicap
//Explication Webpack
export default App;
