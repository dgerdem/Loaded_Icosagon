var socket;
var msg = {"who":"", "routing":"", "type":"", "payload":"", "other":""};

function setMail(who, routing, type, payload, other) {
	var mail = msg;
	mail.who = who;
	mail.routing = routing;
	mail.type = type;
	mail.payload = payload;
	mail.other = other;
	return JSON.stringify(mail);
}

function init (host, port) {
	try {
		socket = new WebSocket("ws://" + host + ":" + port);
		socket.onopen = function (msg) {
			socket.send(setMail('', '', 'id', document.getElementById('idbox').value, ''));
		};
		socket.onmessage = function (msg) {
			var temp = JSON.parse(msg.data);
			var box = document.getElementById('idbox');
			box.value = temp.payload;
		};
		socket.onclose = function (msg) {
			alert('Connection was closed! ' + msg); 
		};
	} catch (ex) {}
}
function sendMsg (str, recips) {
	try {
		socket.send(setMail('', recips.toString(), 'chat', str, ''));
	} catch (ex) {
		alert(ex);
	}
}

