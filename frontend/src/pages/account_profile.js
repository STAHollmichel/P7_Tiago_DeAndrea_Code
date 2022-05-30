import '../App.scss';

import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios";


import Footer from '../components/layout/footer';
import Header from '../components/layout/header';

import logoImage from '../components/images/icon.svg';

function AccountProfile() { 

    // const params = useParams();

    const [user, setUser] = useState([]);

    useEffect(() => {

        axios
            .get("http://localhost:3000/api/auth/:userId",)
            .then((res) => {
                console.log(res);
                setUser(res.data);
            })
            .catch((err) => console.log(err));
    }, []);


    if(user) {
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
                                <h2>{user.firstName}</h2>
                                <p>{user.age}</p>
                                <button className='btn btn-primary'>Editer le profile</button>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }
}







export default AccountProfile;

