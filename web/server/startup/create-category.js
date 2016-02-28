 Meteor.startup(function() {
     if (Category.find().count() === 0) {
         var category = [{
             'categoryName': 'FOOD'
         }, {
             'categoryName': 'DRINK'
         }, {
             'categoryName': 'NECESSARIES'
         }, {
             'categoryName': 'OFFICE'
         }];

         for (var j = 0; j < category.length; j++) {
             Category.insert(category[j]);
         }
     }
 });