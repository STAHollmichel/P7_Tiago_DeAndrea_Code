import './App.css';
import Home from './pages/home';
import Signup from './pages/signup';
import Login from './pages/login';
import Forum from './pages/forum';
import { Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/forum" element={<Forum/>} />
      </Routes>
    </div>
  );
}

export default App;
