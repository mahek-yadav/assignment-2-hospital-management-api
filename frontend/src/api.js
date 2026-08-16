const API_URL = "https://assignment2-hospitalmanagement.onrender.com";


export const getHospitals = async () => {
    const response = await fetch(`${API_URL}/hospitals`);

    if (!response.ok) {
        throw new Error("Failed to fetch hospitals");
    }

    return response.json();
};


export const addHospital = async (hospital) => {
    const response = await fetch(`${API_URL}/hospitals`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(hospital)
    });

    if (!response.ok) {
        throw new Error("Failed to add hospital");
    }

    return response.json();
};


export const updateHospital = async (id, hospital) => {
    const response = await fetch(`${API_URL}/hospitals/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(hospital)
    });

    if (!response.ok) {
        throw new Error("Failed to update hospital");
    }

    return response.json();
};


export const deleteHospital = async (id) => {
    const response = await fetch(`${API_URL}/hospitals/${id}`, {
        method: "DELETE"
    });

    if (!response.ok) {
        throw new Error("Failed to delete hospital");
    }

    return response.json();
};

export const registerUser = async (user) => {
    const response = await fetch(`${API_URL}/auth/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Registration failed");
    }

    return data;
};


export const loginUser = async (user) => {
    const response = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify(user)
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Login failed");
    }

    return data;
};