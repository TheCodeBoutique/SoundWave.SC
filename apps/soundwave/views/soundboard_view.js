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
        childViews: ["topBarView", "contentView"],
        
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
        
        // currently not rendering
        bar: SC.View.design ({
          classNames: ['bar'],
          layout: { top: 70, right: 0, left: 0, height: 25 },
          transitionIn: SC.View.SLIDE,
          transitionInOptions: { direction: 'down', delay: 0.0, duration: 1.0 },
        }),
        
        contentView: SC.View.design({
          layout: { top: 70, right: 0, bottom: 0, left: 0 },
          childViews: ['soundwaveLogoView'],
          
          soundwaveLogoView: SC.View.design ({
              layout: { centerX: 0, centerY: -35, height: 140, width: 730 },
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
        
    }),

});