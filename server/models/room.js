let mongoose = require('mongoose');

// create a model class
let contactSchema = mongoose.Schema({
    CourseCode: String,
    Building: String,
    Room: String,
    Day: String,
    TimeStart: String,
    TimeEnd: String
},
{
    collection: "current"
});

module.exports = mongoose.model('room', contactSchema);
