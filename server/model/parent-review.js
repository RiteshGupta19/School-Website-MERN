const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
    videourl: {
        type: String,
        required: true,
    },
}, { timestamps: true });

module.exports = mongoose.model('Parent_Review', videoSchema);
