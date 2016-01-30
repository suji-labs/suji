
MongoCounters = {
  collection: new Mongo.Collection('mongo_counters'),

  newSequence(name, start = 0) {
    try {
      return Meteor.call('mongoCounterNewSequence', name, start);
    } catch (ex) {
      console.log('newSequence exception:');
      console.log(ex);
    }
    return null;
  },

  nextSequence(name) {
    try {
      return Meteor.call('mongoCountersNextSequence', name);
    } catch (ex) {
      console.log('nextSequence exception:');
      console.log(ex);
    }
    return null;
  }
};

Meteor.methods({
  mongoCounterNewSequence(name, start = 0) {
    check(name, String);
    check(start, Match.Integer);

    const document = MongoCounters.collection.insert({
      _id: name,
      seq: start
    });

    return document.seq;
  },

  mongoCountersNextSequence(name) {
    check(name, String);

    const document = MongoCounters.collection.findAndModify({
      query: { _id: name },
      update: { $inc: { seq: 1 }},
      upsert: true,
      new: true
    });

    return document.seq;
  }
});
