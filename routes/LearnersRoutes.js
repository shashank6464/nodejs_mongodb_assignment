const express = require("express")

const router = express.Router()

const controller = require("../controller/LearnersController")

//apis for CRUD operations

// Create learner
router.post("/add-learner", controller.addLearner)


// Read learner
router.get("/get-learners", controller.getLearners)
router.get("/get-learner-by-name/:learner_name", controller.getLearner)

// Update learner
router.put("/update-email-not-present", controller.updateLearner)


// delete learner
router.delete("/delete-learner-by-name/:learner_name", controller.deleteLearner)

module.exports = router