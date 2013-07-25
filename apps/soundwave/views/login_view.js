// ==========================================================================
// Project:   Soundwave - loginView
// Copyright: @2013 The Code Boutique, LLC
// ==========================================================================
/*globals Soundwave */
 
Soundwave.loginView = SC.Page.design ({
    layout: { top: 0, left: 0, right: 0, bottom: 0 },
    childViews: ["interfaceView", "fbView"],
    
    interfaceView: SC.View.design (TCB.FB, {
        layout: { centerX: 0, centerY: 0, height: 170, width: 730 },
        transitionIn: SC.View.SCALE,
        transitionInOptions: { delay: 0.0 },
        transitionOut: SC.View.FADE,
        transitionOutOptions: { delay: 0.0, duration: 1.0 },
        childViews: ["soundwaveIcon", "soundwaveText", "userNameInput", "passwordInput", "submitButton", "signUpView"],
        
        render: function(context) {
            context.push([
                '<div id="fb-root" class="">','</div>',
                /*'<img id="fb-image" src="http://graph.facebook.com/701247564/picture?type=square" />'*/
            ].join(''))
        },
      
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
            hint: 'username',
            valueBinding: "Soundwave.loginController.userName"
        }),
        
        passwordInput: SC.TextFieldView.design ({
            classNames: ['core-input', 'soundwave-password-input-login'],
            useStaticLayout: YES,
            hint: 'password',
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
        
        signUpView: SC.View.design ({
            classNames: ['soundwave-signup-view-login'],
            useStaticLayout: YES,
            childViews: ['signUpText', 'registerButton'],
            
            signUpText: SC.LabelView.design ({
              classNames: ['soundwave-signup-text-login'],
              useStaticLayout: YES,
              value: 'New to SoundWave.io?'
            }),
            
            registerButton: SC.ButtonView.design ({
                classNames: ['soundwave-register-button-login'],
                useStaticLayout: YES,
                title: 'Create an account.',
                action: 'fbAuth',
                target: 'Soundwave.statechart'
            }),
          
        })
        
    }),

});