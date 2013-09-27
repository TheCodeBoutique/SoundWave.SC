// ==========================================================================
// Project:   Soundwave - registrationView
// Copyright: @2013 The Code Boutique, LLC
// ==========================================================================
/*globals Soundwave */

Soundwave.registrationView = SC.View.create({
    layout: { top: 0, left: 0, right: 0, bottom: 0 },
    classNames: ['modalBase'],
    childViews: ["interfaceView"],

        interfaceView: SC.View.extend({
            transitionIn: SC.View.SCALE,
            transitionInOptions: { direction: 'up', delay: 0.0, duration: 0.3 },
            classNames: ['sw-registration-base-view'],
            layout: { centerX: 0, centerY: 0, height: 312, width: 600 },
            childViews: ['formsView', 'cancelButton', 'submitButton'],

            formsView: SC.View.design({
                layout: { top: 0, right: 0, bottom: 50, left: 0 },
                childViews: ['headerView', 'iOSIconView', 'firstNameInputView', 'lastNameInputView', 'userNameInputView', 'emailInputView', 'passwordInputView', 'passwordConfirmationInputView', 'zipCodeInputView'],

                headerView: SC.LabelView.design ({
                    classNames: ['sw-registration-header-view'],
                    useStaticLayout: YES,
                    value: 'Create your new soundwave.io account'
                }),

                iOSIconView: SC.ImageView.design ({
                    layout: { left: 70, top: 10, width: 47, height: 46 },
                    classNames: ['sw-registration-app-icon'],
                    value: sc_static('/images/iOS_icon.png')
                }),

                firstNameInputView: TCB.InputField.design ({
                    classNames: ['sw-registration-form-input', 'sw-registration-form-input-left-column'],
                    useStaticLayout: YES,
                    hint: 'first name',
                    valueBinding: "Soundwave.registrationController.firstName"
                }),

                lastNameInputView: TCB.InputField.design ({
                    classNames: ['sw-registration-form-input'],
                    useStaticLayout: YES,
                    hint: 'last name',
                    valueBinding: "Soundwave.registrationController.lastName"
                }),

                userNameInputView: TCB.InputField.design ({
                    classNames: ['sw-registration-form-input', 'sw-registration-form-input-left-column'],
                    useStaticLayout: YES,
                    hint: 'username',
                    valueBinding: "Soundwave.registrationController.userName"
                }),

                emailInputView: TCB.InputField.design ({
                    classNames: ['sw-registration-form-input'],
                    useStaticLayout: YES,
                    hint: 'email',
                    valueBinding: "Soundwave.registrationController.email"
                }),

                passwordInputView: TCB.InputField.design ({
                    classNames: ['sw-registration-form-input', 'sw-registration-form-input-left-column'],
                    useStaticLayout: YES,
                    hint: 'password',
                    type: "password",
                    valueBinding: "Soundwave.registrationController.password"
                }),

                passwordConfirmationInputView: TCB.InputField.design ({
                    classNames: ['sw-registration-form-input'],
                    useStaticLayout: YES,
                    hint: 'confirm password',
                    type: "password",
                    valueBinding: "Soundwave.registrationController.passwordConfirmation"
                }),

                zipCodeInputView: TCB.InputField.design ({
                    classNames: ['sw-registration-form-input', 'sw-registration-form-input-left-column'],
                    useStaticLayout: YES,
                    hint: 'zip code',
                    valueBinding: "Soundwave.registrationController.zipcode"
                }),

            }),

            cancelButton: SC.ButtonView.design(TCB.ReturnKeyDelegate, {
                classNames: ['core-button', 'core-gray-button', 'sw-registration-cancel-button'],
                useStaticLayout: YES,
                tagName: "button",
                keyEquivalent: 'escape',
                title: 'Cancel',
                action: 'cancelSignUp',
                target: 'Soundwave.statechart'
            }),

            submitButton: SC.ButtonView.design(TCB.ReturnKeyDelegate, {
                classNames: ['core-button', 'core-blue-button', 'sw-registration-submit-button'],
                useStaticLayout: YES,
                tagName: "button",
                title: 'Submit',
                action: 'validateUserInput',
                target: 'Soundwave.statechart'
            })

        })

});
