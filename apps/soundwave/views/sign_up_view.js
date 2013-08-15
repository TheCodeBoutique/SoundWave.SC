// ==========================================================================
// Project:   Soundwave - signUpView
// Copyright: @2013 The Code Boutique, LLC
// ==========================================================================
/*globals Soundwave */

Soundwave.signUpView = SC.View.create({

	layout: { top: 0, left: 0, right: 0, bottom: 0 },
	classNames: ['modalBase'],
	childViews: ["interfaceView"],

	interfaceView: SC.View.extend({

		transitionIn: SC.View.SCALE,
		transitionInOptions: { direction: 'up', delay: 0.0, duration: 0.3 },

		classNames: ['sw-signup-registration-view'],
		layout: { centerX: 0, centerY: 0, height: 350, width: 600 },
		childViews: ['cancelButton', 'submitButton'],

		cancelButton: SC.ButtonView.design(TCB.ReturnKeyDelegate, {
			classNames: ['core-button', 'core-gray-button', 'sw-signup-cancel-button'],
			useStaticLayout: YES,
			tagName: "button",
			title: 'Cancel',
			action: 'cancelSignUp',
			target: 'Soundwave.statechart'
		}),

		submitButton: SC.ButtonView.design(TCB.ReturnKeyDelegate, {
			classNames: ['core-button', 'core-white-button', 'sw-signup-submit-button'],
			useStaticLayout: YES,
			tagName: "button",
			title: 'Submit',
			action: 'cancelSignUp',
			target: 'Soundwave.statechart'
		}),


	})

});
