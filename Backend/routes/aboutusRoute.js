const express = require("express");
var router = express.Router();

const adminAuth = require("../middlewares/adminAuth");
const aboutusModel = require("../models/aboutusModel");

router.post('/aboutus/add', adminAuth, async (req, res) => {
    try {

        var { heading, aboutus, vision,mission} = req.body;
        if (!heading) {
            res.status(200).json({
                status: false,
                msg: 'invalid Heading'
            });
            return
        }
        if (!aboutus) {
            res.status(200).json({
                status: false,
                msg: 'Invalid Input for aboutus'
            });
            return
        }
        if (!vision) {
            res.status(200).json({
                status: false,
                msg: 'Invalid Input in vision'
            });
            return
        }
        if (!mission) {
            res.status(200).json({
                status: false,
                msg: 'Invalid Input in mission'
            });
            return
        }
        await aboutusModel.create({ heading: heading, aboutus: aboutus, vision: vision,mission: mission });
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


router.get('/aboutus/list', adminAuth, async (req, res) => {
    try {
        var list = await aboutusModel.find({ status:"Active"});
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

router.post('/aboutus/singleview', adminAuth, async (req, res) => {
    try {
        var { id } = req.body;
        var singleview = await aboutusModel.findOne({ _id: id , status:"Active"});
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
router.post('/aboutus/update',adminAuth,async(req,res)=>{

    try {

        var {id,heading, aboutus, vision,mission} = req.body
        if(!id){
            res.status(200).json({
                status: false,
                msg : "Invalid Id"
            })
        }
        var update = await aboutusModel.findOne({ _id: id ,status:"Active" });
        if (update) {
            if(heading)
                update.heading = heading
            if(aboutus)
                update.aboutus = aboutus
            if(vision)
                update.vision = vision
            if(mission)
                update.mission = mission
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


router.post('/aboutus/delete', adminAuth, async (req, res) => {
    try {
        var { id } = req.body;
        var data = await aboutusModel.findOne({ _id: id , status:"Active"});
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