import logo from './icon.svg';
import './App.css';
import Connectez from './loginButton';
import Banner from './header';

function App() {
  return (
    <div className="App">
      <Banner />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenu au Réseaux Groupomania!
        </p>
        <Connectez />
      </header>
    </div>
  );
}

export default App;
