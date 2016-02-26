/**
 * Created by BoWoon on 2016-02-12.
 */

Meteor.startup(function () {
    if (Menu.find().count() === 0) {
        var menu = [
            {
                'name': 'VITA500(180ml)',
                'price': 500,
                'primeCost': 400,
                'barcode': '8806002007298',
                'taxMode': 'NO',
                'category': 'DRINK'
            },
            {
                'name': 'SAMDASOO(500ml)',
                'price': 600,
                'primeCost': 550,
                'barcode': '8808244201014',
                'taxMode': 'NO',
                'category': 'DRINK'
            },
            {
                'name': '평창수(500ml)',
                'price': 600,
                'primeCost': 500,
                'barcode': '8801105000283',
                'taxMode': 'NO',
                'category': 'DRINK'
            },
            {
                'name': 'TOOTHBRUSH',
                'price': 550,
                'primeCost': 500,
                'barcode': '8809115160195',
                'taxMode': 'NO',
                'category': 'NECESSARIES'
            },
            {
                'name': 'LOTION',
                'price': 800,
                'primeCost': 650,
                'barcode': '8806364054510',
                'taxMode': 'YES',
                'category': 'NECESSARIES'
            },
            {
                'name': 'DIGET CHOCO',
                'price': 1000,
                'primeCost': 500,
                'barcode': '8801117277406',
                'taxMode': 'YES',
                'category': 'FOOD'
            },
            {
                'name': 'FANTA',
                'price': 850,
                'primeCost': 750,
                'barcode': '8801094112707',
                'taxMode': 'NO',
                'category': 'DRINK'
            },
            {
                'name': 'LEMON ADE',
                'price': 800,
                'primeCost': 750,
                'barcode': '8801105907698',
                'taxMode': 'NO',
                'category': 'DRINK'
            },
            {
                'name': '유리 테이프',
                'price': 1500,
                'primeCost': 1000,
                'barcode': '8809031270114',
                'taxMode': 'NO',
                'category': 'NECESSARIES'
            },
            {
                'name': 'GLUE STICK',
                'price': 750,
                'primeCost': 400,
                'barcode': '8802946879410',
                'taxMode': 'YES',
                'category': 'OFFICE'
            },
            {
                'name': '곽티슈',
                'price': 2000,
                'primeCost': 1500,
                'barcode': '8801260214358',
                'taxMode': 'YES',
                'category': 'NECESSARIES'
            },
            {
                'name': 'DOUBLE A',
                'price': 1000,
                'primeCost': 850,
                'barcode': '8856976000023',
                'taxMode': 'YES',
                'category': 'OFFICE'
            },
            {
                'name': 'DOWNY',
                'price': 1500,
                'primeCost': 1300,
                'barcode': '4902430311670',
                'taxMode': 'YES',
                'category': 'NECESSARIES'
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
            },
            {
                'categoryName': 'NECESSARIES'
            },
            {
                'categoryName': 'OFFICE'
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

    Meteor.publish("bell", function () {
        return Bell.find();
    });

    Meteor.methods({
        serialPort: function (code) {
            serial(code);
        }
    });
});

function serial(code) {
    var serialport = Meteor.npmRequire('serialport');
    var SerialPort = serialport.SerialPort;

    serialport.list(function(err, ports){
        var portName = null;

        for (var i in ports){
            if (ports[i].vendorId == '0x2341')
                portName = ports[i].comName;
        }

        console.log(portName);

        var sp = new SerialPort(portName, {
            baudrate: 115200,
            parser: serialport.parsers.readline("\n")
        });

        sp.on("open", function(){
            console.log("open");
            var iter = 0;
            var intervalId = setInterval(function(){
                sp.write(code);
                iter = iter + 1;
                console.log(iter);
                if (iter > 30){
                    clearInterval(intervalId);
                    sp.close(function(){
                       console.log("close");
                    });
                }
            }, 100);
        });
    });
}