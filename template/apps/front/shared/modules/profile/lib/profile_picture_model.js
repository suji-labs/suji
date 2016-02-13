
if (typeof Profile === 'undefined') Profile = {};

Profile.picturesCollection = new Mongo.Collection('profilePictures');

const prepareData = function(user, attributes) {
  return _.extend(_.pick(attributes, 'url', 'surl', 'size', 'width', 'height',
    'urlFit', 'surlFit', 'widthFit', 'heightFit',
    'ext', 'mime', 'original', 'repoId'), {
    user: {
      _id: user._id,
    },
    createdAt: new Date()
  });
};


Meteor.methods({
  profilePictureInsert(attributes) {
    const user = Meteor.user();
    const picture = prepareData(user, attributes);

    const pictureId = Profile.picturesCollection.insert(picture);
    if (pictureId) {
      const oldPicture = user.profile && user.profile.picture;

      Meteor.users.update(this.userId, {
        $set: {
          "profile.picture": {
            _id: pictureId,
            repoId: picture.repoId,
            url: picture.url
          }
        }
      });

      Post.collection.update(
        { 'author._id': user._id },
        { $set: { 'author.url': picture.url }},
        { multi: true }
      );

      if (oldPicture) {
        Profile.picturesCollection.remove(oldPicture._id);
        if (! this.isSimulation) {
          CloudinaryServer.removeImages(oldPicture.repoId);
        }
      }
    }
  }
});
