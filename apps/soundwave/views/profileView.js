// ==========================================================================
// Project:   Soundwave - profileView
// Copyright: @2013 The Code Boutique, LLC
// ==========================================================================
/*globals Soundwave */
 
Soundwave.profileView = SC.Page.design ({
    layout: { top: 0, left: 0, right: 0, bottom: 0 },
    childViews: ["interfaceView"],
 
    interfaceView: SC.View.design({
    layout: { top: 0, right: 0, bottom: 0, left: 0 },
    childViews: ['firstNameLabel', 'lastNameLabel', 'userNameLabel'],
   
        firstNameLabel: SC.LabelView.design ({
            classNames: ['sw-profile-text'],
            isEditable: YES,
            valueBinding: 'Soundwave.userController.content.firstName'
        }),
   
        lastNameLabel: SC.LabelView.design ({
            classNames: ['sw-profile-text'],
            useStaticLayout: YES,
            valueBinding: 'Soundwave.userController.content.lastName'
        }),
   
        userNameLabel: SC.LabelView.design ({
            classNames: ['sw-profile-text'],
            useStaticLayout: YES,
            valueBinding: 'Soundwave.userController.content.userName'
        }),

   }),

});