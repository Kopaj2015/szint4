Template.vendegHtml.events({
  /**
   * Updates the users profile on field blur.
   * @param event Event object.
   */

  'blur input, blur textarea': function(event) {
    var esemenylista=Esemenyek.find().fetch();
    console.log(esemenylista[0]["megnevezes"]);
    //Meteor.call('addEsemeny');
    var data = Meteor.user().profile;
    data[event.target.name] = event.target.value;
    Meteor.users.update({_id: Meteor.user()._id}, {$set: {
      profile: data
    }});
  }
});

Template.vendegHtml.helpers({
  getEsemenyek: function() {
  }
});