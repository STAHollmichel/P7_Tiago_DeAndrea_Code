import '../scss/App.css';
import Nav from '../components/layout/nav';
import PostForm from '../components/PostForm';

function PostCreate() {
    
  return (
    <div className="landingPage">
      <Nav />
      <div class="container-sm col-11" className="landingPage-banner">
        <PostForm />
      </div>
    </div>
  );
}

export default PostCreate;