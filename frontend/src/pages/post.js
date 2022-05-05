import '../App.css';
import Nav from '../components/layout/nav';
import Comment from './comment';

function Post() {
  return (
    <div className="landingPage">
      <Nav />
      <div className="landingPage-banner">
        <h1>
          Post 1!
        </h1>
        <Comment />
      </div>
    </div>
  );
}

export default Post;