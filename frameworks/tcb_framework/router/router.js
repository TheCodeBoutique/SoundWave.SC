// ==========================================================================
// Project:   TCB
// Copyright: @2013 The Code Boutique, LLC
// ==========================================================================
/*globals TCB */

/** @namespace

  @extends SC.Object
*/

TCB.Router = SC.Object.create ({
    
    /**
        Walks like a duck. 
    */
    isRouter: YES,
    
    /**
      The route to be registered.
    
      @property {String}
      @example "#/blog"
    */
    route: null,
    
    /**
        Sets the browsers url hash and push
        it onto the window.history stack.
    */
    _updateBrowserHashLocation: function(urlPath) { 
       window.location.hash = urlPath
    },
    
    /**
        Watch for this.route to change.
        When a change fires, send the event
        to our application statecharts mapStateToURL()
        and update our broswers hash location.
    */
    _routeDidChange: function() {
        this._updateBrowserHashLocation(this.route)
        Soundwave.statechart.sendEvent('mapStateToURL', this.route)
    }.observes('route'),
    
    /**
        Capture the browsers navigation button events.
    */
    _syncStateToRoute: window.onhashchange = function() {
        SC.RunLoop.begin();
            TCB.Router.set('route', window.location.hash);
        SC.RunLoop.end();
    }
    
});