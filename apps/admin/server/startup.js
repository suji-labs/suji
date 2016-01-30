
Meteor.startup(() => {
  insertInitData();

  // cloudinary init
  /*
  const cloudinary = System.collection.findOne({_id: 'cloudinary'});
  if (cloudinary) {
    CloudinaryServer.init(cloudinary);
  } else {
    console.log('cloudinary initialization failure');
  }
  */

  // temporary for demonstration
  CloudinaryServer.init({
    cloudName: 'meteor-shine',
    apiKey: '997934356838386',
    apiSecret: 'ZP0Kr2W9jOj-cUGB9vZB5Jq54fs'
  });

});
