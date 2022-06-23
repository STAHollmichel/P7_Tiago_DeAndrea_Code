// Styles
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fa }  from '@fortawesome/free-solid-svg-icons'


// Routing
import axios from "axios";
import { Routes, Route} from 'react-router-dom';

//Pages
import Login from './pages/login';
import Signup from './pages/signup';
import AccountProfile from './pages/account_profile';
import Home from './pages/home';
import PostDisplay from './pages/post_display';
import SinglePost from './pages/post_single';
import CommentDisplay from './pages/comment_display';
import CommentForm from './components/forms/comment/commentForm';

// Components







function App() {

    axios.defaults.headers.common.Authorization = 'Bearer ' + localStorage.token

    library.add(fab)
  
    return (
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/account_profile" element={<AccountProfile/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/post_display" element= {<PostDisplay/>} />
          <Route path="/comment_display" element={<CommentDisplay/>} />
          <Route path="/post/:id" element={<SinglePost />} />
          <Route path="/comment_create/:id" element={<CommentForm />} />
        </Routes>
      </div>
  );
}

export default App;
