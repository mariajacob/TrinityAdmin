var mongoose = require("mongoose");
var discoverSchema = mongoose.Schema({
    photo :{type:String},
    heading : {type:String},
    subheading : {type:String},
    point1 : {type:String},
    point2 : {type:String},
    point3 : {type:String},
    point4 : {type:String},
    status:{type:String,default:'Active'}
},
 { 
    //timestamps: true
    timestamps: { createdAt: 'create_date', updatedAt: 'update_date' }
});

module.exports = mongoose.model('discoverDetailsModel', discoverSchema);

  