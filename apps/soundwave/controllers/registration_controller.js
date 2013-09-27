// ==========================================================================
// Project:   Soundwave.registrationController
// Copyright: @2013 My Company, Inc.
// ==========================================================================
/*globals Soundwave */

Soundwave.registrationController = SC.ObjectController.create(
/** @scope Soundwave.registrationController.prototype */ {

        firstName: null,
        lastName: null,
        userName: null,
        email: null,
        password: null,
        passwordConfirmation: null,
        zipcode: null,

        createRecord: function() {
            var data = Soundwave.store.createRecord(Soundwave.User, {
                firstName: this.firstName,
                lastName: this.lastName,
                userName: this.userName,
                email: this.email,
                password: this.password,
                passwordConfirmation: this.passwordConfirmation,
                zipcode: this.zipcode,
            });

            this.setContentToNewRecord(data);
        },

        setContentToNewRecord: function(data) {
            Soundwave.userController.set('content', data);
            Soundwave.statechart.sendEvent('_transitionToProfileState');
        }

});
