var serialport = require("serialport");
var SerialPort = serialport.SerialPort;

serialport.list(function(err, ports){
    console.log(ports);
});

var sp = new SerialPort("/dev/ttyACM1", {
    baudrate: 115200,
    parser: serialport.parsers.readline("\n")
});

sp.on("open", onOpen);
sp.on("data", onData);

function onOpen(){
    console.log('open');
}

function onData(data){
    sp.write("S11");
    console.log(data);
}

setTimeout(function(){
    sp.close(function(){
        console.log("close");
    });
}, 1500);