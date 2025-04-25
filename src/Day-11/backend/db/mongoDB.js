const mongoose = require("mongoose");

const connectDB = async (req, res) => {
    try {
        const response = await mongoose.connect(process.env.MONGO_URI);
        if (!response) throw new Error("Not Connected to db");
        console.log("connect to DB")
    } catch (error) {
        console.error(error.message)
        process.exit(1)
    }

}

module.exports = connectDB;