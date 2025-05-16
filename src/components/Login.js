import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const [error, setError] = useState(""); // ✅ Added error state
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(""); // Clear previous errors

        try {
            const response = await fetch("http://localhost:5000/api/auth/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: credentials.email,
                    password: credentials.password
                })
            });

            if (!response.ok) {
                throw new Error("Login failed! Check your credentials.");
            }

            const json = await response.json();
            console.log(json);

            if (json.success) {
                localStorage.setItem('token', json.authtoken);
                localStorage.setItem('username', json.name); // ✅ Store username for Navbar
                navigate("/");
            } else {
                setError(json.error || "Invalid credentials"); // ✅ Display API error
            }
        } catch (err) {
            setError(err.message);
        }
    };

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    return (
        <div className="container mt-3">
            <h2>Login to Your Account</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name="email" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password" required />
                </div>

                {error && <p className="text-danger">{error}</p>} {/* ✅ Show error message */}
                
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    );
};

export default Login;