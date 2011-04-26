joCache.set("inventory", function() {
	var slct = ["Login/Chat","Action Console","Spells/Feats/Skills","Inventory","Character Sheet"];
	
//item list
	var row1col1 = new joGroup([
		new joLabel("Inventory"), 
		new joSelect(["item1", "item2"]),
		new joLabel("Selected: "+""), 
		new joButton("Equip Selected Item")]);
//item attributes
	var row1col2 = new joGroup([
		new joLabel("Selected Item Attributes"), 
		new joTable([["Name:",""],["Quantity:",""],["Description:",""],["Mods",""]])]);
//equipped list
	var row2col1 = new joGroup([
		new joLabel("List of Equipped"), 
		new joSelect(["",""]), 
		new joLabel("Selected: "+""),
		new joButton("Remove Selected")]);
//add item to list	
	var row2col2 = new joGroup([
		new joLabel("Set Item Attributes"), 
		new joTable([["Name:",""],["Quantity:",""],["Description:",""],["Mods",""]]),
		new joButton("Add to Inventory")]);
	
	var card = new joCard([
		new joOption(slct).selectEvent.subscribe(function(value){
			switch(value){
			case "0":
				App.stack.push(joCache.get("login"));
				break;
			case "1":
				App.stack.push(joCache.get("action"));
				break;
			case "2":
				App.stack.push(joCache.get("sfs"));
				break
			case "3":
				App.stack.push(joCache.get("inventory"));
				break
			case "4":
				App.stack.push(joCache.get("charsheet"));
				break;
			default:
				break;
			}
			}),
		new joFlexrow([row1col1, row1col2]),
		new joFlexrow([row2col1,row2col2])
	]).setTitle("Player Inventory");
	return card;
});

