import '../App.scss';


import { useState, useEffect } from "react";
import axios from "axios";


import Footer from '../components/layout/footer';
import Header from '../components/layout/header';

import logoImage from '../components/images/icon.svg';
import SignUpFormModify from '../components/forms/signUpFormModify';

function AccountProfile() { 

    // const params = useParams();

    const [user, setUser] = useState({});
    const [modify, setModify] =useState(false)

    const toggleModify = () => {

       if(modify)
        setModify(!modify)
    }

    useEffect(() => {

        axios
            .get("http://localhost:3000/api/auth/")
            .then((res) => {
                console.log(res);
                setUser(res.data.user);
            })
            .catch((err) => console.log(err));
    }, []);

        return (
            <div className='page__wrapper'>
                <Header />
                <main className='container-fluid bg-light'>
                    <div className='container py-4'>
                        <div className='card mb-3'>
                            <picture>
                                <img src={logoImage} className='card-img-top' alt="Profile"/>
                            </picture>
                            <div className='card-body text-center'>
                                <h1>Hello</h1>
                                <h2>{user.firstName} {user.lastName}</h2>
                                <p>{user.age}</p>
                                <p>{user.profession}</p>
                                <p>{user.bio}</p>
                                <button onClick={toggleModify} className='btn btn-primary'>Editer le profile</button>
                            </div>
                            <SignUpFormModify modify={modify} />
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        );

}







export default AccountProfile;

