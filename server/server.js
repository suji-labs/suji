/**
 * Created by BoWoon on 2016-02-12.
 */

Meteor.startup(function () {
    if (Menu.find().count() === 0) {
        var menu = [
            {
                'name': 'BREAD',
                'price': 100,
                'primeCost': 50,
                'taxMode': 'YES',
                'category': 'FOOD'
            },
            {
                'name': 'WATER',
                'price': 80,
                'primeCost': 60,
                'taxMode': 'NO',
                'category': 'DRINK'
            }
        ];

        for (var i = 0; i < menu.length; i++) {
            Menu.insert(menu[i]);
        }
    }
    if (Category.find().count() === 0) {
        var category = [
            {
                'categoryName': 'FOOD'
            },
            {
                'categoryName': 'DRINK'
            }
        ];

        for (var j = 0; j < category.length; j++) {
            Category.insert(category[j]);
        }
    }

    Meteor.publish("menu", function () {
        return Menu.find();
    });

    Meteor.publish("category", function () {
        return Category.find();
    });

    Meteor.publish("purchase", function () {
        return Purchase.find();
    });
});