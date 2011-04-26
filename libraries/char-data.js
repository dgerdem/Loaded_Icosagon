Data = {
	sheet:0 ,
	
	init: function() {
//check if the localstorages exist, call load if it does, otherwise, prompt for input?
		if (localStorage.getItem("char-data")){
			return true;
		} else {
			return false;
		}
	},
//loads the data stores...probably should return a json object to pass around...	
	load: function() {
		var data = localStorage.getItem("char-data");
		var jsonData = JSON.parse(data);
		return jsonData;
	},
//saves the data store to the local storage	
	save: function(dat) {
		localStorage.setItem("char-data", dat);
	}
};
