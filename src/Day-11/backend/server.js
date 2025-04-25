const express = require("express");
const router = require("./routes/userRoutes");
const connectDB = require("./db/mongoDB");
require("dotenv").config();

const app = express();
app.use(express.json());

// db connection
connectDB();
const PORT = process.env.PORT || 8000;


app.get("/", (req, res) => {
    res.send("Backend is working");
})


// user login router
app.use("/api/user", router);

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is Ready at http://localhost:${PORT}`);
})
