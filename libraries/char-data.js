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
//loads the data stores...	
	load: function(store_name) {
		var data = localStorage.getItem(store_name);
		var jsonData = JSON.parse(data);
		return jsonData;
	},
//saves the data store to the local storage	
	save: function(store_name, data) {
		var strung = JSON.stringify(data);
		localStorage.setItem(store_name, strung);
	},
//either deletes a given local storage or all of it
	banish: function(store_name, clear) {
		if (clear) {
			localStorage.clear();
		} else {
			localStorage.remove(store_name);
		}
	}
};
