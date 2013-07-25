// ==========================================================================
// Project:   Soundwave - LoginState
// Copyright: @2013 The Code Boutique, LLC
// ==========================================================================
/*globals Soundwave */

Soundwave.LoginState = SC.State.extend ({
  
  enterState: function() {
      TCB.Color.colorLog('Enter Login State', TCB.Color.Ok);
      Soundwave.applicationController.set('mainContainer', Soundwave.loginView.interfaceView);
  },
  
  validateUserInput: function() {
    var userName = Soundwave.loginController.userName,
        password = Soundwave.loginController.userPassword,
        userNameAuth = "admin",
        passwordAuth = "password";
    
    if (userName != userNameAuth && password != passwordAuth) {
      alert("Bad Credentials!  You should try admin / password.");
    } else {
      this._transitionToSoundboardState();
    }
    
  },

  _transitionToSoundboardState: function() {
      TCB.Router.set('route', '#/soundboard');
  },
  
  fbAuth: function() {
      FB.login(function(response) {
        if (response.authResponse) {
          console.log('Welcome!  Fetching your information.... ');
          FB.api('/me', function(response) {
              var banks = response ;
              console.log(banks);
            console.log('Good to see you, ' + response.name + '.');
            console.log("Your email is, " + response.picture + '.');
            console.log("Your are from the city of , " + response.location.name  + '.');
          });
        } else {
          console.log('User cancelled login or did not fully authorize.');
        }
      },{scope: 'email, user_location, user_photos'});
  },

  exitState: function() {
      Soundwave.applicationController.set('mainContainer', null)
  }

});

