import './scss/App.css';
import Home from './pages/home';
import Signup from './pages/signup';
import Login from './pages/login';
import Account from './pages/account';
import Forum from './pages/forum';
import PostCreate from './pages/post_create';
import PostDisplay from './pages/post_display';
import CommentCreate from './pages/comment_create';
import CommentDisplay from './pages/comment_display';
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
        <Route path="/post_create" element= {<PostCreate/>} />
        <Route path="/post_display" element= {<PostDisplay/>} />
        <Route path="/comment_create" element={<CommentCreate/>} />
        <Route path="/comment_display" element={<CommentDisplay/>} />
      </Routes>
    </div>
  );
}

export default App;
