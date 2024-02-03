const express = require("express");
var router = express.Router();

const adminAuth = require("../middlewares/adminAuth");
const tailsectionModel = require("../models/tailsectionModel");

router.post('/tailsection/add', adminAuth, async (req, res) => {
    try {

        var { heading, subheading} = req.body;
        if (!heading) {
            res.status(200).json({
                status: false,
                msg: 'invalid Heading'
            });
            return
        }
        if (!subheading) {
            res.status(200).json({
                status: false,
                msg: 'Invalid Input in Position'
            });
            return
        }
        await tailsectionModel.create({ heading: heading, subheading: subheading});
        res.status(200).json({
            status: true,
            msg: 'Data Added Successfully'
        })
        return
    } catch (e) {
        console.log("error in contactus")
        res.status(500).json({
            status: false,
            msg: 'internal server errort'
        });
        return
    }
})


router.get('/tailsection/list', adminAuth, async (req, res) => {
    try {
        var list = await tailsectionModel.find({ status:"Active"});
        if (list) {
            res.status(200).json({
                status: true,
                reviews: list,
                msg: "Successful"
            })
            return
        }
        res.status(200).json({
            status: false,
            msg: "Records not found"
        })
    } catch (e) {
        console.log(e)
        res.status(500).json({
            status: false,
            msg: 'internal server errort'
        });
        return
    }
})

router.post('/tailsection/singleview', adminAuth, async (req, res) => {
    try {
        var { id } = req.body;
        var singleview = await tailsectionModel.findOne({ _id: id , status:"Active"});
        if (singleview) {
            res.status(200).json({
                status: true,
                review: singleview,
                msg: "Single  Record"
            })
            return
        }
        res.status(200).json({
            status: false,
            msg: "Record not found"
        })
        return
    } catch (e) {
        console.log(e)
        res.status(500).json({
            status: false,
            msg: 'internal server errort'
        });
        return
    }
})

//update
router.post('/tailsection/update',adminAuth,async(req,res)=>{

    try {

        var {id, heading, subheading} = req.body
        if(!id){
            res.status(200).json({
                status: false,
                msg : "Invalid Id"
            })
        }
        var update = await tailsectionModel.findOne({ _id: id ,status:"Active" });
        if (update) {
            if(heading)
                update.heading = heading
            if(subheading)
                update.subheading = subheading
            await update.save()

            res.status(200).json({
                status: true,
                msg: "Data Updated Successfully"
            })
            return
        }
        res.status(200).json({
            status: false,
            msg: "No Record Found"
        })
        return
    } catch (e) {
        console.log(e)
        res.status(500).json({
            status: false,
            msg: 'internal server errort'
        });
        return
    }
})


router.post('/tailsection/delete', adminAuth, async (req, res) => {
    try {
        var { id } = req.body;
        var data = await tailsectionModel.findOne({ _id: id , status:"Active"});
        if (data) {
            data.status = "Deleted"
            await data.save()
            res.status(200).json({
                status: true,
                msg: "Record Deleted Successfully"
            })
            return
        }
        res.status(200).json({
            status: false,
            msg: "Record not found"
        })
        return
    } catch (e) {
        console.log(e)
        res.status(500).json({
            status: false,
            msg: 'internal server errort'
        });
        return
    }
})

module.exports = router;