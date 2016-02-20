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
    //console.log(SerialPort);

    serialport.list(function(err, ports){
        //console.log(ports);
    });

    var sp = new SerialPort("/dev/ttyACM0", {
        baudrate: 115200,
        parser: serialport.parsers.readline("\n")
    });

    sp.on("open", onOpen);
    sp.on("data", onData);

    function onOpen(){
        console.log('open');
    }

    function onData(data){
        sp.write(code);
        console.log(code);
    }

    setTimeout(function(){
        sp.close(function(){
            console.log("close");
        });
    }, 1500);
}