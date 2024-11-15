const mongoose = require("mongoose");
const {MONGO_URI} = require("../config/config");

const connectDatabase = () => {
    mongoose
        .connect(MONGO_URI)
        .then(() => {
            console.log("Mongoose Connected");
        })
        .catch((err) => {
            console.log("Mongoose Connection Error", err);
        });
};

module.exports = connectDatabase;
