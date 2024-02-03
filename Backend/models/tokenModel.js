var mongoose = require('mongoose');
var TokenSchema = mongoose.Schema({
    userid: {
        type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'
    },
    token: {
        type: String
    },
    status: {
        type: String,
        default: 'active' //loggedout
    },
    createddate:  { type: Date, default: Date.now , expires: 31536000}
});

module.exports = mongoose.model('TokenModel', TokenSchema);