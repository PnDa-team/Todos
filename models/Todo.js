const { Schema, model } = require('mongoose');

const schema = new Schema({
    nazva: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
});

module.exports = model('Todo', schema);