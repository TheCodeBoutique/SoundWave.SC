// ==========================================================================
// Project:   Soundwave - loginView
// Copyright: @2013 The Code Boutique, LLC
// ==========================================================================
/*globals Soundwave */
 
Soundwave.loginView = SC.Page.design ({
    layout: { top: 0, left: 0, right: 0, bottom: 0 },
    childViews: ["interfaceView"],
    
    interfaceView: SC.View.design({
      transitionIn: SC.View.SCALE,
      transitionInOptions: { delay: 0.0 },
      transitionOut: SC.View.FADE,
      transitionOutOptions: { delay: 0.0, duration: 1.0 },
      layout: { top: 0, right: 0, bottom: 0, left: 0 },
      childViews: ['loginView', 'registerView', 'fbSetupView'],
      
      loginView: SC.View.design (TCB.FB, {
          layout: { centerX: 0, centerY: -120, height: 145, width: 730 },
          childViews: ["soundwaveIcon", "soundwaveText", "userNameInput", "passwordInput", "submitButton"],

          soundwaveIcon: SC.ImageView.design ({
              classNames: ['sw-login-icon'],
              useStaticLayout: YES,
              value: sc_static('/images/soundwave_icon.png')
          }),

          soundwaveText: SC.LabelView.design ({
              classNames: ['sw-login-text'],
              useStaticLayout: YES,
              value: 'SoundWave.io'
          }),

          userNameInput: TCB.InputField.design ({
              classNames: ['sw-login-username-input'],
              useStaticLayout: YES,
              hint: 'username',
              valueBinding: "Soundwave.loginController.userName"
          }),

          passwordInput: TCB.InputField.design ({
              classNames: ['sw-login-password-input'],
              useStaticLayout: YES,
              hint: 'password',
              type: "password",
              valueBinding: "Soundwave.loginController.userPassword"
          }),

          submitButton: SC.ButtonView.design ({
              classNames: ['core-button', 'core-blue-button', 'sw-login-submit-button'],
              useStaticLayout: YES,
              tagName: "button", 
              title: 'Submit',
              action: 'validateUserInput',
              target: 'Soundwave.statechart',
              isDefault: YES
          }),

          registerView: SC.View.design({
              classNames: ['sw-login-register-view'],
              useStaticLayout: YES,
          }),

        }),
        
        registerView: SC.View.design (TCB.Hover, {
            classNames: ['sw-login-register-view'],
            layout: { centerX: 0, centerY: 100, height: 82, width: 580 },
            childViews: ['iOSIconView', 'registrationTextView', 'facebookButton', 'registerButton'],
            
            registrationTextView: SC.LabelView.design ({
                classNames: ['sw-login-registration-text', 'core-light-text'],
                useStaticLayout: YES,
                value: 'New to SoundWave.io?  Create a new account or signin with FaceBook.'
            }),
            
            iOSIconView: SC.ImageView.design ({
                classNames: ['sw-login-app-icon'],
                useStaticLayout: YES,
                value: sc_static('/images/iOS_icon.png')
            }),
            
            facebookButton: SC.ButtonView.design ({
                classNames: ['core-button', 'core-gray-button', 'sw-login-facebook-button'],
                useStaticLayout: YES,
                tagName: "button",
                title: 'FaceBook',
                action: 'fbAuth',
                target: 'Soundwave.statechart'
            }),
            
            registerButton: SC.ButtonView.design ({
                classNames: ['core-button', 'core-white-button', 'sw-login-registration-button'],
                useStaticLayout: YES,
                tagName: "button",
                title: 'Sign Up',
                action: 'doShowRegistration',
                target: 'Soundwave.statechart'
            }),
            
        }),
        
        fbSetupView: SC.View.design({
          layout: { top: 0, left: 0, height:0, width:0 },
          
          render: function(context) {
                context.push([
                    '<div id="fb-root">','</div>',
                ].join(''))
            },
          
        }),
      
    })

});