var ws = require('./ws.js')
var con_pool = [];  //contains connection data for clients
var id_pool = [];  //contains IDs of clients that have connected
var mail = {"who":"", "type":"", "payload":"", "other":""}; //server -> client(s) message

/* client -> server message
{
who:"who sent the message"
routing:"list of comma delimited names",
type:"what type of message is it?",  
payload:"payload sent to recipient(s)",
other:"I dunno, thought it would be nice to have an extra field" 
 }
*/
var server = ws.createServer(function (c) {
	con_pool.push(c);
	
	c.addListener('data', function(hand) {

		var msg = JSON.parse(hand);//convert hand to json object
		var recip = msg.routing.split(',');
		if (msg.type === 'id') {//client registers with the server
			id_pool.push(msg.payload);			
			for (con in con_pool) {
				con_pool[con].write(setMail('', 'id', id_pool.toString(), ''));	
			}
				
		} else if (msg.type == 'roll') {//roll related message, payload and other are important
			var check = searchName('dm')
			con_pool[searchName('dm')].write(setMail('', 'roll', msg.payload, msg.other), encoding='ascii');
			var check = searchName(recip[r]);
			if (check) {
				con_pool[check].write(setMail('', 'chat', msg.payload, msg.other), encoding='ascii');
			} else {
				con_pool[msg.who].write(setMail('server', 'alert', 'No DM console is connected!', 'dm'), 
				encoding='ascii'); 
			}
			
		} else if (msg.type == 'chat') {//chat messages between clients
			for (r in recip) {
				var check = searchName(recip[r]);
				if (check) {
					con_pool[check].write(setMail('', 'chat', msg.payload, msg.other), encoding='ascii');
				} else {
					con_pool[msg.who].write(setMail('server', 'alert', 'Could not send to ', recip[r]), 					encoding='ascii'); 
				}
			}
			
		} else if (msg.type == 'alert') {//and alert message sent from the dm to one or more clients
			for (r in recip) {
				var check = searchName(recip[r]);
				if (check) {
					con_pool[check].write(setMail('', 'alert', msg.payload, msg.other), encoding='ascii');
				} else {
					con_pool[msg.who].write(setMail('server', 'alert', 'Could not send to ', recip[r]), 					encoding='ascii');
				} 
			}
		}
	});
//checks if a given name is in the id pool and returns the index if it is present
	function searchName(id) {
		for (i in id_pool) {
			if (id_pool[i] == id) {
				return i;
			}
		}
		return false;
	}
//sets the JSON attributes of the message and converts it to a string for transmission
	function setMail(who, type, payload, other) {
		var new_mail = mail;
		new_mail.type = who;
		new_mail.type = type;
		new_mail.payload = payload;
		new_mail.other = other;
		return JSON.stringify(new_mail);
	}
});

server.listen(8124, 'localhost');


