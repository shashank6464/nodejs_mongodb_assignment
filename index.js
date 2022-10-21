// import express, mongoose and routes
const express = require("express")
const mongoose = require("mongoose")

// routes for learner and courses
const routes_learner = require("./routes/LearnersRoutes")
const routes_course = require("./routes/CoursesRoutes")

// initialize express app
const app = express()

// creating server at port 3000
app.listen(3000, () => {
    console.log("Server running on port 3000")
})

app.use(express.json())

// default route for welcome page
app.use("/welcome", (req,res) => {
    res.send("Welcome")
})

// add the routes
app.use("/learners", routes_learner)
app.use("/courses", routes_course)



// connecting to database
const uri = "mongodb+srv://shashank:12345@cluster0.dmji71d.mongodb.net/nodejsAssignment1?retryWrites=true&w=majority"
mongoose.connect(uri, {useNewUrlParser:true}).
        then(() => {console.log("Database Connected")}).
        catch((error) => {console.log(error)})

