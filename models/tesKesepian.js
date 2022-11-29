const mongoose = require("mongoose");
const { Schema } = mongoose;

const teskesepianSchema = new Schema({
    soal: {
        type: String
      },
});

const teskesepian = mongoose.model("TesKesepian", teskesepianSchema);

module.exports = teskesepian;