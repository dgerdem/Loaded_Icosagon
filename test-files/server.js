var net = require('net');
var num = 1;
var con_pool = [];  //contains connection data for clients
var id_pool = [];  //contains IDs of clients that have connected
var mail = {"type":"", "payload":"", "other":""}; //server -> client(s) message
/* client -> server message
{routing:"list of comma delimited names",
type:"what type of message is it?",  
payload:"payload sent to recipient(s)",
other:"I dunno, thought it would be nice to have an extra field" 
 }
*/
var server = net.createServer(function (c) {
	con_pool.push(c);
	console.log("user " + num +  " connected");
	num++;
	
	c.on('data', function(hand) {
		var msg = hand;//convert hand to json object
		var recip = msg.routing.split(',');
		if (msg.type == 'id') {//client registers with the server
		//TODO: event must be recieved after a connection is made...
			id_pool.push(msg.payload);
			for (con in con_pool) {
				con_pool[con].write(setMail('id', id_pool.toString(), ''), encoding='ascii');	
			}	
		} else if (msg.type == 'roll') {//roll related message, payload and other are important
			con_pool[searchName('dm')].write(setMail("roll", msg.payload, msg.other), encoding='ascii');
		} else if (msg.type == 'chat') {//chat messages between clients
			for (r in recip) {
				con_pool[searchName(recip[r])].write(setMail('chat', msg.payload, msg.other), encoding='ascii');
			}
		} else if (msg.type == 'alert') {//and alert message sent from the dm to one or more clients
			for (r in recip) {
				con_pool[searchName(recip[r])].write(setMail('alert', msg.payload, msg.other), encoding='ascii');
			}
		}
	});
//checks if a given name is in the id pool and 
	function searchName(id) {
		for (i in id_pool) {
			if (id_pool[i] == id) {
				return i;
			}
		}
		return false;
	}
	function setMail(type, payload, other) {
		var new_mail = mail;
		new_mail.type = type;
		new_mail.payload = payload;
		new_mail.other = other;
		return new_mail;
	}
});

server.listen(8124, 'localhost');


