/**
 * Category
 *  _id                       PK, String
 *  title                     String [1..100]
 *  seq                       Number [ > 0]
 *  active                    Boolean
 *  createdAt                 Date
 *  updatedAt                 Date
 */

if (typeof Category === 'undefined') Category = {};

Category.collection = new Mongo.Collection('categories');

Meteor.methods({
  categoryInsert(object) {
    check(object, Match.Where(Category.Match.insert));

    // check permission
    if (! this.userId) throw Meteor.Error('error_access_denied');

    const now = new Date();
    const category = {
      title: object.title,
      active: false,
      seq: MongoCounters.nextSequence('categorySeq'),
      createdAt: now,
      updatedAt: now
    };

    const categoryId = Category.collection.insert(category);

    return categoryId;

  },

  categoryUpdate(categoryId, object) {
    check(categoryId, String);
    check(object, Match.Where(Category.Match.update));

    // check permission
    if (! this.userId) throw Meteor.Error('error_access_denied');

    const update = {
      title: object.title,
      seq: object.seq,
      updatedAt: new Date()
    };

    return Category.collection.update({ _id: categoryId }, { $set: update });
  },

  categoryUpdateActive(categoryId) {
    check(categoryId, String);

    // check permission
    if (! this.userId) throw Meteor.Error('error_access_denied');

    const saved = Category.collection.findOne(categoryId);

    const update = {
      active: ! saved.active,
      updatedAt: new Date()
    };

    return Category.collection.update({ _id: categoryId }, { $set: update });
  }
});
