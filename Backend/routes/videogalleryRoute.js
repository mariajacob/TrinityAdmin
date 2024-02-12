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


router.get('/videogallery/list',adminAuth,async(req,res)=>{
    try {
        
        var list = await videoGalleryModel.find({status:'Active'})
        if(list){
            res.status(200).json({
                status:true,
                msg:"got all data",
                data:list
            })
            return
        }
        res.status(200).json({
            status:true,
            msg:"Error Data got lost"
        })
        return
       
    }  catch (e) {
        console.log("error in video gallery")
        res.status(500).json({
            status:false,
            msg:'internal server errort'
        });
        return;
    }
})


router.post('/videogallery/singleview',adminAuth,async(req,res)=>{
    try {
        var {id} = req.body
        if(!id){
            res.status(200).json({
                status:false,
                msg:"invalid id"
            })
            return
        }
        var view = await videoGalleryModel.findOne({_id:id,status:'Active'})
        if(view){
            res.status(200).json({
                status:true,
                msg:"got all data",
                data:view
            })
            return
        }
        res.status(200).json({
            status:true,
            msg:"Error Data got lost"
        })
        return
       
    }  catch (e) {
        console.log("error in video gallery")
        res.status(500).json({
            status:false,
            msg:'internal server errort'
        });
        return;
    }
})

//update
router.post('/videogallery/update',adminAuth,async(req,res)=>{

    try {

        var {id,title, desc, link} = req.body
        if(!id){
            res.status(200).json({
                status: false,
                msg : "Invalid Id"
            })
        }
        var update = await videoGalleryModel.findOne({ _id: id ,status:"Active" });
        if (update) {
            if(title)
                update.title = title
            if(desc)
                update.desc = desc
            if(link)
                update.link = link
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
            msg: 'internal server errort'
        });
        return
    }
})


router.post('/videogallery/delete', adminAuth, async (req, res) => {
    try {
        var { id } = req.body;
        var data = await videoGalleryModel.findOne({ _id: id , status:"Active"});
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