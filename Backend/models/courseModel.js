var mongoose = require("mongoose");
var courseSchema = mongoose.Schema({
    courseName :{type:String},
    overview : {type:String},
    image:{type:String},
    course_info:{type:[String]},
    duration:{type:String},
    certi_image1:{type:String},
    certi_image2:{type:String},
    certi_image3:{type:String},
    certi_name1:{type:String},
    certi_name2:{type:String},
    certi_name3:{type:String},
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'CourseCategory' },
    status:{type:String,default:'Active'}
},
 { 
    //timestamps: true
    timestamps: { createdAt: 'create_date', updatedAt: 'update_date' }
});

module.exports = mongoose.model('courseModel', courseSchema);
