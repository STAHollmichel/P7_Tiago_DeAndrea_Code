import '../App.css';

import Header from '../components/layout/header';
import Footer from '../components/layout/footer';
import PostDisplay from './post_display';

import PostForm from '../components/forms/post/postForm';


function Home() {
  return (
    <div className='page__wrapper'>
      <Header />
      <main className='container-fluid bg-light'>
        <PostForm />
        <PostDisplay />
      </main>
      <Footer />
    </div>
  );
}

export default Home;