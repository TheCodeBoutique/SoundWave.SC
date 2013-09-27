// ==========================================================================
// Project:   Soundwave.User
// Copyright: @2013 My Company, Inc.
// ==========================================================================
/*globals Soundwave */

Soundwave.User = SC.Record.extend(
/** @scope Soundwave.User.prototype */ {

        firstName: SC.Record.attr(String),
        lastName: SC.Record.attr(String),
        userName: SC.Record.attr(String),
        email: SC.Record.attr(String),
        password: SC.Record.attr(String),
        passwordConfirmation: SC.Record.attr(String),
        zipcode: SC.Record.attr(String)

});
