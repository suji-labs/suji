/**
 * Created by BoWoon on 2016-02-12.
 */

Meteor.startup(function () {
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