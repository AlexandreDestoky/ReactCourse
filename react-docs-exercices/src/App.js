import './App.css';
// import Liste from './Liste';
import Formulaire from './Formulaire';

function App() {
  const tabPrenoms = ["Jean","Marc","Luc","Thomas"];

  return (
    <div className="App">
      {/* <Liste tab={tabPrenoms}/> */}
      <Formulaire/>

    </div>
  );
}



export default App;
