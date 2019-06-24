
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('db url');


module.exports = {
    mongoose
}