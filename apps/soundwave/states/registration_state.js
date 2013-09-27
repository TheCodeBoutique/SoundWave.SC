// ==========================================================================
// Project:   Soundwave - LoginState
// Copyright: @2013 The Code Boutique, LLC
// ==========================================================================
/*globals Soundwave */

Soundwave.RegistrationState = SC.State.extend({

        enterState: function() {
            TCB.Color.colorLog('Enter Registration State', TCB.Color.Ok);

            if (!Soundwave.applicationController.get('mainContainer')) {
                Soundwave.applicationController.set('mainContainer', Soundwave.loginView.interfaceView);
            }
            this.set('signupPage', Soundwave.getPath('registrationView'));
            this.get('statechart').invokeStateMethod('_doShowRegistration');
        },

        validateUserInput: function() {
            var firstName = Soundwave.registrationController.get('firstName'),
                lastName = Soundwave.registrationController.get('lastName'),
                userName = Soundwave.registrationController.get('userName'),
                email = Soundwave.registrationController.get('email'),
                password = Soundwave.registrationController.get('password'),
                passwordConfirmation = Soundwave.registrationController.get('passwordConfirmation'),
                zipcode = Soundwave.registrationController.get('zipcode');

            Soundwave.registrationController.createRecord();
        },

        _doShowRegistration: function() {
            Soundwave.applicationController.get('baseView').appendChild(this.get('signupPage'));
        },

        _transitionToProfileState: function() {
            TCB.Router.set('route', '#/dashboard');
        },

        cancelSignUp: function() {
            TCB.Router.set('route', '#/login');
        },

        exitState: function() {
            Soundwave.registrationController.set(null),
            Soundwave.registrationController.set(null),
            Soundwave.registrationController.set(null),
            Soundwave.registrationController.set(null),
            Soundwave.registrationController.set(null),
            Soundwave.registrationController.set(null),
            Soundwave.registrationController.set(null);
            Soundwave.applicationController.get('baseView').removeChild(this.get('signupPage'));
        }
});
