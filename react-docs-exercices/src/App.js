import './App.css';
import Welcome from './Welcome';
import Clock from './Clock';

function App() {
  const nom = "Alexandre";
  return (
    <div className="App">
      <h1>HELLO {nom}</h1>
      <Welcome name="Jean"/>
      <Clock/>
    </div>
  );
}



export default App;
