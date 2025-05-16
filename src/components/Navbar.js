import React from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
    let location = useLocation();
    let navigate = useNavigate();

    // Get the username from localStorage
    const username = localStorage.getItem("username");

    // Logout function
    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        navigate("/login");
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">iNotebook</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
                        </li>
                    </ul>
                    <div className="d-flex">
                        {username ? (
                            <>
                                <span className="nav-link text-white">Welcome, {username}!</span>
                                <button className="btn btn-danger mx-1" onClick={handleLogout}>Logout</button>
                            </>
                        ) : (
                            <>
                                <Link className="btn btn-primary mx-1" to="/login">Login</Link>
                                <Link className="btn btn-primary mx-1" to="/signup">Signup</Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;