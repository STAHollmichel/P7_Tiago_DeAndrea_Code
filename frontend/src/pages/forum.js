import '../App.css';
import Header from '../components/layout/nav';
import Post from './post';

function Forum() {
  return (
    <div className="landingPage">
      <Header />
      <div className="landingPage-banner">
        <h1>
          Bienvenu au Forum Groupomania!
        </h1>
        <Post />
      </div>
    </div>
  );
}

export default Forum;