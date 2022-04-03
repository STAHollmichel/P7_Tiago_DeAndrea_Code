import React from 'react';

function Connectez() {
    const connectezVous = () =>{
        console.log("Connectez");
    };
    return (
        <div>
            <button onClick={connectezVous}>Connectez-vous</button>
        </div>
    );
}

export default Connectez;