const express = require("express");
var router = express.Router();

const placementModel = require("../models/discoverDetailsModel");
const adminAuth = require("../middlewares/adminAuth");
const discoverDetailsModel = require("../models/discoverDetailsModel");

router.post('/discoversection/add', adminAuth, async (req, res) => {
    try {

        var { heading, subheading, point1,point2,point3,point4} = req.body;
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
        if (!point1) {
            res.status(200).json({
                status: false,
                msg: 'Invalid Input in Company'
            });
            return
        }
        if (!point2) {
            res.status(200).json({
                status: false,
                msg: 'Invalid Input in Company'
            });
            return
        }
        if (!point3) {
            res.status(200).json({
                status: false,
                msg: 'Invalid Input in Company'
            });
            return
        }
        if (!point4) {
            res.status(200).json({
                status: false,
                msg: 'Invalid Input in Company'
            });
            return
        }
        await discoverDetailsModel.create({ heading: heading, subheading: subheading, point1: point1,point2: point3,point4:point4 });
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


router.get('/discoversection/list', adminAuth, async (req, res) => {
    try {
        var list = await discoverDetailsModel.find({ status:"Active"});
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

router.post('/discoversection/singleview', adminAuth, async (req, res) => {
    try {
        var { id } = req.body;
        var singleview = await discoverDetailsModel.findOne({ _id: id , status:"Active"});
        if (singleview) {
            res.status(200).json({
                status: true,
                review: singleview,
                msg: "Single Student Record"
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
router.post('/discoversection/update',adminAuth,async(req,res)=>{

    try {

        var {id, heading, subheading, point1,point2,point3,point4} = req.body
        if(!id){
            res.status(200).json({
                status: false,
                msg : "Invalid Id"
            })
        }
        var update = await discoverDetailsModel.findOne({ _id: id ,status:"Active" });
        if (update) {
            if(heading)
                update.heading = heading
            if(subheading)
                update.subheading = subheading
            if(point1)
                update.point1 = point1
            if(point3)
                update.point3 = point3
            if(point2)
                update.point2 = point2
            if(point4)
                update.point4 = point4
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


router.post('/discoversection/delete', adminAuth, async (req, res) => {
    try {
        var { id } = req.body;
        var data = await discoverDetailsModel.findOne({ _id: id , status:"Active"});
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