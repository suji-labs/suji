App.info({
  name: 'SHINE React',
  description: 'SHINE: Meteor-React Boilerplate',
  author: 'SHINE team',
  email: 'leesn@bookp.al',
  website: 'http://shinejs.io',
  version: '0.1.0'
});

App.icons({
  // iOS
  'iphone': 'public/icons/icon-60x60.png',
  'iphone_2x': 'public/icons/icon-60x60@2x.png',
  'ipad': 'public/icons/icon-72x72.png',
  'ipad_2x': 'public/icons/icon-72x72@2x.png',

  // Android
  'android_ldpi': 'public/icons/icon-36x36.png',
  'android_mdpi': 'public/icons/icon-48x48.png',
  'android_hdpi': 'public/icons/icon-72x72.png',
  'android_xhdpi': 'public/icons/icon-96x96.png'
});

App.launchScreens({
  // iOS
  'iphone': 'public/splash/splash-320x480.png',
  'iphone_2x': 'public/splash/splash-320x480@2x.png',
  'iphone5': 'public/splash/splash-320x568@2x.png',
  'ipad_portrait': 'public/splash/splash-768x1024.png',
  'ipad_portrait_2x': 'public/splash/splash-768x1024@2x.png',
  'ipad_landscape': 'public/splash/splash-1024x768.png',
  'ipad_landscape_2x': 'public/splash/splash-1024x768@2x.png',

  // Android
  'android_ldpi_portrait': 'public/splash/splash-200x320.png',
  'android_ldpi_landscape': 'public/splash/splash-320x200.png',
  'android_mdpi_portrait': 'public/splash/splash-320x480.png',
  'android_mdpi_landscape': 'public/splash/splash-480x320.png',
  'android_hdpi_portrait': 'public/splash/splash-480x800.png',
  'android_hdpi_landscape': 'public/splash/splash-800x480.png',
  'android_xhdpi_portrait': 'public/splash/splash-720x1280.png',
  'android_xhdpi_landscape': 'public/splash/splash-1280x720.png'
});

App.setPreference('StatusBarOverlaysWebView', 'false');
App.setPreference('StatusBarBackgroundColor', '#000000');

