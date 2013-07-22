// ==========================================================================
// Project:   Soundwave - loginView
// Copyright: @2013 The Code Boutique, LLC
// ==========================================================================
/*globals Soundwave */
 
Soundwave.loginView = SC.Page.design ({
    layout: { top: 0, left: 0, right: 0, bottom: 0 },
    childViews: ["interfaceView"],
    
    interfaceView: SC.View.design ({
        layout: { centerX: 0, centerY: 0, height: 140, width: 730 },
        transitionIn: SC.View.SCALE,
        transitionInOptions: { delay: 0.0 },
        transitionOut: SC.View.FADE,
        transitionOutOptions: { delay: 0.0, duration: 1.0 },
        childViews: ["soundwaveIcon", "soundwaveText", "userNameInput", "passwordInput", "submitButton"],
      
        soundwaveIcon: SC.ImageView.design ({
            classNames: ['soundwave-icon-login'],
            useStaticLayout: YES,
            value: sc_static('/images/soundwave_icon.png')
        }),
        
        soundwaveText: SC.LabelView.design ({
            classNames: ['soundwave-text-login'],
            useStaticLayout: YES,
            value: 'SoundWave.io'
        }),
        
        userNameInput: SC.TextFieldView.design ({
            classNames: ['core-input', 'soundwave-user-input-login'],
            useStaticLayout: YES,
            hint: 'User Name',
            valueBinding: "Soundwave.loginController.userName"
        }),
        
        passwordInput: SC.TextFieldView.design ({
            classNames: ['core-input', 'soundwave-password-input-login'],
            useStaticLayout: YES,
            hint: 'Password',
            type: "password",
            valueBinding: "Soundwave.loginController.password"
        }),
        
        submitButton: SC.ButtonView.design ({
            classNames: ['core-button', 'soundwave-submit-button-login'],
            useStaticLayout: YES,
            tagName: "button", 
            title: 'Submit',
            action: 'validateUserInput',
            target: 'Soundwave.statechart',
            isDefault: YES
        }),
        
    }),

});