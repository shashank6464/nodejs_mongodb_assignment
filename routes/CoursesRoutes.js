const express = require("express")

const router = express.Router()

const controller = require("../controller/CoursesController")

//apis for CRUD operations

// Create a course
router.post("/add-course", controller.addCourse)


// Read courses
router.get("/get-courses", controller.getCourses)
router.get("/get-course-by-name/:course_name", controller.getCourse)

// Update courses
router.put("/update-description-by-name", controller.updateCourse)


// delete course
router.delete("/delete-course-by-name/:course_name", controller.deleteCourse)

module.exports = router