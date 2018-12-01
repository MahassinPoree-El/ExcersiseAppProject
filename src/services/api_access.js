const api_root = process.env.VUE_APP_API_ROOT;
export let userId = null;

export function GetState(){
    return myFetch(api_root + "/");
}

export function Login(name, fbid, access_token){
    return myFetch(api_root + `/users`, { name, fbid, access_token })
            .then(x=> userId = x.id);
}

//submit exercise
//get excercise

export function GetMyExercises()
{
    return myFetch(api_root + `/exercises/${userId}`);
}

export function AddExercises(ex)
{
    return myFetch(api_root + "/myExercises", {text: ex})
}

export function PostExercises(ex)
{
    return myFetch(api_root + "/myExercises/post", {text: ex.text})
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