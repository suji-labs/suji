const cloudinary = Npm.require('cloudinary');
const Fiber = Npm.require('fibers');
const Future = Npm.require('fibers/future');


Meteor.methods({
  cloudinaryUploadTag(elementId, options) {
    const cloudinary_cors = Meteor.absoluteUrl(
      'packages/shinejs:react-cloudinary/cloudinary_cors.html'
    );

    options = _.extend({ callback: cloudinary_cors }, options);

    return cloudinary.uploader.image_upload_tag(elementId, options);
  }
});


CloudinaryServer = {
  init(options) {
    return cloudinary.config({
      cloud_name: options.cloudName,
      api_key: options.apiKey,
      api_secret: options.apiSecret
    });
  },

  removeImages(imageIds) {
    if (typeof imageIds === 'string') {
      imageIds = [ imageIds ];
    }

    for (let imageId of imageIds) {
      let future = new Future();

      cloudinary.uploader.destroy(imageId, function(result) {
        future['return'](result);
      });

      return future.wait();
    }
  },

  cropImage(image) {
    return cloudinary.url(image.repoId, {
      transformation: {
        crop: 'crop',
        width: image.cropData.width,
        height: image.cropData.height,
        x: image.cropData.x,
        y: image.cropData.y
      },
      angle: image.cropData.rotate
    });
  }

};
