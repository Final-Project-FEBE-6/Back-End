const mongoose = require("mongoose");
const { Schema } = mongoose;

const tesstressSchema = new Schema({
    soal: {
        type: String
      },
});

const tesstress = mongoose.model("TesStress", tesstressSchema);

module.exports = tesstress;