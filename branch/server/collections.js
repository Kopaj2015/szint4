Meteor.publish('userIds', function () {
  return Meteor.users.find({}, {fields: {_id: 1, username: 1, profile: 1}});
});
Meteor.publish('esemenyList', function () {
  return Esemenyek.find();
});

Meteor.methods({
  addEsemeny: function(megnevezes,idopont,eredmeny,sport_id,ki1,ki2,win){
    Esemenyek.insert({
      megnevezes: megnevezes,
      idopont: idopont,
      eredmeny: eredmeny,
      sport_id: sport_id,
      ki1: ki1,
      ki2: ki2,
      win: win
    });
  }
});
