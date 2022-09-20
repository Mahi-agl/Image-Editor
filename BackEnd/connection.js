const mongoose = require('mongoose');

const db = 'mini-project';
const dbUr1 = `mongodb+srv://Mahi:7393907454@cluster0.we9qaqi.mongodb.net/${db}?retryWrites=true&w=majority`



// Asynchronous(simultaniousley) Vs Synchronous(one by one)
mongoose.connect(dbUr1)
.then((result) => {
    console.log('database connected');

}).catch((err) => {
    console.log(err);
});

module.exports = mongoose;
