// ==========================================================================
// Project:   Soundwave - LoginState
// Copyright: @2013 The Code Boutique, LLC
// ==========================================================================
/*globals Soundwave */

Soundwave.SignupState = SC.State.extend({

	enterState: function() {
		TCB.Color.colorLog('Enter Signup State', TCB.Color.Ok);

		if (!Soundwave.applicationController.get('mainContainer')) {
			Soundwave.applicationController.set('mainContainer', Soundwave.loginView.interfaceView);
		}
    this.set('signupPage', Soundwave.getPath('signUpView'));
		this.get('statechart').invokeStateMethod('_doShowRegistration');
	},

	_doShowRegistration: function() { 
		Soundwave.applicationController.get('baseView').appendChild(this.get('signupPage'));
	},

	cancelSignUp: function() {
		Soundwave.applicationController.get('baseView').removeChild(this.get('signupPage'));
		TCB.Router.set('route', '#/login');
	}


});
