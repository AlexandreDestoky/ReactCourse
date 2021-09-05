import './App.css';
import Welcome from './Welcome';

function App() {
  const nom = "Alexandre";
  return (
    <div className="App">
      <h1>HELLO {nom}</h1>
      <Welcome name="Jean"/>
      <Welcome name="Marc"/>
    </div>
  );
}



export default App;
