Meteor.startup(function() {
  if (Category.find().count() === 0) {
    var categories = [{
      'categoryName': 'FOOD'
    }, {
      'categoryName': 'DRINK'
    }, {
      'categoryName': 'NECESSARIES'
    }, {
      'categoryName': 'OFFICE'
    }];

    for (var i = 0; i < categories.length; i++) {
      Category.insert({
        categoryName: categories[i].categoryName,
        createdAt: new Date()
      });
    }
  }
});
