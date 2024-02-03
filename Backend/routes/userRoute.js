const express = require("express");
var router = express.Router();
var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
var defaults = require("../defaults")

var userModel =require('../models/userModel');
var tokenModel =require('../models/tokenModel');

var ifToken =require('../middlewares/ifToken');

//Create admin
router.post('/admin/add',async(req,res)=>{
    try{
        var {name,email,phone,password} = req.body;
        if (!name){
            res.status(200).json({
                status:false,
                msg:'invalid name'
            });
            return
        }
        if (!email){
            res.status(200).json({
                status:false,
                msg:'invalid email'
            });
            return
        }
        if (!phone){
            res.status(200).json({
                status:false,
                msg:'invalid phone'
            });
            return
        }
        if (!password){
            res.status(200).json({
                status:false,
                msg:'invalid password'
            });
            return
        }
        var phoneValidate = await userModel.findOne({phone:phone,status:'Active'})
        if (phoneValidate){
            res.status(200).json({
                status:false,
                msg:'Phone already Exists'
            });
            return
        }

        var emailVali = await userModel.findOne({email:email,status:'Active'})
        if (emailVali){
            res.status(200).json({
                status:false,
                msg:'Email already Exists'
            });
            return
        }

        var passwordHashed = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
        var user = new userModel()
        user.name = name;
        user.email = email;
        user.phone = phone;
        user.password = passwordHashed;
        await user.save()
        res.status(200).json({
            status:true,
            msg:'Sucess',
            data:user
        });
        return
    }
    catch(e){
        console.log(e)
        res.status(500).json({
            status:false,
            msg:'internal server errort'
        });
        return
    }
})

//login
router.post('/admin/login',async(req,res)=>{
    try{
        var {email,password} = req.body;
        if (!email){
            res.status(200).json({
                status:false,
                msg:'invalid email'
            });
            return
        } 
        if (!password){
            res.status(200).json({
                status:false,
                msg:'invalid password'
            });
            return
        }
        var user = await userModel.findOne({email: email,status:"Active"})
        if (!user){
        res.status(200).json({
            status:false,
            msg:'Invalid credentials....'
        })
        return
        }
        var result = await bcrypt.compare(password, user.password);
        if (result == false)
        {
            res.status(200).json({
                status:false,
                msg:'Invalid credentials'
            })
            return
        }
        const token = jwt.sign({
            id:user._id,
            role:user.role
        },defaults.token,{expiresIn:31536000})

        var newtoken = new tokenModel()
        newtoken.userid = user._id
        newtoken.token = token
        newtoken.status = 'active'
        await newtoken.save()

        user = JSON.parse(JSON.stringify(user))
        delete user.password;

        res.status(200).json({
            status:true,
            token:token,
            msg:'Sucess',
            data:user
        });
        return
    }
    catch(e){
        console.log(e)
        res.status(500).json({
            status:false,
            msg:'internal server errort'
        });
        return
    }
})

router.get('/validate/token',ifToken,async(req,res)=>{
    try{
        var { token } = req.headers;
        if(!token)
        {
            res.status(200).json({
                status:false,
                msg:'invalid token'
            });
            return
        }
        var tokenData =await jwt.verify(token,defaults.token)
        var validToken =await tokenModel.findOne({token:token,userid:tokenData.id})
        if(!validToken){
            res.status(200).json({
                status:false,
                msg:"Invalid Token"
            });
            return;
        }
        var userExists = await userModel.findOne({status:"Active",_id:tokenData.id})
        if(!userExists){
            res.status(200).json({
                status:false,
                msg:"Invalid user."
            });
            return;
        }
        res.status(200).json({
            status:true,
            msg:"Validated Sucessfully."
        });
        return;
    }catch(e){
        console.log(e)
        res.status(500).json({
            status:false,
            msg:'internal server errort'
        });
        return
    }
})

module.exports = router;
