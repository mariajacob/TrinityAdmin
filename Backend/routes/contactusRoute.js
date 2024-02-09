const express = require("express");
var router = express.Router();

const contactusModel = require("../models/contactusModel");
const adminAuth = require("../middlewares/adminAuth");

router.post('/contactus/form', async (req, res) => {
    try {

        var { name, email, quali, course, institute } = req.body;
        if (!name) {
            res.status(200).json({
                status: false,
                msg: 'invalid name'
            });
            return
        }
        if (!email) {
            res.status(200).json({
                status: false,
                msg: 'invalid email'
            });
            return
        }
        if (!quali) {
            res.status(200).json({
                status: false,
                msg: 'Invalid Qaulification Selected'
            });
            return
        }
        if (!course) {
            res.status(200).json({
                status: false,
                msg: 'Invalid Course Name Selected'
            });
            return
        }
        if (!institute) {
            res.status(200).json({
                status: false,
                msg: 'Invalid Institute Selected'
            });
            return
        }

        await contactusModel.create({ name:name, email:email, quali:quali, inCourse:course, institute:institute});
        res.status(200).json({
            status: true,
            msg: 'Got all inputs and Added Successfully'
        })
        return
        


    } catch (e) {
        console.log("error in contactus")
        res.status(500).json({
            status:false,
            msg:'internal server errort'
        });
        return
    }

})



router.get('/contactus/list',adminAuth, async(req,res)=>{

    try {
        var formvalues = await contactusModel.find()
        res.status(200).json({
            status:true,
            list: formvalues
        })

    } catch (e) {
        console.log('err')
    }
})


router.post('/contactus/singleview',adminAuth, async(req,res)=>{

    try {

        var {id} = req.body;
        var formvalue = await contactusModel.findOne({_id:id})
        if (!formvalue){
            res.status(200).json({
                status:false,
                msg:"invalid id"
            })
            return
        }
        res.status(200).json({
            status:true,
            list: formvalue
        })
        return

    } catch (e) {
        console.log('err')
    }
})





module.exports = router;