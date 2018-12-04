const api_root = process.env.VUE_APP_API_ROOT;
export let userId = null;

export function GetState()
{
    return myFetch(api_root + "/");
}

export function Login(name, fbid, access_token)
{
    return myFetch(api_root + `/users`, { name, fbid, access_token })
            .then(x=> userId = x.id);
}


export function GetMyStats()
{
    return myFetch(api_root + `/stats/${userId}`);
}

export function AddExercises(pushups, lunges, miles)
{
    let ex = "Pushups: "+pushups+"\nLunges: "+lunges+"\nMiles: "+miles;
    return myFetch(api_root + "/myExercises", {text: ex})
}

export function AddCalories(cal)
{
    return myFetch(api_root + "/myCalories", {text: cal})
}
export function ShareStats(ex)
{
    return myFetch(api_root + "/myStats/share", {text: ex.text})
}

  function myFetch(url = ``, data = null) {
      let options = {
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, same-origin, *omit
            headers: {
                userId: userId
            }
      };
      if(data){
          options = { 
            ...options,
            method:  "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                ...options.headers,
                "Content-Type": "application/json; charset=utf-8",
                // "Content-Type": "application/x-www-form-urlencoded",
            },
            body: JSON.stringify(data), // body data type must match "Content-Type" header
          };
      }
      return fetch(url, options)
      .then(response =>{
        return response.json()
      }); // parses response to JSON
  }