// ==========================================================================
// Project:   Soundwave - loginView
// Copyright: @2013 The Code Boutique, LLC
// ==========================================================================
/*globals Soundwave */
 
Soundwave.soundboardView = SC.Page.design ({
    layout: { top: 0, left: 0, right: 0, bottom: 0 },
    childViews: ["interfaceView"],
    
    interfaceView: SC.View.design ({
        layout: { left: 0, right: 0, top: 0, bottom: 0 },
        transitionIn: SC.View.FADE,
        transitionInOptions: { delay: 0.0 },
        childViews: ["topBarView", "soundwaveLogoView", "baseScrollView"],
        
        topBarView: SC.ToolbarView.design ({
          classNames: ['topbar'],
          layout: { top: 0, right: 0, left: 0, height: 70 },
          transitionIn: SC.View.SLIDE,
          transitionInOptions: { direction: 'down', delay: 0.0, duration: 1.0 },
          childViews: ['audioPlayer'],
          
          audioPlayer: TCB.AudioPlayer.extend ({
              layout: { top: 8, left: 10, height: 54, width: 515 }
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
      
      soundwaveLogoView: SC.View.design ({
          layout: { centerX: 0, centerY: 0, height: 140, width: 730 },
          childViews: ["soundwaveIcon", "soundwaveText"],
          
          soundwaveIcon: SC.ImageView.design ({
              classNames: ['soundwave-icon-login'],
              useStaticLayout: YES,
              value: sc_static('/images/soundwave_icon_soundboard.png')
          }),
          
          soundwaveText: SC.LabelView.design ({
              classNames: ['soundwave-text-soundboard'],
              useStaticLayout: YES,
              value: 'SoundWave.io'
          })
          
       }),
        
    }),

});