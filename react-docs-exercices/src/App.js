import './App.css';
import Liste from './Liste';

function App() {
  const tabPrenoms = ["Jean","Marc","Luc","Thomas"];

  return (
    <div className="App">
      <Liste tab={tabPrenoms}/>
    </div>
  );
}



export default App;
