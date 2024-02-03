const express = require("express");
var router = express.Router();

const placementModel = require("../models/placementModel");
const adminAuth = require("../middlewares/adminAuth");

router.post('/placement/add', adminAuth, async (req, res) => {
    try {

        var { name, position, placedAt,placedDate } = req.body;
        if (!name) {
            res.status(200).json({
                status: false,
                msg: 'invalid name'
            });
            return
        }
        if (!position) {
            res.status(200).json({
                status: false,
                msg: 'Invalid Input in Position'
            });
            return
        }
        if (!placedAt) {
            res.status(200).json({
                status: false,
                msg: 'Invalid Input in Company'
            });
            return
        }
        if (!placedDate) {
            res.status(200).json({
                status: false,
                msg: 'Invalid Input in Company'
            });
            return
        }
        await placementModel.create({ name: name, position: position, placedAt: placedAt,placedDate: new Date(placedDate) });
        res.status(200).json({
            status: true,
            msg: 'Placement Information Added Successfully'
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


router.get('/placement/list', adminAuth, async (req, res) => {
    try {
        var placementlist = await placementModel.find({ status:"Active"});
        if (placementlist) {
            res.status(200).json({
                status: true,
                reviews: placementlist,
                msg: "List of students placed"
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

router.post('/placement/singleview', adminAuth, async (req, res) => {
    try {
        var { id } = req.body;
        var singleview = await placementModel.findOne({ _id: id , status:"Active"});
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
router.post('/placement/update',adminAuth,async(req,res)=>{

    try {

        var {id, name, placedAt, position,placedDate} = req.body
        if(!id){
            res.status(200).json({
                status: false,
                msg : "Invalid Id"
            })
        }
        var update = await placementModel.findOne({ _id: id ,status:"Active" });
        if (update) {
            if(name)
                update.name = name
            if(position)
                update.position = position
            if(placedAt)
                update.placedAt = placedAt
            if(placedDate)
                update.placedDate = placedDate
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


router.post('/placement/delete', adminAuth, async (req, res) => {
    try {
        var { id } = req.body;
        var placementDelete = await placementModel.findOne({ _id: id , status:"Active"});
        if (placementDelete) {
            placementDelete.status = "Deleted"
            await placementDelete.save()
            res.status(200).json({
                status: true,
                msg: "Placement Record Deleted Successfully"
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