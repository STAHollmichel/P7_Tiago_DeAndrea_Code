import logo from './components/images/icon.svg';
import './App.css';
import Inscrire from './components/buttons/signupButton';
import Connectez from './components/buttons/loginButton';
import Banner from './components/layout/header';

function App() {
  return (
    <div className="App">
      <Banner />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenu au Réseaux Groupomania!
        </p>
        <Inscrire />
        <Connectez />
      </header>
    </div>
  );
}

export default App;
