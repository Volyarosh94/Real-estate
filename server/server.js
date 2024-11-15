const app = require('./app');
const connectDatabase = require('./config/database');
const cloudinary = require('cloudinary');

const {CLOUDINARY_API_SECRET, CLOUDINARY_API_KEY, CLOUDINARY_NAME, PORT} = require("./config/config");

if (process.env.NODE_ENV !== "production") {
    require("dotenv").config({ path: "backend/config/config.env" });
}

// UncaughtException Error
process.on('uncaughtException', (err) => {
    console.log(`Error: ${err.message}`);
    process.exit(1);
});


cloudinary.config({
    cloud_name: CLOUDINARY_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET,
});



(async () => {
    try {
        await connectDatabase();
        app.listen(PORT);
        console.log(`Server is running on ${PORT}`);
        console.log("Mongoose Connected")
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
})();



// Unhandled Promise Rejection
process.on('unhandledRejection', (err) => {
    console.log(`Error: ${err.message}`);
    server.close(() => {
        process.exit(1);
    });
});
