import * as api from './api_access';

  window.fbAsyncInit = function() {
    FB.init({
      appId      : '205617913684324',
      cookie     : true,
      xfbml      : true,
      version    : '{api-version}'
    });
      
    FB.AppEvents.logPageView();
    
    FB.getLoginStatus(function(response)
    {
        //disable next line
    });
      
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

   export function FBLogin()
   {
       FB.Login 
       (
            response => statusChangeCallback(response),
            {scope: 'public_profile, email'}
       )
   }

   function statusChangeCallback(response)
   {
        console.log(response);
        FB.api("/me?fields=name,email,birthday,picture", me => {
        //console.log(me);
        api.Login(me.name, response.authResponse.userID, response.authResponse.accessToken)

        })
    }
