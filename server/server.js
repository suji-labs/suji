/**
 * Created by BoWoon on 2016-02-12.
 */

Meteor.startup(function () {
    if (Menu.find().count() === 0) {
        var parties = [
            {
                'name': 'BREAD',
                'price': 100,
                'primepcost': 50,
                'taxmode': false,
                'category': 'FOOD'
            },
            {
                'name': 'WATER',
                'price': 80,
                'primepcost': 60,
                'taxmode': false,
                'category': 'FOOD'
            }
        ];

        for (var i = 0; i < parties.length; i++) {
            Menu.insert(parties[i]);
        }
    }

    Meteor.publish("menu", function () {
        return Menu.find();
    });
});