var mongoose = require("mongoose");
var reviewSchema = mongoose.Schema({
    name : {type:String},
    designation :{type:String},
    photo : {type:String},
    desc: {type:String}, 
    status:{type:String,default:'Active'}
},
 { 
    //timestamps: true
    timestamps: { createdAt: 'create_date', updatedAt: 'update_date' }
});

module.exports = mongoose.model('reviewsModel', reviewSchema);