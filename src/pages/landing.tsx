import React from 'react';
import '../style/pages/landing.css';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import logo from '../img/Logo.svg';

function Landing() {
    return (

        <div id="page-landing">
    <div className="content-wrap">
        <img src={logo} alt="Happy" />
        
        <main>
        <h1>Leve Felicidade Para o Mundo</h1>
        <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <div className="location">
        <strong>Cosmópolis</strong>
        <span>São Paulo</span>
        </div>

        <Link to="/app" className="enter-app">
        <FiArrowRight size={26} color="rgba(0,0,0,0.6)" />
        </Link>
</div>
    </div>

    );
}

export default Landing;
