TCB.ReturnKeyDelegate = {

    delegate: TCB.ReturnKeyDelegate,

    /**
        Walk like a duck.
        @type Boolean
        @default YES
        @constant
    */
    isReturnKeyDelegate: YES,

    performKeyEquivalent: function(keystring, evt) {
        sc_super();
        var current = document.body.querySelectorAll(':focus'),
            elementInFocusIsButton = current.item(),
            elementInFocusIsButton = elementInFocusIsButton ? current.item().id : false;

        if(elementInFocusIsButton && keystring === 'return') {
            var action = SC.View.views[elementInFocusIsButton].action;
            Soundwave.statechart.sendEvent(action);
        } else {
            return NO;
        }
    }
};