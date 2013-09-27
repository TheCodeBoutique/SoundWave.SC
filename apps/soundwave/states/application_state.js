// ==========================================================================
// Project:   Soundwave - ApplicationState
// Copyright: @2013 The Code Boutique, LLC
// ==========================================================================
/*globals Soundwave */

Soundwave.ApplicationState = SC.State.extend ({
    initialSubstate: 'parseURLState',

    enterState: function() {
        Soundwave.getPath('mainPage.mainPane').append();
        Soundwave.applicationController.set('baseView', Soundwave.getPath('mainPage.mainPane'));
    },

    mapStateToURL: function(route) {
        route = route.slice(2, route.length);

        if(route != "" && route != "#/") {
            this.gotoState(route + 'State');
        } else {
            this.gotoState('loginState');
        }
    },

    _clearApplicationControllerMainContainer: function() {
        Soundwave.applicationController.set('mainContainer', null);
    },

    exitState: function() {
        throw "Something went wrong.  You should never leave the application state.";
    },

    parseURLState: SC.State.plugin('Soundwave.ParseURLState'),
    loginState: SC.State.plugin('Soundwave.LoginState'),
    registationState: SC.State.plugin('Soundwave.RegistrationState'),
    soundboardState: SC.State.plugin('Soundwave.SoundboardState'),
    profileState: SC.State.plugin('Soundwave.ProfileState'),
    dashboardState: SC.State.plugin('Soundwave.DashboardState')

});

