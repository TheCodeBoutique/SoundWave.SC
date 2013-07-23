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
  albumTitle: SC.Record.attr(String),
  artistName: SC.Record.attr(String)

});
