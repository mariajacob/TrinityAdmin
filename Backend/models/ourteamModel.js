var mongoose = require("mongoose");
var ourTeamSchema = mongoose.Schema({
    name : {type:String},
    designation :{type:String},
    profile_image : {type:String},
    board_type : {type:String},
    status:{type:String,default:'Active'}
},
 { 
    //timestamps: true
    timestamps: { createdAt: 'create_date', updatedAt: 'update_date' }
});

module.exports = mongoose.model('ourTeamModel', ourTeamSchema);