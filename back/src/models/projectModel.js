const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let projectSchema = new Schema ({
    adress: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    description:  {
        type: String,
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Project', projectSchema);
