import React, { useState, useEffect } from 'react';
import link, { Link } from 'react-router-dom';
import './Navbar.css'

export default function Navbar() {

    const [toggleMenu, setToggleMenu] = useState(false)

    const [largeur, setLargeur] = useState(window.innerWidth);

    const toggleNav = () => {
        setToggleMenu(!toggleMenu);
    };

    useEffect(() => {

        const changeWidth = () => {
            setLargeur(window.innerWidth)
        }

        window.addEventListener('resize', changeWidth);

        return () => {
            window.removeEventListener('resize', changeWidth);
        }

    }, [])

    return (
        <div>
            <nav>
                {(toggleMenu || largeur > 500) && (
                    <ul className="liste">
                        <li className="items">
                            <Link to="/"> Accueil </Link>
                        </li>
                        <li className="items">
                            <Link to="/nouvelle-action"> Nouvelle action</Link>
                        </li>
                    </ul>
                )}
                <button onClick={toggleNav} className="btn">BTN</button>
            </nav>
        </div>
    );
}
