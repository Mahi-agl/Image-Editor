const { Schema, model } = require('../connection');

const userSchema = new Schema({
    username : String,
    email : String,
    password : String,
    age : Number
});

module.exports = model('user', userSchema);