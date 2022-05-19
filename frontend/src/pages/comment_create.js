import '../scss/App.css';
import Nav from '../components/layout/nav';
import CommentForm from '../components/CommentForm';

function CommentCreate() {
  return (
    <div className="landingPage">
      <Nav />
      <div class="container-sm col-11" className="landingPage-banner">
        <h1>
          Commentaire 1!
        </h1>
        <CommentForm />
      </div>
    </div>
  );
}

export default CommentCreate;