// ==========================================================================
// Project:   Soundwave.Album
// Copyright: @2013 My Company, Inc.
// ==========================================================================
/*globals Soundwave */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
Soundwave.Album = SC.Record.extend(
/** @scope Soundwave.Album.prototype */ {
  
  artwork: SC.Record.attr(String),
  name: SC.Record.attr(String),
  artist: SC.Record.attr(String)

});
