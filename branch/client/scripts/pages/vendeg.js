Template.vendegHtml.events({
  /**
   * Updates the users profile on field blur.
   * @param event Event object.
   */

  'blur input, blur textarea': function(event) {
    var esemenylista=Esemenyek.find().fetch();
    for(var i=0;i<esemenylista.length;i++)
      console.log(esemenylista[i]["megnevezes"]);
    Meteor.call('addEsemeny','Teszt'+i, '2015', '?:?', '1', '4', '5', '4');
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