const orderRouter = require('./orderRoute');
const paymentRouter = require('./paymentRoute');
const productRouter = require('./productRoute');
const userRouter = require('./userRoute');
const express = require("express");
const router = express.Router();

module.exports = {
    router,
    orderRouter,
    paymentRouter,
    productRouter,
    userRouter
}

// module.exports = router;
