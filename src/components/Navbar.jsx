import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <Link to="/">
                <h2>useReducer</h2>
            </Link>
            <div>
                <ul>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? 'activo' : null
                        }
                        to="/"
                    >
                        Counter
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? 'activo' : null
                        }
                        to="/todo"
                    >
                        TodoApp
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? 'activo' : null
                        }
                        to="/character"
                    >
                        Rick and Morty
                    </NavLink>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
