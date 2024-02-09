const express = require("express");
var router = express.Router();

const courseCategoryModel = require("../models/courseCategoryModel");
const courseModel = require("../models/courseModel");
const adminAuth = require("../middlewares/adminAuth");

//Add Course Category
router.post('/category/addcoursecategory', adminAuth, async (req, res) => {
    try {
        var { catName, desc } = req.body;
        if (!catName) {
            res.status(200).json({
                status: false,
                msg: 'invalid catName'
            });
            return
        }
        if (!desc) {
            res.status(200).json({
                status: false,
                msg: 'Invalid Input for Description'
            });
            return
        }
        await courseCategoryModel.create({ catName: catName, desc: desc });
        res.status(200).json({
            status: true,
            msg: 'New Course Category Added Successfully'
        })
        return


    } catch (e) {
        console.log("Category Not Added to the database")
        res.status(500).json({
            status: false,
            msg: 'internal server errort'
        });
        return
    }


})

//List Course Category
router.get('/category/list', adminAuth, async (req, res) => {
    try {
        var list = await courseCategoryModel.find({ status: "Active" });
        if (list) {
            res.status(200).json({
                status: true,
                reviews: list,
                msg: "Returned All Course Cats"
            })
            return
        }
        res.status(200).json({
            status: false,
            msg: "Categories not found"
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

//Single Category View
router.post('/category/singleview', adminAuth, async (req, res) => {
    try {
        var { id } = req.body;
        var singleview = await courseCategoryModel.findOne({ _id: id, status: "Active" });
        if (singleview) {
            res.status(200).json({
                status: true,
                data: singleview,
                msg: "Course Record Found"
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

//Edit Course Category
router.post('/category/update', adminAuth, async (req, res) => {

    try {

        var { id, catName, desc } = req.body
        if (!id) {
            res.status(200).json({
                status: false,
                msg: "Invalid Id"
            })
            return;
        }
        var update = await courseCategoryModel.findOne({ _id: id, status: "Active" });
        if (update) {
            if (catName)
                update.catName = catName
            if (desc)
                update.desc = desc
            await update.save()

            res.status(200).json({
                status: true,
                msg: "Category Updated Successfully"
            })
            return
        }
        res.status(200).json({
            status: false,
            msg: "No Categories Record Found"
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

//Delete Category
router.post('/category/delete', adminAuth, async (req, res) => {
    try {
        var { id } = req.body;
        var data = await courseCategoryModel.findOne({ _id: id, status: "Active" });

        if (data) {
            console.log(data._id)
            var activeId = data._id
            var activeCategory = await courseModel.find({ category: activeId })
            console.log(activeCategory, 'active')
            if (activeCategory.length <= 0) {
                data.status = "Deleted"
                await data.save()
                res.status(200).json({
                    status: true,
                    msg: "Category Deleted Successfully"
                })
                return
            }
            res.status(200).json({
                status: false,
                msg: "Category with Courses Cannot Be Deleted"
            })
            return
        }
        res.status(200).json({
            status: false,
            msg: "Category not Found"
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


//-------------------------------------------Courses----------------------------------------------//

//Add Course
router.post('/courses/addcourse', adminAuth, async (req, res) => {
    try {
        var { courseName, overview, image, course_info, duration, certi_image1, certi_image2,
            certi_image3, certi_name1, certi_name2, certi_name3, category } = req.body;
        if (!courseName) {
            res.status(200).json(
                {
                    status: false,
                    msg: "Invalid input in Course Name"
                }
            )
            return;
        }
        // if (!image) {
        //     res.status(200).json(
        //         {
        //             status: false,
        //             msg: "Invalid input for Image"
        //         }
        //     )
        //     return;
        // }
        if (!overview) {
            res.status(200).json(
                {
                    status: false,
                    msg: "Invalid input in Overview"
                }
            )
            return;
        }
        if (!course_info) {
            res.status(200).json(
                {
                    status: false,
                    msg: "Invalid input for course_info"
                }
            )
            return;
        }
        if (!duration) {
            res.status(200).json(
                {
                    status: false,
                    msg: "Invalid input for Duration"
                }
            )
            return;
        }
        // if (!certi_image1) {
        //     res.status(200).json(
        //         {
        //             status: false,
        //             msg: "Invalid input for certi_image1"
        //         }
        //     )
        //     return;
        // }
        // if (!certi_image2) {
        //     res.status(200).json(
        //         {
        //             status: false,
        //             msg: "Invalid input for certi_image2"
        //         }
        //     )
        //     return;
        // }
        // if (!certi_image3) {
        //     res.status(200).json(
        //         {
        //             status: false,
        //             msg: "Invalid input for certi_image3"
        //         }
        //     )
        //     return;
        // }
        if (!certi_name1) {
            res.status(200).json(
                {
                    status: false,
                    msg: "Invalid input for certi_name1"
                }
            )
            return;
        }
        if (!certi_name2) {
            res.status(200).json(
                {
                    status: false,
                    msg: "Invalid input for certi_name2"
                }
            )
            return;
        } if (!certi_name3) {
            res.status(200).json(
                {
                    status: false,
                    msg: "Invalid input for certi_name3"
                }
            )
            return;
        }
        if (!category) {
            res.status(200).json(
                {
                    status: false,
                    msg: "Invalid Input"
                }
            );
            return;
        }
        var newobject = await courseModel.create({ courseName: courseName, overview: overview,/* image: image,*/ course_info: course_info, duration: duration, /*certi_image1: certi_image1, certi_image2: certi_image2, certi_image3: certi_image3,*/ certi_name1: certi_name1, certi_name2: certi_name2, certi_name3: certi_name3, category: category });
        res.status(200).json({
            status: true,
            msg: "New Course Inserted",
            data: newobject
        })
        return;

    } catch (e) {
        console.log(e)
        res.status(500).json({
            status: false,
            msg: 'internal server errort'
        });
        return
    }


})

//List Course
router.get('/courses/list', adminAuth, async (req, res) => {
    try {
        var list = await courseModel.find({ status: "Active" });
        if (list) {
            res.status(200).json({
                status: true,
                reviews: list,
                msg: "Returned All Courses"
            })
            return
        }
        res.status(200).json({
            status: false,
            msg: "Courses not found"
        })
        return;
    } catch (e) {
        console.log(e)
        res.status(500).json({
            status: false,
            msg: 'internal server error'
        });
        return
    }
})

//Single Course View
router.post('/courses/singleview', adminAuth, async (req, res) => {
    try {
        var { id } = req.body;
        var singleview = await courseModel.findOne({ _id: id, status: "Active" });
        if (singleview) {
            res.status(200).json({
                status: true,
                data: singleview,
                msg: "Course Record Found"
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
 
//Edit Course
router.post('/courses/update', adminAuth, async (req, res) => {

    try {

        var { id,  courseName, overview, image, course_info, duration, certi_image1, certi_image2,
            certi_image3, certi_name1, certi_name2, certi_name3, category  } = req.body
        if (!id) {
            res.status(200).json({
                status: false,
                msg: "Invalid Id"
            })
            return;
        }
        var update = await courseModel.findOne({ _id: id, status: "Active" });
        if (update) {
            if (courseName)
                update.courseName = courseName
            if (overview)
                update.overview = overview
            if (course_info)
                update.course_info = course_info
            if (duration)
                update.duration = duration
            if (certi_name1)
                update.certi_name1 = certi_name1
            if (certi_name2)
                update.certi_name2 = certi_name2
            if (certi_name3)
                update.certi_name3 = certi_name3 
            if (category)
                update.category = category
            await update.save()

            res.status(200).json({
                status: true,
                msg: "Category Updated Successfully"
            })
            return
        }
        res.status(200).json({
            status: false,
            msg: "No Categories Record Found"
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

//Delete Course
router.post('/courses/delete', adminAuth, async (req, res) => {
    try {
        var { id } = req.body;
        var data = await courseModel.findOne({ _id: id, status: "Active" });
        if (data) {
            data.status = "Deleted"
            await data.save()
            res.status(200).json({
                status: true,
                msg: "Course Deleted Successfully"
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