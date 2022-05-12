import './scss/App.css';
import Home from './pages/home';
import Signup from './pages/signup';
import Login from './pages/login';
import Account from './pages/account';
import Forum from './pages/forum';
import Post from './pages/post';
import Comment from './pages/comment';
import { Routes, Route} from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/account" element={<Account/>} />
        <Route path="/forum" element={<Forum/>} />
        <Route path="/post" element= {<Post/>} />
        <Route path="/comment" element={<Comment/>} />
      </Routes>
    </div>
  );
}

export default App;
