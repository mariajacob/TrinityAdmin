var mongoose = require("mongoose");
var placementSchema = mongoose.Schema({
    name : {type:String},
    photo :{type:String},
    position : {type:String},
    placedAt : {type:String},
    placedDate: {type:Date}, 
    status:{type:String,default:'Active'}
},
 { 
    //timestamps: true
    timestamps: { createdAt: 'create_date', updatedAt: 'update_date' }
});

module.exports = mongoose.model('placementModel', placementSchema);

