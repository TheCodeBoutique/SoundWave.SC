// ==========================================================================
// Project:   Soundwave - ProfileState
// Copyright: @2013 The Code Boutique, LLC
// ==========================================================================
/*globals Soundwave */

Soundwave.ProfileState = SC.State.extend ({

        enterState: function() {
            TCB.Color.colorLog('Enter Profile State', TCB.Color.Ok);
            Soundwave.applicationController.set('mainContainer', Soundwave.profileView.interfaceView);
        },

            exitState: function() {
            Soundwave.applicationController.set('mainContainer', null);
        }

});