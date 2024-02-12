const express = require("express");
var router = express.Router();

const adminAuth = require("../middlewares/adminAuth");
const ourteamModel = require("../models/ourteamModel");


router.post('/ourteam/add', adminAuth, async (req, res) => {
    try {

        var { name, designation, board_type } = req.body;
        if (!name) {
            res.status(200).json({
                status: false,
                msg: 'invalid Input for Video Title'
            });
            return;
        }
        if (!designation) {
            res.status(200).json({
                status: false,
                msg: 'invalid Input for Video Description'
            });
            return;
        }
        if (!board_type) {
            res.status(200).json({
                status: false,
                msg: 'Invalid Input for Video Link(url)'
            });
            return;
        }

        var newMember = await ourteamModel.create({ name: name, designation: designation, board_type: board_type });
        res.status(200).json({
            status: true,
            msg: 'New Member Added Successfully',
            data: newMember
        })
        return;


    } catch (e) {
        console.log("error in contactus")
        res.status(500).json({
            status: false,
            msg: 'internal server error'
        });
        return;
    }

})


router.get('/ourteam/list', adminAuth, async (req, res) => {
    try {

       var list = await ourteamModel.aggregate([
        {$match:{status:"Active"}},
            {
                
                $group: {
                    _id: "$board_type",
                    members: { $push: "$$ROOT" }
                }
            }
        ])
        console.log(list)
        if (list) {
            res.status(200).json({
                status: true,
                msg: "got all data",
                data: list
            })
            return
        }
        res.status(200).json({
            status: false,
            msg: "Error Data got lost"
        })
        return

    } catch (e) {
        console.log(e)
        res.status(500).json({
            status: false,
            msg: 'internal server error'
        });
        return;
    }
})


router.post('/ourteam/singleview', adminAuth, async (req, res) => {
    try {
        var { id } = req.body
        if (!id) {
            res.status(200).json({
                status: false,
                msg: "invalid id"
            })
            return
        }
        var view = await ourteamModel.findOne({ _id: id, status: 'Active' })
        if (view) {
            res.status(200).json({
                status: true,
                msg: "got all data",
                data: view
            })
            return
        }
        res.status(200).json({
            status: true,
            msg: "Error Data got lost"
        })
        return

    } catch (e) {
        console.log(e)
        res.status(500).json({
            status: false,
            msg: 'internal server error'
        });
        return;
    }
})

//update
router.post('/ourteam/update', adminAuth, async (req, res) => {

    try {

        var { id, name, designation, board_type } = req.body
        if (!id) {
            res.status(200).json({
                status: false,
                msg: "Invalid Id"
            })
        }
        var update = await ourteamModel.findOne({ _id: id, status: "Active" });
        if (update) {
            if (name)
                update.name = name
            if (designation)
                update.designation = designation
            if (board_type)
                update.board_type = board_type
            await update.save()

            res.status(200).json({
                status: true,
                msg: "Updated Successfully"
            })
            return
        }
        res.status(200).json({
            status: false,
            msg: "Invalid Record"
        })
        return
    } catch (e) {
        console.log(e)
        res.status(500).json({
            status: false,
            msg: 'internal server error'
        });
        return
    }
})


router.post('/ourteam/delete', adminAuth, async (req, res) => {
    try {
        var { id } = req.body;
        var data = await ourteamModel.findOne({ _id: id, status: "Active" });
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
            msg: 'internal server error'
        });
        return
    }
})


module.exports = router;