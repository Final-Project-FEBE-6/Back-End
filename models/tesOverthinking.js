const mongoose = require("mongoose");
const { Schema } = mongoose;

const tesoverthinkingSchema = new Schema({
    soal: {
        type: String
      },
});

const tesoverthinking = mongoose.model("TesOverthinking", tesoverthinkingSchema);

module.exports = tesoverthinking;