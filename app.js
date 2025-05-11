const express = require("express");
const app = express();
const helmet = require("helmet");
const cors = require("cors");
const authRoutes = require("./router/auth");

app.use(express.json());
app.use(helmet());
app.use(cors());
// app.use(express.urlencoded({ extended: true }));

//Routing 
app.use("/api/v1", authRoutes);

module.exports = app;
