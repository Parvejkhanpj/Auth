require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");

// middleware
app.use(express.json());
app.use(cors());

// port

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listing on port ${port}`));

//database connection
connection();

// route
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
