/**
 * Publish the 8 latest messages.
 * @return {Mongo.Cursor} Sorted and limited collection objects.
 *
 * Meteor.publish('messages', function () {
 *  return Messages.find({}, { sort: {createdAt: -1}, limit: 8 });
 * });
 */
Meteor.publish('esemenyek', function() {
  return esemenyek.find({}, {fields: {_id: 1, megnevezes: 1, idopont: 1, eredmeny: 1, sport_id: 1, ki1: 1, ki2:1}});
});
Meteor.publish('felhasznalo', function() {
  return esemenyek.find({}, {fields: {_id: 1, username: 1, szint:1, pontszam: 1}});
});
Meteor.publish('sportok', function() {
  return esemenyek.find({}, {fields: {_id: 1, megnevezes: 1}});
});
Meteor.publish('fogadas', function() {
  return esemenyek.find({}, {fields: {_id: 1, esemeny_id:1, felhasznalo_id:1, mire:1}});
});

/**
 * Publish users _id, username and profile information.
 * @return {Mongo.Cursor} Field reduced user objects.
 * Meteor.publish('userIds', function () {
 *   return Meteor.users.find({}, {fields: {_id: 1, username: 1, profile: 1}});
 * });
 */

Meteor.methods({
  /**
   * Save a message to the backend database.
   */
  addMessage: function(message) {
    if(Meteor.user()) {
      Messages.insert({
        userId:  Meteor.user()._id,
        message: message,
        createdAt: new Date()
      });
    }
  }
});
