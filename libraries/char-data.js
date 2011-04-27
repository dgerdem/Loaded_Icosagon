Data = {
	sheet:0 ,
	
	init: function(store_name) {
//check if the localstorages exist, call load if it does, otherwise, prompt for input?
		if (localStorage.getItem(store_name)){
			return true;
		} else {
			return false;
		}
	},
//loads the data stores...probably should return a json object to pass around...	
	load: function(store_name) {
		var data = localStorage.getItem(store_name);
		var jsonData = JSON.parse(data);
		return jsonData;
	},
//saves the data store to the local storage	
	save: function(store_name, data) {
		localStorage.setItem(store_name, data);
	}
};
