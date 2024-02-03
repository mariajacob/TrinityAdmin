var jwt = require("jsonwebtoken");
var defaults = require("../defaults")

var userModel = require('../models/userModel');
var tokenModel = require('../models/tokenModel');

module.exports = async function (req, res, next) {
    try {
        var token = req.headers.token || req.body.token || req.query.token;
        if (token) {
            var tokenData = await jwt.verify(token, defaults.token)
            if (tokenData) {
                req.user = tokenData;
                var validToken = await tokenModel.findOne({ token: token, userid: tokenData.id })
                if (!validToken) {
                    res.status(200).json({
                        status: false,
                        expired: true,
                        msg: "Invalid Token"
                    });
                    return;
                }
                var userExists = await userModel.findOne({ status: "Active", _id: tokenData.id })
                if(userExists.role!="Admin"){
                    res.status(200).json({
                        status:false,
                        expired:true,
                        msg:"Unauthorized Access........"
                    });
                    return
                }
                if (!userExists) {
                    res.status(200).json({
                        status: false,
                        expired: true,
                        msg: "Invalid User."
                    });
                    return;
                }
                req.user.user = userExists;
                console.log(userExists)
                next();
            }
            else {
                res.status(200).json({
                    status: false,
                    msg: "Access Denied"
                });
                return;
            }
        } else {
            res.status(200).json({
                status: false,
                expired: true,
                msg: "No token provided."
            });
            return;
        }
    } catch (e) {
        console.log(e)
        res.status(500).json({
            status: false,
            msg: 'internal server errort'
        });
        return
    }
}