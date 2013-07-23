// ==========================================================================
// Project:   Soundwave
// Copyright: @2013 The Code Boutique, LLC
// ==========================================================================
/*globals Soundwave */

/** @namespace

  My cool new app.  Describe your application.
  
  @extends SC.Object
*/
Soundwave = SC.Application.create(
  /** @scope Soundwave.prototype */ {

  NAMESPACE: 'Soundwave',
  VERSION: '0.1.0',
  
  // store: SC.Store.create().from(SC.Record.fixtures),
  store: SC.Store.create().from('Soundwave.ApplicationFixturesDataSource')


});
