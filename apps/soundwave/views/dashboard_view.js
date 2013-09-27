// ==========================================================================
// Project:   Soundwave - profileView
// Copyright: @2013 The Code Boutique, LLC
// ==========================================================================
/*globals Soundwave */
 
Soundwave.dashboardView = SC.Page.design ({
        layout: { top: 0, left: 0, right: 0, bottom: 0 },
        childViews: ["interfaceView"],
 
        interfaceView: SC.View.design({
            layout: { top: 0, right: 0, bottom: 0, left: 0 },
            childViews: ['dashboardNavigationView', 'dashboardMainContainer'],

            dashboardNavigationView: SC.View.design({
                layout: { top: 0, bottom: 0, left: 0, width: 250 },
                backgroundColor: "yellow",
            }),

            dashboardMainContainer: SC.ContainerView.design({
                backgroundColor: "lightblue",
                layout: { top: 0, bottom: 0, left: 250, right: 0 },
                nowShowingBinding: 'Soundwave.dashboardController.mainContainer'
            })

   })

});