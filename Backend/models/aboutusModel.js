var mongoose = require("mongoose");
var aboutusSchema = mongoose.Schema({
    photo :{type:String},
    heading : {type:String},
    aboutus : {type:String},
    vision : {type:String},
    mission : {type:String},
    status:{type:String,default:'Active'}
},
 { 
    //timestamps: true
    timestamps: { createdAt: 'create_date', updatedAt: 'update_date' }
});

module.exports = mongoose.model('aboutusModel', aboutusSchema);

  