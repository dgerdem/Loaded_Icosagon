Dice = {
	roll: function(quant, sides, mod) {
		var sum = 0;
		for (i = 0; i < quant; i++){
			var result = Math.floor(Math.random()*sides);
			sum += result;
			sum += mod;
		}
		return sum;
	},
};
