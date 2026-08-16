require("dotenv").config();

const express = require("express");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");

const connectDB = require("./db");
const hospitalRoutes = require("./routes/hospitals");
const authRoutes = require("./routes/auth");

const app = express();

connectDB();

// CORS
app.use(cors({
    origin: [
        "http://localhost:3000",
        "http://localhost:5173",
        "https://hospital-management-mahekyadav.netlify.app"
    ],
    credentials: true
}));

app.use(express.json());

// Session
app.use(
    session({
        secret: process.env.SESSION_SECRET || "hospital-secret",
        resave: false,
        saveUninitialized: false
    })
);

// Passport
app.use(passport.initialize());
app.use(passport.session());

require("./config/passport")(passport);

// Home route
app.get("/", (req, res) => {
    res.json({
        message: "Hospital API is running"
    });
});

// Routes
app.use("/auth", authRoutes);
app.use("/hospitals", hospitalRoutes);

// Port
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});