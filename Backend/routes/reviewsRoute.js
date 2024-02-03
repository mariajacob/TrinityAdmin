const express = require("express");
var router = express.Router();

const reviewsModel = require("../models/reviewsModel");
const adminAuth = require("../middlewares/adminAuth");

router.post('/reviews/form', adminAuth, async (req, res) => {
    try {

        var { name, designation, desc } = req.body;
        if (!name) {
            res.status(200).json({
                status: false,
                msg: 'invalid name'
            });
            return
        }
        if (!designation) {
            res.status(200).json({
                status: false,
                msg: 'Invalid Input'
            });
            return
        }
        if (!desc) {
            res.status(200).json({
                status: false,
                msg: 'Invalid Input'
            });
            return
        }
        await reviewsModel.create({ name: name, designation: designation, desc: desc, status: 'Active' });
        res.status(200).json({
            status: true,
            msg: 'Review Added Successfully'
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


router.get('/reviews/list', adminAuth, async (req, res) => {
    try {
        var reviewslist = await reviewsModel.find({ status:"Active"});
        if (reviewslist) {
            res.status(200).json({
                status: true,
                reviews: reviewslist,
                msg: "Reviews List"
            })
            return
        }
        res.status(200).json({
            status: false,
            msg: "Reviews not found"
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

router.post('/reviews/singleview', adminAuth, async (req, res) => {
    try {
        var { id } = req.body;
        var singlereview = await reviewsModel.findOne({ _id: id , status:"Active"});
        console.log(singlereview,"singlereview")
        if (singlereview) {
            res.status(200).json({
                status: true,
                review: singlereview,
                msg: "Single Review"
            })
            return
        }
        res.status(200).json({
            status: false,
            msg: "Review not found"
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
router.post('/reviews/update',adminAuth,async(req,res)=>{

    try {

        var {id, name, designation, desc} = req.body
        if(!id ){
            res.status(200).json({
                status: false,
                msg : "Invalid Id"
            })
            return
        }
        var reviewUpdate = await reviewsModel.findOne({ _id: id ,status:"Active" });
        if (reviewUpdate) {
            if(name)
                reviewUpdate.name = name
            if(designation)
                reviewUpdate.designation = designation
            if(desc)
                reviewUpdate.desc = desc
            await reviewUpdate.save()

            res.status(200).json({
                status: true,
                msg: "Review Updated Successfully"
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


router.post('/reviews/delete', adminAuth, async (req, res) => {
    try {
        var { id } = req.body;
        var review = await reviewsModel.findOne({ _id: id , status:"Active"});
        if (review) {
            review.status = "Deleted"
            await review.save()
            res.status(200).json({
                status: true,
                msg: "Review Deleted Successfully"
            })
            return
        }
        res.status(200).json({
            status: false,
            msg: "Review not found"
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