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
                'barcode': '123456',
                'taxMode': 'YES',
                'category': 'FOOD'
            },
            {
                'name': 'WATER',
                'price': 80,
                'primeCost': 60,
                'barcode': '456789',
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