var mongoose = require("mongoose")
var userSchema = mongoose.Schema({
    role: {type:String, default:'Admin'},
    name : {type:String},
    email:{type:String},
    phone :{type: String},
    password:{type: String},
    gender:{type:String},
    dob:{type:Date},
    profilePic: {type:String},
    status:{type:String,default:'Active'},

}, { 
    //timestamps: true
    timestamps: { createdAt: 'create_date', updatedAt: 'update_date' }
});

var User = module.exports = mongoose.model('UserModel', userSchema);
module.exports.get = function (callback, limit) {
    User.find(callback).limit(limit);
}