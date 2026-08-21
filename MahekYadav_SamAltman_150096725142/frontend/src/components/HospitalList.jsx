import React, { useEffect, useState } from "react";
import {
    getHospitals,
    deleteHospital,
    updateHospital
} from "../api";

function HospitalList() {

    const [hospitals, setHospitals] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchHospitals = async () => {

        try {

            const data = await getHospitals();

            setHospitals(data);

        } catch (error) {

            console.log("Error:", error);

        } finally {

            setLoading(false);

        }
    };


    useEffect(() => {

        fetchHospitals();

    }, []);


    const handleDelete = async (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this hospital?"
        );

        if (!confirmDelete) {
            return;
        }

        try {

            await deleteHospital(id);

            fetchHospitals();

        } catch (error) {

            console.log("Error deleting hospital:", error);

        }
    };


    const handleUpdate = async (hospital) => {

        const newName = window.prompt(
            "Enter new hospital name:",
            hospital.name
        );

        if (!newName) {
            return;
        }

        try {

            await updateHospital(hospital._id, {
                ...hospital,
                name: newName
            });

            fetchHospitals();

        } catch (error) {

            console.log("Error updating hospital:", error);

        }
    };


    if (loading) {

        return <p>Loading hospitals...</p>;

    }


    return (

        <div className="hospital-container">

            <h2>Hospital List</h2>

            {hospitals.length === 0 ? (

                <p>No hospitals found.</p>

            ) : (

                <div className="hospital-grid">

                    {hospitals.map((hospital) => (

                        <div
                            className="hospital-card"
                            key={hospital._id}
                        >

                            <h3>{hospital.name}</h3>

                            <p>
                                <strong>City:</strong>{" "}
                                {hospital.city}
                            </p>

                            <p>
                                <strong>Total Beds:</strong>{" "}
                                {hospital.totalBeds}
                            </p>

                            <p>
                                <strong>Available Beds:</strong>{" "}
                                {hospital.availableBeds}
                            </p>

                            <div className="buttons">

                                <button
                                    onClick={() =>
                                        handleUpdate(hospital)
                                    }
                                >
                                    Edit
                                </button>

                                <button
                                    onClick={() =>
                                        handleDelete(hospital._id)
                                    }
                                >
                                    Delete
                                </button>

                            </div>

                        </div>

                    ))}

                </div>

            )}

        </div>

    );
}

export default HospitalList;
