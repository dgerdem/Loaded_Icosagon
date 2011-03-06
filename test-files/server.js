var net = require('net');
var num = 1;
var con_pool = [];  //contains connection data for clients
var id_pool = [];  //contains IDs of clients that have connected

var server = net.createServer(function (c) {
	c.write('hello\r\n', encoding='ascii');
	con_pool.push(c);
	console.log("user " + num +  " connected");
	num++;
	
	c.on('data', function(hand) {
		var str = hand.toString('ascii', start=0, end=hand.length);//remove when not using buffer
		var parts = str.split(',');
		if (parts[0] == 'narrow') {//narrowcast message
			
		} else if (parts[0] == 'broad') {//broadcast message
			
		} else if (parts[0] == 'id') {//check in and send updated player list
		//TODO: event must be recieved after a connection is made...
			id_pool.push(parts[1]);
			for (con in con_pool) {
				con_pool[con].write("id_pool," + arrayToString(), encoding='ascii');	
			}
		} else if (parts[0] == 'roll') {//roll handling
			
		}
	});
//replaces a comma delimited string with a semicolon delimited string.	
	function arrayToString() {
		var temp_str = id_pool.toString();
		var swapped = temp_str.replace(/,/gi, ';');
		return swapped;
	}
//decides how to route rest of the message
	function secondStageParser(msg) {
		if (msg[1] = 'DM')
	}
//checks if a given name is in the id pool and
	function searchName(id) {
		for (i in id_pool) {
			if (id_pool[i] == id) {
				return i;
			}
		}
		return false;
	}
});

server.listen(8124, 'localhost');


