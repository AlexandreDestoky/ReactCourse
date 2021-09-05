import './App.css';

function App() {
  const nom = "Alexandre";
  return (
    <div className="App">
      <h1>HELLO {nom}</h1>
      <p>Il est {new Date().toLocaleTimeString()}.</p>
    </div>
  );
}



export default App;
