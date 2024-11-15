const mongoose = require("mongoose");
const Fawn = require("fawn");
const {MONGO_URI} = require("../../config/config");
const {} = require("../config/config");


module.exports = () => {
  const self = module.exports;
  mongoose
    .connect(MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    .then(() => console.log("DB Connected"))
    .catch((err) => {
      console.error(
        "Failed to connect to the database on startup - retrying in 5 sec"
      );
      setTimeout(self, 5000);
    });
  return Fawn.init(mongoose, TRANS_COLL);
};
