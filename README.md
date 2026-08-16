# 🏥 Hospital Management System

A full-stack Hospital Management System built using **React.js, Node.js, Express.js, and MongoDB**.

The application allows users to register and log in, and provides complete CRUD functionality for managing hospitals, including hospital details, total beds, and available beds.

## 🌐 Live Project

🔗 **Live Website:** https://hospital-management-mahekyadav.netlify.app/

---

## ✨ Features

### 🔐 User Authentication
- User Registration
- User Login
- Password hashing using bcrypt
- Passport.js Local Strategy
- Session-based authentication
- Logout functionality

### 🏥 Hospital Management
- View all hospitals
- View individual hospital details
- Add a new hospital
- Update hospital information
- Delete a hospital
- Manage total and available beds

### 🗄️ Database
- MongoDB Atlas
- Mongoose for database interaction
- User and Hospital collections

---

## 🛠️ Technologies Used

### Frontend
- React.js
- JavaScript
- HTML
- CSS
- Fetch API

### Backend
- Node.js
- Express.js
- Passport.js
- Passport Local Strategy
- Express Session
- bcrypt.js
- CORS

### Database
- MongoDB Atlas
- Mongoose

### Deployment
- Netlify – Frontend
- Render – Backend
- MongoDB Atlas – Database

---

## 📁 Project Structure

```text
Hospital-Management-System/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── AddHospital.js
│   │   │   ├── HospitalList.js
│   │   │   ├── Login.js
│   │   │   └── Register.js
│   │   ├── App.js
│   │   ├── App.css
│   │   └── api.js
│   ├── package.json
│   └── ...
│
├── backend/
│   ├── config/
│   │   └── passport.js
│   ├── models/
│   │   ├── Hospital.js
│   │   └── User.js
│   ├── routes/
│   │   ├── hospitals.js
│   │   └── auth.js
│   ├── db.js
│   ├── server.js
│   ├── package.json
│   └── ...
│
└── README.md
