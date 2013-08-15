// ==========================================================================
// Project:   Soundwave - loginView
// Copyright: @2013 The Code Boutique, LLC
// ==========================================================================
/*globals Soundwave */
 
Soundwave.soundboardView = SC.Page.design ({
    layout: { top: 0, left: 0, right: 0, bottom: 0 },
    childViews: ["interfaceView"],
    
    interfaceView: SC.View.design ({
			layerId: 'sb.interfaceview',
        layout: { left: 0, right: 0, top: 0, bottom: 0 },
        transitionIn: SC.View.FADE,
        transitionInOptions: { delay: 0.0 },
        childViews: ["topBarView", "baseScrollView"],
        
        topBarView: SC.ToolbarView.design ({
          classNames: ['topbar'],
          layout: { top: 0, right: 0, left: 0, height: 70 },
          transitionIn: SC.View.SLIDE,
          transitionInOptions: { direction: 'down', delay: 0.0, duration: 1.0 },
          childViews: ['audioPlayer'],
          
          audioPlayer: SC.View.extend ({
              layout: { top: 8, left: 10, height: 54, width: 515 },
							classNames: ['tcb-audio-player-base'],
						  childViews: ['artwork', 'artistName', 'artistTrackTitle', 'playerControls', 'tracklistingButton'],

						    artwork: SC.View.design({
						      classNames: ['tcb-audio-player-artwork'],
						      layout: { top: 7, left: 7, height: 40, width: 40 },
						    }),

						    artistName: SC.LabelView.design({
						      classNames: ['tcb-audio-player-artist-name', 'core-light-text'],
						      layout: { top: 2, left: 55, height: 20, width: 240 },
						      value: 'Muse'
						    }),

						    artistTrackTitle: SC.LabelView.design({
						      classNames: ['tcb-audio-player-artist-track-title', 'core-light-text'],
						      layout: { top: 20, left: 55, height: 20, width: 240 },
						      value: 'The 2nd Law - Animals'
						    }),

						    playerControls: SC.View.design({
						      layout: { top: 5, left: 295, height: 27, width: 125 },
						      childViews: ['rewindButton', 'controlButtons', 'forwardButton'],

						      rewindButton: SC.ButtonView.design(TCB.ReturnKeyDelegate, {
						        classNames: ['tcb-audio-rewind-button', 'core-empty-button'],
						        tagName: "button",
						        layout: { centerY: 0, left: 2, height: 13, width: 27 },
						        action: 'rewindSong',
						        target: 'Soundwave.statechart'
						      }),

						      controlButtons: SC.View.design({
						        layout: { centerX: 0, centerY: 0, height: 25, width: 25 },
						        childViews: ['playButton', 'pauseButton'],

						        playButton: SC.ButtonView.design(TCB.ReturnKeyDelegate, {
						          tagName: "button",
						          classNames: ['tcb-audio-play-button', 'core-empty-button'],
						          layout: { centerY: 0, centerX: 0, height: 16, width: 15 },
						          isVisible: YES,
						          action: 'playSong',
						          target: 'Soundwave.statechart'
						        }),

						        pauseButton: SC.ButtonView.design(TCB.ReturnKeyDelegate, {
						          tagName: "button",
						          classNames: ['tcb-audio-pause-button', 'core-empty-button'],
						          layout: { centerY: 0, centerX: 0, height: 16, width: 15 },
						          isVisible: NO,
						          action: 'pauseSong',
						          target: 'Soundwave.statechart'
						        })

						      }),

						      forwardButton: SC.ButtonView.design(TCB.ReturnKeyDelegate, {
						        tagName: "button",
						        classNames: ['tcb-audio-forward-button', 'core-empty-button'],
						        layout: { centerY: 0, right: 2, height: 13, width: 27 },
						        action: 'fastforwardSong',
						        target: 'Soundwave.statechart'
						      })

						    }),

						    tracklistingButton: SC.ButtonView.design(TCB.ReturnKeyDelegate, {
						      tagName: "button",
						      classNames: ['tcb-audio-tracklisting-button', 'core-empty-button'],
						      layout: { top: 10, right: 10, height: 20, width: 20 },
						      action: 'doShowTrackListingPane',
						      target: 'Soundwave.statechart'
						    })
          })
          
        }),
        
        baseScrollView: SC.View.extend ({
          classNames: ['tcb-verticalScroll'],
          layout: { top: 70, right: 0, bottom: 0, left: 0, minHeight: 0 },
          childViews: ['contentView'],
          layerId: 'tcbGridBase',
          
          contentView: TCB.GridView.design ({
            columnWidth: 175,
            rowHeight: 220,
            contentBinding: 'Soundwave.soundboardController.arrangedObjects',
          
            exampleView: SC.View.extend(SC.Control, {
              
              transitionIn: SC.View.FADE,
              transitionInOptions: { delay: 0.3 },
              
              classNames: ['grid-example-view'],
              childViews: ['albumArtwork', 'albumTitleView', 'artistNameView'],
              albumArtwork: SC.ImageView.extend({
                classNames: ['photo-preview-grid'],
                layout: { centerX: 0, top: 20, height: 150, width: 150 },
                valueBinding: SC.Binding.oneWay('.parentView.content.artwork'),
              }),
              
              albumTitleView: SC.LabelView.extend({
                classNames: ['title-grid'],
                layout: { centerX: 0, bottom: 15, height: 25, left: 0, right: 0 },
                valueBinding: SC.Binding.oneWay('.parentView.content.albumTitle'),
                textAlign: SC.ALIGN_CENTER
              }),
              
              artistNameView: SC.LabelView.extend({
                classNames: ['title-grid'],
                layout: { centerX: 0, bottom: 0, height: 25, left: 0, right: 0 },
                valueBinding: SC.Binding.oneWay('.parentView.content.artistName'),
                textAlign: SC.ALIGN_CENTER,
              })
          
            })
          
          })
       
      }),
        
    }),

});