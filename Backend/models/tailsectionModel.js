var mongoose = require("mongoose");
var tailsectionSchema = mongoose.Schema({
    heading : {type:String},
    subheading : {type:String},
    status:{type:String,default:'Active'}
},
 { 
    //timestamps: true
    timestamps: { createdAt: 'create_date', updatedAt: 'update_date' }
});

module.exports = mongoose.model('tailsectionModel', tailsectionSchema);

  