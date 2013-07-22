// ==========================================================================
// Project:   TCB
// Copyright: @2013 The Code Boutique, LLC
// ==========================================================================
/*globals TCB */

TCB.Color = SC.Object.create( {

    /**
        Used for logging positive messages in the console.log
    */
    Ok: '#00C957',
    
    /**
        Used for logging warning messages in the console.log
    */
    Warn: '#FFA500',
    
    /**
        Used for logging negative messages in the console.log
    */
    Error: '#FF4500',
    
    /**
      Add some color to your console.log statements
    */
    colorLog: function (msg, color) {
        console.log("%c" + msg, "color:" + color + ";");
    }

});
