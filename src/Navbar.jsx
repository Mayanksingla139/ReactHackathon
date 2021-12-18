import React from "react";
import { Link } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Navbar = () =>{
    return(
        <>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <Link className="nav-link" to='/'>Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/peopletofollow'>People to follow</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/youtube'>Youtube Info</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/blog'>Blog</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/books'>Books</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/clubroom'>Club House Room</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/community'>Communities</Link>
                </li>
            </ul>
        </>
    );
};

export default Navbar;
