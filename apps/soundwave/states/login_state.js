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

  exitState: function() {
      Soundwave.applicationController.set('mainContainer', null)
  }

});

