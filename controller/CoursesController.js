const CoursesModel = require("../models/CoursesModel")

// add a Course
exports.addCourse = (req,res) => {
    const course = new CoursesModel({
        course_id : req.body.course_id,
        course_name : req.body.course_name,
        course_description : req.body.course_description
    })

    course.save().
                then( (data) => {
                    res.status(200).json({
                        message : "Successfully added one Course",
                        data : data
                    })
                }).
                catch( (error) => {
                    res.send(error)
                })
}

// get all Courses
exports.getCourses = (req,res) => {
    const courses = CoursesModel.find()
    courses.
            then( (data) => {
                res.status(200).json({
                    message : "Successfully retrieved all courses ",
                    data : data
                })
            }).
            catch( (error) => {
                res.send(error)
            })
}

// get Course by name
exports.getCourse = (req,res) => {
    const course = CoursesModel.find({course_name:req.params.course_name})
    course.
            then( (data) => {
                res.status(200).json({
                    message : "Successfully retrieved "+ req.params.course_name+"'s data",
                    data : data
                })
            }).
            catch( (error) => {
                res.send(error)
            })
}

// update Course description by name
exports.updateCourse = (req,res) => {
    CoursesModel.updateOne({course_name:req.body.course_name}, 
                            {$set:{course_description:req.body.course_description}},
                            () => {
                                res.status(200).json({
                                    message : "Successfully Updated/set "+req.body.course_name+" 's description."
                                })
                            })
}

// delete Course by name
exports.deleteCourse = (req,res) => {
    CoursesModel.deleteOne({course_name:req.params.course_name},
                            () => {
                                res.status(200).json({
                                    message : "Successfully Deleted "+req.params.course_name+"'s data."
                                })
                            })
}

