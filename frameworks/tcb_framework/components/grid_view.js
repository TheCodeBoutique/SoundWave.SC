// ==========================================================================
// Project:   SproutCore - JavaScript Application Framework
// Copyright: ©2006-2011 Strobe Inc. and contributors.
//            Portions ©2008-2011 Apple Inc. All rights reserved.
// License:   Licensed under MIT license (see license.js)
// ==========================================================================


/** @class

  A grid view renders a collection of items in a grid of rows and columns.

  @extends SC.GridView
  @author Chad Eubanks
  @version 1.0
*/
TCB.GridView = SC.GridView.extend(
/** @scope SC.View.prototype */ {

    /**
        Override the native SC.GridView.
        We dont want the contentIndexesInRect to return a value
        based on the views height.

        Rather, we ignore this optimization and load all objects to our
        grid.  Our content will not be too heavy.  Plus, this fixes the
        odd behaviour of the grid not rendering its content in a sane order.
    */
    contentIndexesInRect: function (rect) {

    }
});