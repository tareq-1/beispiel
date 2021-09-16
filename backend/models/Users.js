const { Schema, model } = require('mongoose');

const usersSchema = new Schema({

    firstName: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    image: {
        type: String,
    }



}, { collection: 'userDB', versionKey: false });
module.exports = new model('users', usersSchema);