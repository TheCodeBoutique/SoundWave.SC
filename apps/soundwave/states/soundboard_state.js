// ==========================================================================
// Project:   Soundwave - SoundboardState
// Copyright: @2013 The Code Boutique, LLC
// ==========================================================================
/*globals Soundwave */

Soundwave.SoundboardState = SC.State.extend ({
  
  enterState: function() {
    TCB.Color.colorLog('Enter Soundboard State', TCB.Color.Ok);
    Soundwave.applicationController.set('mainContainer', Soundwave.soundboardView.interfaceView)
  },
  
  rewindSong: function() {
      console.log("rewindSong");
  },
  
  playSong: function() {
      console.log("playSong");
  },
  
  pauseSong: function() {
      console.log("pauseSong");
  },
  
  fastforwardSong: function() {
      console.log("fastforwardSong");
  },
  
  doShowTrackListingPane: function(anchor) {
      TCB.FixedPickerPane.create ({
        
        contentView: SC.View.design ({
          classNames: ['tcb-picker-pane-contentview'],
          layout: { top: 36, right: 13, bottom: 17, left: 15 },
        })
        
      }).popup(anchor, TCB.FIXED);
  },

  exitState: function() {
  }

});

