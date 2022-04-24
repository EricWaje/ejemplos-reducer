import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <h2>useReducer</h2>
            <div>
                <ul>
                    <Link to="/">Counter</Link>
                    <Link to="/todo">TodoApp</Link>
                    <Link to="/character">Rick and Morty</Link>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
