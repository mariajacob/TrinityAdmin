const express = require("express");
var router = express.Router();
const adminAuth = require("../middlewares/adminAuth");
const latestnewsModel = require("../models/latestnewsModel");




//Latest News
router.post('/latestnews', adminAuth, async (req, res) => {

    try {
        var { news, link } = req.body;
        if (!news) {
            res.status(200).json({
                status: false,
                msg: "field invalid"
            })
            return
        }
        if (!link) {
            res.status(200).json({
                status: false,
                msg: "field invalid"
            })
            return
        }
        var latestnews = new latestnewsModel()
        latestnews.news = news
        latestnews.link = link
        latestnews.save()

        res.status(200).json({
            status: true,
            msg: "Added Successfully"
        })
        return
    }
    catch (e) {
        console.log("error")
    }
})


router.get('/latestnews/list', adminAuth, async (req, res) => {

    try {
        var lnews = await latestnewsModel.find({status:'Active'})
        res.status(200).json({
            status: true,
            list: lnews
        })

    } catch (e) {
        console.log('err')
    }
})

router.post('/latestnews/singleview', adminAuth, async (req, res) => {

    try {

        var { id } = req.body;
        var news = await latestnewsModel.findOne({ _id: id })
        if (!news) {
            res.status(200).json({
                status: false,
                msg: "No news"
            })
            return
        }
        res.status(200).json({
            status: true,
            list: news
        })
        return

    } catch (e) {
        console.log('err')
    }
})

router.post('/latestnews/edit', adminAuth, async(req, res)=>{

    try {
        var { id, news, link } = req.body
        if (!news && !link)
        {
            res.status(200).json({
                status: false,
                msg : "invalid(Enter Data)"
            })
        }
        var updatenews =await latestnewsModel.findOne({_id:id})
        if(updatenews){
            updatenews.news = news
            updatenews.link = link
            await updatenews.save()
            res.status(200).json({
                status: true,
                msg : "Value Updated Successfully"
            });
            return;
        }
        res.status(200).json({
            status:false,
            msg:"Cant update....."
        });
        return;
    }
    catch (e) {
        console.log(e)
    }
})


router.post('/latestnews/delete',adminAuth, async(req,res)=>{
    var { id } = req.body
    var deletenews = await latestnewsModel.findOne({_id:id})
    if(deletenews){
        deletenews.status = 'Deleted'
        await deletenews.save()
        res.status(200).json({
            status: true,
            msg : "News deleted Successfully....."
        })
        return;
    }
    res.status(200).json({
        status: false,
        msg : "Invalid News Reference...."
    })
    return;
})


module.exports = router;