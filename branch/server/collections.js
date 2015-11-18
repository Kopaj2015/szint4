/**
 * Publish the 8 latest messages.
 * @return {Mongo.Cursor} Sorted and limited collection objects.
 */
 /*
Meteor.publish('messages', function () {
  return Messages.find({}, { sort: {createdAt: -1}, limit: 8 });
});
*/

/**
 * Publish users _id, username and profile information.
 * @return {Mongo.Cursor} Field reduced user objects.
 */
Meteor.publish('userIds', function () {
  return Meteor.users.find({}, {fields: {_id: 1, username: 1, profile: 1}});
});
Meteor.publish('esemenyList', function () {
  return Esemenyek.find();
});

Meteor.methods({
  addEsemeny: function(){
    Esemenyek.insert({
      megnevezes: 'Proba1',
      idopont: 'Proba2',
      eredmeny: '0:0',
      sport_id: '1',
      ki1: '4',
      ki2: '5',
      win: '4'
    });
  }
  /*addMessage: function(message) {
    if(Meteor.user()) {
      Messages.insert({
        userId:  Meteor.user()._id,
        message: message,
        createdAt: new Date()
      });
    }
  }*/
});
