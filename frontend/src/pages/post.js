import '../scss/App.css';
import Nav from '../components/layout/nav';
import PostForm from '../components/PostForm';
import Comment from './comment';
import CommentForm from '../components/CommentForm';

function Post() {
  return (
    <div className="landingPage">
      <Nav />
      <div class="container-sm col-11" className="landingPage-banner">
        <h1>
          Post 1!
        </h1>
        <PostForm />
        <Comment />
        <CommentForm />
      </div>
    </div>
  );
}

export default Post;