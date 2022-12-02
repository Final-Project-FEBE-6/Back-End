const mongoose = require('mongoose');
const { Schema } = mongoose;

const artikelSchema = new Schema({
    judul: String,
    isi: String,
    image: String,
    tgl_publish: String,
    sumber: String,
    nama_sumber: String,
});

const artikel = mongoose.model('Artikel', artikelSchema);

module.exports = artikel;
