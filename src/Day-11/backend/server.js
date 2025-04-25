const express = require("express");
const router = require("./routes/userRoutes");
const connectDB = require("./db/mongoDB");
const cors = require("cors")
require("dotenv").config();
const bodyParser = require("body-parser")

const app = express();
app.use(bodyParser.json());


// db connection
connectDB();
const PORT = process.env.PORT || 8000;

app.use(cors());

app.get("/", (req, res) => {
    res.send("Backend is working");
})


// user login router
app.use("/api/user", router);

app.listen(PORT, () => {
    console.log(`Server is Ready at http://localhost:${PORT}`);
})
