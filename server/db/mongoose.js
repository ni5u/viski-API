
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://henriuser:henriuserwhiskeyboy@cluster0-l0rpu.mongodb.net/test?retryWrites=true');


module.exports = {
    mongoose
}