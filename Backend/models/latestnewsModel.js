var mongoose = require('mongoose');
var latestnewsSchema = mongoose.Schema({
    news : {type:String},
    link :{type:String},  //Hyperlink
    status:{type:String,default:'Active'},

}, { 
    //timestamps: true
    timestamps: { createdAt: 'create_date', updatedAt: 'update_date' }
});

module.exports = mongoose.model('latestnewsModel', latestnewsSchema);