// ==========================================================================
// Project:   TCB - AudioPlayer
// Copyright: @2013 The Code Boutique, LLC
// ==========================================================================
/*globals Soundwave */

TCB.AudioPlayer = SC.View.extend ({
  classNames: ['tcb-audio-player-base'],
  childViews: ['artwork', 'artistName', 'artistTrackTitle', 'playerControls', 'tracklistingButton'],

    artwork: SC.View.design({
      classNames: ['tcb-audio-player-artwork'],
      layout: { top: 7, left: 7, height: 40, width: 40 },
    }),
   
    artistName: SC.LabelView.design({
      classNames: ['tcb-audio-player-artist-name', 'core-thicker-text'],
      layout: { top: 2, left: 55, height: 20, width: 240 },
      value: 'Muse'
    }),
   
    artistTrackTitle: SC.LabelView.design({
      classNames: ['tcb-audio-player-artist-track-title', 'core-thicker-text'],
      layout: { top: 20, left: 55, height: 20, width: 240 },
      value: 'The 2nd Law - Animals'
    }),
   
    playerControls: SC.View.design({
      layout: { top: 5, left: 295, height: 27, width: 125 },
      childViews: ['rewindButton', 'controlButtons', 'forwardButton'],
   
      rewindButton: SC.ButtonView.design({
        classNames: ['tcb-audio-rewind-button', 'core-empty-button'],
        tagName: "button",
        layout: { centerY: 0, left: 2, height: 13, width: 27 },
        action: 'rewindSong',
        target: 'Soundwave.statechart'
      }),
   
      controlButtons: SC.View.design({
        layout: { centerX: 0, centerY: 0, height: 25, width: 25 },
        childViews: ['playButton', 'pauseButton'],
   
        playButton: SC.ButtonView.design({
          tagName: "button",
          classNames: ['tcb-audio-play-button', 'core-empty-button'],
          layout: { centerY: 0, centerX: 0, height: 16, width: 15 },
          isVisible: YES,
          action: 'playSong',
          target: 'Soundwave.statechart'
        }),
   
        pauseButton: SC.ButtonView.design({
          tagName: "button",
          classNames: ['tcb-audio-pause-button', 'core-empty-button'],
          layout: { centerY: 0, centerX: 0, height: 16, width: 15 },
          isVisible: NO,
          action: 'pauseSong',
          target: 'Soundwave.statechart'
        })
   
      }),
   
      forwardButton: SC.ButtonView.design({
        tagName: "button",
        classNames: ['tcb-audio-forward-button', 'core-empty-button'],
        layout: { centerY: 0, right: 2, height: 13, width: 27 },
        action: 'fastforwardSong',
        target: 'Soundwave.statechart'
      })
   
    }),

    tracklistingButton: SC.ButtonView.design({
      tagName: "button",
      classNames: ['tcb-audio-tracklisting-button', 'core-empty-button'],
      layout: { top: 10, right: 10, height: 20, width: 20 },
      action: 'doShowTrackListingPane',
      target: 'Soundwave.statechart'
    })

});