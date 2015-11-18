/**
 * Router configuration.
 * Application layout definition.
 */
Router.configure({
  layoutTemplate: 'layout'
});

/**
 * Authentication beforeAction.
 * Prevents access to the user details page if user is not logged in.
 */
/*Router.onBeforeAction(function () {
  if (!Meteor.userId()) {
    this.redirect('chatRoom');
  } else {
    this.next();
  }
}, {
  only: ['userDetails']
});*/

/**
 * Router definition for the chat room page.
 * Subscribes to the required publications.
 */
Router.route('/', {
  name:     'vendegHtml',
  template: 'vendegHtml',
  subscriptions: function() {
    return [
      Meteor.subscribe('userIds'),
      Meteor.subscribe('esemenyList')
    ];
  }
});

/**
 * Router definition for the user details page.
 */
Router.route('/user', {
  name:     'userDetails',
  template: 'userDetails'
});