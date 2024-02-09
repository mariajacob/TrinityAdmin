var mongoose = require("mongoose");
var videoGallerySchema = mongoose.Schema({
    title : {type:String},
    desc :{type:String},
    link : {type:String},
    status:{type:String,default:'Active'}
},
 { 
    //timestamps: true
    timestamps: { createdAt: 'create_date', updatedAt: 'update_date' }
});

module.exports = mongoose.model('videoGalleryModel', videoGallerySchema);