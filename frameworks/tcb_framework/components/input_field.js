// ==========================================================================
// Project:   TCB - InputField
// Copyright: @2013 The Code Boutique, LLC
// ==========================================================================
/*globals Soundwave */

TCB.InputField = SC.TextFieldView.extend ({
    layout: { height: 30, width: 230 },
    classNames: ['tcb-input-field'],
    childViews: ['topBorder', 'bottomBorder'],
    
    topBorder: SC.ImageView.design ({
        layout: { top: 0, left: 0, right: 0, height: 3 },
        value: sc_static('/images/input_field_top_border.png')
    }),
    
    bottomBorder: SC.ImageView.design ({
        layout: { bottom: -3, left: 0, right: 0, height: 3 },
        value: sc_static('/images/input_field_bottom_border.png')
    })
});