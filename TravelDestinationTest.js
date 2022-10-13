const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const traveldestinationTestSchema = new Schema({
    country: {
        type: String
    },
    location: {
        type: String
    },
    periode: {
        type: String
    },
    description: {
        type: String
    }
});

module.exports = mongoose.model('traveldestinations',traveldestinationTestSchema)