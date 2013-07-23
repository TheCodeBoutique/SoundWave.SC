// ==========================================================================
// Project:   Soundwave - SoundboardState
// Copyright: @2013 The Code Boutique, LLC
// ==========================================================================
/*globals Soundwave */

Soundwave.SoundboardState = SC.State.extend ({
  
  isFirstTime: YES,
  
  enterState: function() {
    TCB.Color.colorLog('Enter Soundboard State', TCB.Color.Ok);
    Soundwave.applicationController.set('mainContainer', Soundwave.soundboardView.interfaceView);
    if(this.isFirstTime) this.get('statechart').invokeStateMethod('_loadAlbums');
  },
  
  _loadAlbums: function() {
    TCB.Color.colorLog('Is first time', TCB.Color.Warn);
    this.set('isFirstTime', NO);
    
    var query = SC.Query.local(Soundwave.Album),
        data = Soundwave.store.find(query);
        
    
    data.addObserver('status', this, function observer() {
      if (data.get('status') === SC.Record.READY_CLEAN) {
        data.removeObserver('status', this, observer);
        Soundwave.soundboardController.set('content', data);
        this.get('statechart').invokeStateMethod('_dataLoaded');
      }
      // might want to check error states too
    });
    
    // in case our data was already loaded (ie synchronous)
    data.notifyPropertyChange('status');
  },
  
  _dataLoaded: function() {
    TCB.Color.colorLog('Data loaded into soundboardController', TCB.Color.Ok);
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

