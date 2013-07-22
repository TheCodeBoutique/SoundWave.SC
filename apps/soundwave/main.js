// ==========================================================================
// Project:   Soundwave
// Copyright: @2013 The Code Boutique, LLC
// ==========================================================================
/*globals Soundwave */

// This is the function that will start your app running.  The default
// implementation will load any fixtures you have created then instantiate
// your controllers and awake the elements on your page.
//
// As you develop your application you will probably want to override this.
// See comments for some pointers on what to do next.
//
Soundwave.main = function main() {

  // Step 1: Tell your app it will load via states
  var statechart = Soundwave.statechart;
  SC.RootResponder.responder.set('defaultResponder', statechart); 
  statechart.initStatechart();

};

function main() { Soundwave.main(); }
