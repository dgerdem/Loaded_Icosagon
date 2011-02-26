var net = require('net');
var num = 1;
comms = [];

var server = net.createServer(function (c) {
	c.write('hello\r\n', encoding='ascii');
	comms.push(c);
	console.log("user " + num +  " connected");
	num++;

	c.on('data', function(hand) {
		var str = hand.toString('ascii', start=0, end=hand.length);
		console.log(typeof str);
		var parts = str.split(',');
		console.log(parts);
		if (parts[0] == 'narrow') {
			console.log("Narrowcasting");
			comms[parts[1]].write('"' + parts[2] + '"' + ' was sent to you from ' +
				c.remoteAddress + ':' + c.remotePort + '\r\n', encoding='ascii');
		} else if (parts[0] == 'broad') {
			console.log("Broadcasting");
			for (con in comms) {
				comms[con].write(parts[1] + " was recieved and sent to you\r\n", encoding='ascii');	
			}
		}
	});
});

server.listen(8124, 'localhost');


