//const users = require('./userdata');

class Tracker
{
    constructor()
    {
        this.users = []; // in controller is where useres are added & controller can access this directly
        this.sharedExercises = [];
    }

    //add getstats method instead of getexercises here & to api
    getStats()
    {
        if(this.sharedExercises.some( x=> x.isChosen))
        {
            return this.sharedExercises.map(x=>({...x, userName: this.users[x.userId].name}));
        }
        else
        {
            return this.sharedExercises.map(x=> ({...x, userId: null}));
        }
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

    login(name, fbid, access_token) // mimick what's in api_access
    {
        let user = this.users.find(x=> x.fbid == fbid);
        if(!user){
            user = new User(name, this.users.length, fbid);
            this.users.push(user);
        }
        user.access_token = access_token;
        return user;
    }


}

class User{
    constructor(name, id, fbid)
    {
        this.fbid = fbid,
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




module.exports = 
{
    User, Tracker
}