import '../App.css';
import Header from '../components/layout/nav';
import Footer from '../components/layout/footer';
import PostDisplay from './post_display';
import {NavLink} from 'react-router-dom';

function Home() {
  return (
    <div className='landingPage'>
      <Header />
      <main className='container-fluid bg-light'>
        <h1>
          Bienvenu chez Groupomania!
        </h1>
        <PostDisplay />
        <div className='loginBtn'>
          <NavLink to='/post_create'>Postuler</NavLink>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;