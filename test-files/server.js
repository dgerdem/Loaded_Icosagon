var net = require('net');
var num = 1;
var comms = [];  //contains connection data for clients
var players = [];  //contains IDs of clients that have connected

var server = net.createServer(function (c) {
	c.write('hello\r\n', encoding='ascii');
	comms.push(c);
	console.log("user " + num +  " connected");
	num++;

	c.on('data', function(hand) {
		var str = hand.toString('ascii', start=0, end=hand.length);
		var parts = str.split(',');
		if (parts[0] == 'narrow') {
			comms[parts[1]].write('"' + parts[2] + '"' + ' was sent to you from ' +
				c.remoteAddress + ':' + c.remotePort + '\r\n', encoding='ascii');
		} else if (parts[0] == 'broad') {
			for (con in comms) {
				comms[con].write(parts[1] + " was recieved and sent to you\r\n", encoding='ascii');	
			}
		} else if (parts[0] == 'id') { 
		//event must be recieved after a connection is made...
			players.push(parts[1]);
			for (con in comms) {
				comms[con].write("players," + arrayToString(), encoding='ascii');	
			}
		}
	});
	
	function arrayToString() {
		var temp_str = players.toString();
		var swapped = temp_str.replace(/,/gi, ';');
		return swapped;
	}
});

server.listen(8124, 'localhost');


