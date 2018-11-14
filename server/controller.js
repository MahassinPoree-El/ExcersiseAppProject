const express = require('express');
const {User, Tracker} = require('./model');

var trackSesh = new Tracker();

const app = express.Router();

//DISPLAY AGGREGATE DATA
app.get("/users/AllData/:id", (req, res) =>{
    res.send("Name: "+ trackSesh.users[req.param.id].name +"\n"+
            "Email: "+ trackSesh.users[req.param.id].email+"\n"+
            "\nTotal activities done: "+"\n"+
            "Push-ups: "+ trackSesh.users[req.param.id].pushUps+"\n"+
            "Lunges: "+ trackSesh.users[req.param.id].lunges+"\n"+
            "Miles: "+ trackSesh.users[req.param.id].miles+"\n"+
            "Average Calorie Intake: "+ trackSesh.users[req.param.id].avgCalories
    );
})

//DISPLAY DATA BACK TO USER AS INDIV LIST ITEMS

app.get("/profile/MyPushups/:id", (req,res) =>{//GET YOUR PUSHUPS
    
    res.send("Push-ups: "+ trackSesh.users[req.param.id].pushUps);
})

app.get("/profile/MyLunges/:id", (req,res) =>{//GET YOUR LUNGES
    
    res.send("Lunges: "+ trackSesh.users[req.param.id].lunges);
})

app.get("/profile/MyMiles/:id", (req,res) =>{//GET YOUR MILES
    
    res.send("Miles: "+ trackSesh.users[req.param.id].miles);
})


//RETURN CALORIES

app.get("/profile/MyAverageCalories/:id", (req,res) =>{ //GET YOUR AVERAGE CALORIES

    res.send("Your average calories are " + trackSesh.users[req.param.id].avgCalories);
})

app.post("/tracking/MyCalories", (req,res) =>{//YOU CAN GET YOUR TOTAL CALORIES

    var userID = req.header("userID");
    trackSesh.addCalories(userID, req.body.calories);
    res.send("You added your calories.");
})

app.post("/tracking/MyDailyExersise", (req, res) =>{ //RECORD EXERSISE ACCOMPLISHED
    
    var userID = req.header("userID");
    trackSesh.addExersises(userID, req.body.pushUps, req.body.lunges, req.body.miles);
    res.send("You added for exersise for the day!");
})
app.post("/users/LetThemSee", (req, res) =>{ //THIS IS HOW YOU LET PEOPLE YOU ALLOW TO SEE YOUR STUFF
    var userID = req.header("userID");
    trackSesh.letSee(req.body.otherUser, userID);
    res.send(trackSesh.users[req.body.otherUser].name + "knows what you've done...");
})
app.post('/users/MakeNewAccount', (req, res) => { //THIS IS HOW YOU ADD NEW USERS
    const player = new User(req.body.name, trackSesh.users.length, req.body.email);
    trackSesh.users.push(user);
    res.send(user); //THIS IS A CONF. MESSAGE THAT IS SENT TO YOU SCREEN
})

module.exports = app;