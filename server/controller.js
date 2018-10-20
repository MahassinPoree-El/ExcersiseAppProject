const express = require('express');
const {User, Tracker} = require('./model');

var trackSesh = new Tracker();

const app = express.Router();

//DISPLAY AGGREGATE DATA

//DISPLAY DATA BACK TO USER AS INDIV

//DISPLAY DATA BACK TO USER AS LIST


//RETURN CALORIES



app.post("/users/MyDailyExersise", (req, res) =>{ //RECORD EXERSISE ACCOMPLISHED
    
    var userName = req.header("Username");
    trackSesh.addExersises(usernae, req.body.pushUps, req.body.lunges, req.body.miles);
    res.send("You added for exersise for the day!")
})
app.post("/users/LetThemSee", (req, res) =>{ //THIS IS HOW YOU LET PEOPLE YOU ALLOW TO SEE YOUR STUFF
    var userName = req.header("Username");
    trackSesh.letSee(req.body.otherUser, userName);
    res.send(trackSesh.users[req.body.otherUser].name + "knows what you've done...");
})
app.post('/users/MakeNewAccount', (req, res) => { //THIS IS HOW YOU ADD NEW USERS
    const player = new User(req.body.name, trackSesh.users.length);
    trackSesh.users.push(user);
    res.send(user); //THIS IS A CONF. MESSAGE THAT IS SENT TO YOU SCREEN
})