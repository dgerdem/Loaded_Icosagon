var socket;
var msg = {"routing":"", "type":"", "payload":"", "other":""};

function setMail(routing, type, payload, other) {
	var mail = msg;
	mail.routing = routing;
	mail.type = type;
	mail.payload = payload;
	mail.other = other;
	return JSON.stringify(mail);
}

function init () {
	try {
		socket = new WebSocket("ws://localhost:8124");
		socket.onopen = function (msg) {
			socket.send(setMail('', 'id', 'player1', ''));
		};
		socket.onmessage = function (msg) {};
		socket.onclose = function (msg) {};
	} catch (ex) {console.log(ex);}
}

