// ==========================================================================
// Project:   Soundwave - mainPage
// Copyright: @2013 The Code Boutique, LLC
// ==========================================================================
/*globals Soundwave */
 
Soundwave.mainPage = SC.Page.design({

      mainPane: SC.MainPane.design({
        childViews: ['mainContainer'],
    
        mainContainer: SC.ContainerView.design({
          layout: { top: 0, right: 0, bottom: 0, left: 0 },
          nowShowingBinding: 'Soundwave.applicationController.mainContainer'
        })

    })

});
