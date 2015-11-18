Router.configure({
  layoutTemplate: 'layout'
});
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
Router.route('/user', {
  name:     'userDetails',
  template: 'userDetails'
});