//const users = require('./userdata');

class Tracker
{
    constructor()
    {
        this.users = []; // in controller is where useres are added & controller can access this directly
    }

    addExersises(userID, newpushUps, newlunges, newMiles) //exersises & calories at the end of the day
    {   
        this.users[userID].pushUps = userID.pushUps+ newpushUps;
        this.users[userID].lunges = userID.lunges+ newlunges;
        this.users[userID].miles = userID.miles + newMiles;
    }

    addCalories( userID, newCalories)
    {
        this.users[userID].calories = userID.calories + newCalories;
        this.users[userID].meals = this.users[userID].meals++;
    }

    letSee(userID, otherUser)//privacy thingy
    {
        this.users[userID].canSee.push(otherUser);
 
    }

}

class User{
    constructor(name, id)
    {
        this.id = id,
        this.name = name,
        this.canSee = [String(name)],
        this.pushUps =0,
        this.lunges = 0,
        this.calories =0,
        this.miles=0
        this.meals = 0;

        this.avgCalories = 0
        if(this.meals > 0)
        {
            this.avgCalories = this.calories/this.meals;
        }

    }
}

const user1 = new User("Bell", 8);
const tracker = new Tracker();


module.exports = 
{
    User, Tracker
}