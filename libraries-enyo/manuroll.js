Manuroll = {
	parse: function(in_str) {
	
	},
//string in, array out
	slicer: function(in_str) {
		var x = 0;  //result of slice()
		var Lindex = 0; //result of indexOf()
		var Rindex = 0; //result of indexOf()
		var temp = in_str;
		var result_array = [];
		while (x !== -1) {
			Lindex = temp.indexOf("[");
			Rindex = temp.indexOf("]");
			if (Lindex !== -1 && Rindex !== -1) {
				x = temp.slice(Lindex, Rindex + 1);
				result_array.push(x);
				temp = temp.replace(x, "");
			} else {
				return false;
			}
		}
		return result_array;
	},
//string in, object out.  no error catching
	plusSplit: function(in_str) {
		var result = {roll:"",mod:0};
		var splitted = in_str.split("+");
		result.roll = splitted[0];
		result.mod = parseInt(splitted[1]);
		return result;
	},
	dSplit: function(in_str) {
		var result = {num:0,sides:0};
		var splitted = in_str.split("d");
		result.num = parseInt(splitted[0]);
		result.sides = parseInt(splitted[1]);
		return result;
	}
};
