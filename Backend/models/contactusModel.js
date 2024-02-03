var mongoose = require('mongoose');
var contactusSchema = mongoose.Schema({
    name : {type:String},
    email:{type:String},
    quali:{type:String},
    inCourse: {type:String}, //interested  course
    institute: {type:String},
    status:{type:String,default:'Active'},

}, { 
    //timestamps: true
    timestamps: { createdAt: 'create_date', updatedAt: 'update_date' }
});

module.exports = mongoose.model('contactusModel', contactusSchema);