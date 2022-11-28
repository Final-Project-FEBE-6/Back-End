const mongoose = require('mongoose');
const { Schema } = mongoose

const psikologSchema =  new Schema({ // membuat struktur data nya
    gambar: String,
    nama: String,
    alamat: String,
    gender: String,
    umur: String,
    pengalaman: String,
})

const Psikolog = mongoose.model("Psikolog", psikologSchema)

module.exports = Psikolog