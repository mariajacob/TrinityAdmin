var mongoose = require("mongoose");
var courseCategorySchema = mongoose.Schema({
    catName :{type:String},
    desc : {type:String},
    status:{type:String,default:'Active'}
},
 { 
    //timestamps: true
    timestamps: { createdAt: 'create_date', updatedAt: 'update_date' }
});

module.exports = mongoose.model('courseCategoryModel', courseCategorySchema);
