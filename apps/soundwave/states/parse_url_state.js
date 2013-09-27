// ==========================================================================
// Project:   Soundwave - ParseURLState
// Copyright: @2013 The Code Boutique, LLC
// ==========================================================================
/*globals Soundwave */

Soundwave.ParseURLState = SC.State.extend ({
  
      enterState: function() {
        TCB.Color.colorLog('Enter Parse URL State', TCB.Color.Warn);
        TCB.Router.set('route', window.location.hash) ;
      },

      exitState: function() {
        TCB.Color.colorLog('Leaving Parse URL State', TCB.Color.Warn);
      }

});

