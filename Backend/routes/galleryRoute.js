const express = require("express");
var router = express.Router();

const adminAuth = require("../middlewares/adminAuth");
const videoGalleryModel = require("../models/videoGalleryModel");


router.post('/videogallery/add',adminAuth, async (req, res) => {
    try {

        var { title, desc, link } = req.body;
        if (!title) {
            res.status(200).json({
                status: false,
                msg: 'invalid Input for Video Title'
            });
            return;
        }
        if (!desc) {
            res.status(200).json({
                status: false,
                msg: 'invalid Input for Video Description'
            });
            return;
        }
        if (!link) {
            res.status(200).json({
                status: false,
                msg: 'Invalid Input for Video Link(url)'
            });
            return;
        }

        var newLink = await videoGalleryModel.create({ title: title, desc: desc, link:link });
        res.status(200).json({
            status: true,
            msg: 'Link Added Successfully',
            data: newLink
        })
        return;  


    } catch (e) {
        console.log("error in contactus")
        res.status(500).json({
            status:false,
            msg:'internal server errort'
        });
        return;
    }

})  

module.exports = router;