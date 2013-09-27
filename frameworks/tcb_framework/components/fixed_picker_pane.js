TCB.FIXED = SC.PICKER_FIXED;

TCB.FixedPickerPane = SC.PickerPane.extend ({
    layout: { width: 220, height: 280 },
    classNames: ['tcb-picker-pane'],
    childViews: ['interfaceView'],
  
    contentView: null
});