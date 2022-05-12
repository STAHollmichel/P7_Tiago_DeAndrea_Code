import '../scss/App.scss';
import Nav from '../components/layout/nav';

function Account() {
  return (
    <div className="landingPage">
      <Nav />
      <div className="landingPage-banner">
        <h1>
          Compte Profile 
        </h1>
      </div>
    </div>
  );
}

export default Account;