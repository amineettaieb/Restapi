const express = require("express");
const app = express();
const UserRoutes=require("./routes/userRoutes")
require("dotenv").config({ path: "./config/.env" });
const port = process.env.PORT || 7000;
const connectdb = require("./config/conectDB");


//SETUP THE JSON MIDDLEWARE

app.use(express.json());

//CONNECT THE DATABASE

connectdb();

// START User CRUD

app.use("/users",UserRoutes)

// END User CRUD


// THE SERVER

app.listen(port, err =>
    err ? console.log(err) : console.log(`server is runnig on port ${port}`));
