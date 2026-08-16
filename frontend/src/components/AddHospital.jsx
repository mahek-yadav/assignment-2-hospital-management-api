import React, { useState } from "react";
import { addHospital } from "../api";

function AddHospital({ onHospitalAdded }) {

    const [formData, setFormData] = useState({
        name: "",
        city: "",
        totalBeds: "",
        availableBeds: ""
    });

    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            const hospital = {
                name: formData.name,
                city: formData.city,
                totalBeds: Number(formData.totalBeds),
                availableBeds: Number(formData.availableBeds)
            };

            await addHospital(hospital);

            setMessage("Hospital added successfully!");

            setFormData({
                name: "",
                city: "",
                totalBeds: "",
                availableBeds: ""
            });

            onHospitalAdded();

        } catch (error) {

            setMessage("Error adding hospital");

        }
    };

    return (
        <div className="form-container">

            <h2>Add Hospital</h2>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="name"
                    placeholder="Hospital Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleChange}
                    required
                />

                <input
                    type="number"
                    name="totalBeds"
                    placeholder="Total Beds"
                    value={formData.totalBeds}
                    onChange={handleChange}
                    required
                />

                <input
                    type="number"
                    name="availableBeds"
                    placeholder="Available Beds"
                    value={formData.availableBeds}
                    onChange={handleChange}
                    required
                />

                <button type="submit">
                    Add Hospital
                </button>

            </form>

            {message && <p>{message}</p>}

        </div>
    );
}

export default AddHospital;