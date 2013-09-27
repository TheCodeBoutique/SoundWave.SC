// ==========================================================================
// Project:   Soundwave - LoginState
// Copyright: @2013 The Code Boutique, LLC
// ==========================================================================
/*globals Soundwave */

Soundwave.DashboardState = SC.State.extend({

        enterState: function() {
            TCB.Color.colorLog('Enter Dashboard State', TCB.Color.Ok);
            Soundwave.applicationController.set('mainContainer', Soundwave.dashboardView.interfaceView);
            Soundwave.dashboardController.set('mainContainer', null);
        },

        exitState: function() {
            Soundwave.applicationController.set('mainContainer', null);
        }

});