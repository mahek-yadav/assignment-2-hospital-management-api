import React, { useState } from "react";
import { loginUser } from "../api";

function Login({ onLogin }) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const data = await loginUser({
                username,
                password
            });

            localStorage.setItem("user", JSON.stringify(data.user));

            onLogin(data.user);

        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="auth-container">

            <h2>Login</h2>

            {error && <p>{error}</p>}

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <button type="submit">
                    Login
                </button>

            </form>

        </div>
    );
}

export default Login;