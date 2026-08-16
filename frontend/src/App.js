import React, { useState } from "react";

import AddHospital from "./components/AddHospital";
import HospitalList from "./components/HospitalList";
import Login from "./components/Login";
import Register from "./components/Register";

import "./App.css";

function App() {

    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("user"))
    );

    const [showRegister, setShowRegister] = useState(false);

    const refreshHospitals = () => {
        window.location.reload();
    };

    const handleLogout = () => {
        localStorage.removeItem("user");
        setUser(null);
    };

    // User is not logged in
    if (!user) {

        return (
            <div className="app">

                <header>
                    <h1>Hospital Management System</h1>

                    <p>
                        Manage hospitals, beds and availability
                    </p>
                </header>

                <main>

                    {showRegister ? (

                        <>
                            <Register
                                onRegistered={() => setShowRegister(false)}
                            />

                            <button
                                onClick={() => setShowRegister(false)}
                            >
                                Already have an account? Login
                            </button>
                        </>

                    ) : (

                        <>
                            <Login onLogin={setUser} />

                            <button
                                onClick={() => setShowRegister(true)}
                            >
                                Don't have an account? Register
                            </button>
                        </>

                    )}

                </main>

            </div>
        );
    }

    // User is logged in
    return (
        <div className="app">

            <header>

                <h1>Hospital Management System</h1>

                <p>
                    Welcome, {user.username}
                </p>

                <button onClick={handleLogout}>
                    Logout
                </button>

            </header>

            <main>

                <AddHospital
                    onHospitalAdded={refreshHospitals}
                />

                <HospitalList />

            </main>

        </div>
    );
}

export default App;