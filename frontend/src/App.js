import './scss/App.css';
import axios from "axios";
import Connection from './pages/connection';
import Signup from './pages/signup';
import Login from './pages/login';
import Account from './pages/account';
import Home from './pages/home';
import PostCreate from './pages/post_create';
import PostDisplay from './pages/post_display';
import SinglePost from './pages/post_single';
import CommentCreate from './pages/comment_create';
import CommentDisplay from './pages/comment_display';
import { Routes, Route} from 'react-router-dom';


function App() {

    axios.defaults.headers.common.Authorization = 'Bearer ' + localStorage.token
  
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Connection/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/account" element={<Account/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/post_create" element= {<PostCreate/>} />
          <Route path="/post_display" element= {<PostDisplay/>} />
          <Route path="/comment_create" element={<CommentCreate/>} />
          <Route path="/comment_display" element={<CommentDisplay/>} />
          <Route path="/post/:id" element={<SinglePost />} />
        </Routes>
      </div>
  );
}

export default App;
