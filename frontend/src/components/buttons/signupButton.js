import React from 'react';

function inscrire() {
    const Sinscrire = () =>{
        console.log("inscrire");
    };
    return (
        <div>
            <button onClick={Sinscrire}>S'inscrire</button>
        </div>
    );
}

export default inscrire;