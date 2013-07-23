// ==========================================================================
// Project:   Soundwave.ApplicationFixturesDataSource
// Copyright: @2013 My Company, Inc.
// ==========================================================================
/*globals Soundwave */

/** @class

  (Document Your Data Source Here)

  @extends SC.FixturesDataSource
*/
Soundwave.ApplicationFixturesDataSource = SC.FixturesDataSource.extend(
/** @scope Soundwave.ApplicationFixturesDataSource.prototype */ {
  
  simulateRemoteResponse: YES,
  latency: 500, // 500 ms latency
  
});
