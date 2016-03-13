Meteor.startup(function() {
    if (Menu.find().count() === 0) {
        var menu = [{
            'name': 'VITA500(180ml)',
            'price': 500,
            'primeCost': 400,
            'barcode': '8806002007298',
            'taxMode': 'NO',
            'category': 'DRINK'
        }, {
            'name': 'SAMDASOO(500ml)',
            'price': 600,
            'primeCost': 550,
            'barcode': '8808244201014',
            'taxMode': 'NO',
            'category': 'DRINK'
        }, {
            'name': '평창수(500ml)',
            'price': 600,
            'primeCost': 500,
            'barcode': '8801105000283',
            'taxMode': 'NO',
            'category': 'DRINK'
        }, {
            'name': 'TOOTHBRUSH',
            'price': 550,
            'primeCost': 500,
            'barcode': '8809115160195',
            'taxMode': 'NO',
            'category': 'NECESSARIES'
        }, {
            'name': 'LOTION',
            'price': 800,
            'primeCost': 650,
            'barcode': '8806364054510',
            'taxMode': 'YES',
            'category': 'NECESSARIES'
        }, {
            'name': 'DIGET CHOCO',
            'price': 1000,
            'primeCost': 500,
            'barcode': '8801117277406',
            'taxMode': 'YES',
            'category': 'FOOD'
        }, {
            'name': 'FANTA',
            'price': 850,
            'primeCost': 750,
            'barcode': '8801094112707',
            'taxMode': 'NO',
            'category': 'DRINK'
        }, {
            'name': 'LEMON ADE',
            'price': 800,
            'primeCost': 750,
            'barcode': '8801105907698',
            'taxMode': 'NO',
            'category': 'DRINK'
        }, {
            'name': '유리 테이프',
            'price': 1500,
            'primeCost': 1000,
            'barcode': '8809031270114',
            'taxMode': 'NO',
            'category': 'NECESSARIES'
        }, {
            'name': 'GLUE STICK',
            'price': 750,
            'primeCost': 400,
            'barcode': '8802946879410',
            'taxMode': 'YES',
            'category': 'OFFICE'
        }, {
            'name': '곽티슈',
            'price': 2000,
            'primeCost': 1500,
            'barcode': '8801260214358',
            'taxMode': 'YES',
            'category': 'NECESSARIES'
        }, {
            'name': 'DOUBLE A',
            'price': 1000,
            'primeCost': 850,
            'barcode': '8856976000023',
            'taxMode': 'YES',
            'category': 'OFFICE'
        }, {
            'name': 'DOWNY',
            'price': 1500,
            'primeCost': 1300,
            'barcode': '4902430311670',
            'taxMode': 'YES',
            'category': 'NECESSARIES'
        }, {
            'name': 'PAPER CUP',
            'price': 500,
            'primeCost': 450,
            'barcode': '8809004781126',
            'taxMode': 'YES',
            'category': 'NECESSARIES'
        }, {
            'name': 'FILE',
            'price': 700,
            'primeCost': 350,
            'barcode': '8807367013078',
            'taxMode': 'YES',
            'category': 'NECESSARIES'
        }];

        for (var i = 0; i < menu.length; i++) {
            Menu.insert(menu[i]);
        }
    }
});
