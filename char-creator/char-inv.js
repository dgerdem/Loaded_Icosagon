joCache.set("inventory", function() {
	var slct = ["Login/Chat","Action Console","Spells/Feats/Skills","Inventory","Character Sheet"];
//load a saved object or start with a blank one to store an inventory	
	if (Data.init()) {	
		var nu = new joRecord(JSON.parse(Data.load("test")));
		alert('loaded old');
	} else {
		var nu = new joRecord(Blank_inventory);
	}
//item list
	var row1col1 = new joGroup([
		new joLabel("Inventory"), 
		new joSelect(["item1", "item2"]),
		new joLabel("Selected: "+""), 
		new joFlexrow([
			new joButton("Equip Selected Item")])]);
//item attributes
	var row1col2 = new joGroup([
		new joLabel("Selected Item Attributes"), 
		new joTable([["Name:",""],["Quantity:",""],["Description:",""],["Stat Mods:",""],["Rolls:",""]])]);
//equipped list
	var row2col1 = new joGroup([
		new joLabel("List of Equipped"), 
		new joSelect(["",""]), 
		new joLabel("Selected: "+""),
		new joButton("Remove Selected")]);
//add item to list	
	var row2col2 = new joGroup([
		new joLabel("Set Item Attributes"), 
		new joFlexrow([
			new joLabel("Name").setStyle({width: "35px"}),
			new joInput().setStyle({width: "35px"})]),
		new joFlexrow([
			new joLabel("Quantity").setStyle({width: "35px"}),
			new joInput().setStyle({width: "35px"})]),
		new joFlexrow([
			new joLabel("Description").setStyle({width: "35px"}),
			new joInput().setStyle({width: "35px"})]),
		new joFlexrow([
			new joLabel("Stat Mods?").setStyle({width: "35px"}),
			new joInput().setStyle({width: "35px"})]),
		new joFlexrow([
			new joLabel("Rolls?").setStyle({width: "35px"}),
			new joInput().setStyle({width: "35px"})]),
		new joButton("Add to Inventory")]);
	
	var slct = ["Character Sheet","Spells/Feats/Skills","Inventory"];
	
	
//TODO: Give this a little error handling
var save_button = new joButton("Save Changes").selectEvent.subscribe(function() {
	Data.save(sheet_name.getProperty("name"), nu.getData());
	alert('Data Saved as "' + sheet_name.getProperty("name") + '"!');
}); 
//TODO: Give this a little error handling
var load_button = new joButton("Load Inventory").selectEvent.subscribe(function() {
	var test = Data.load(sheet_name.getProperty("name"));
	nu.setData(test);
	alert('Data loaded from "' + sheet_name.getProperty("name") + '"!');
});
//TODO: create this function and add error handling
var delete_button = new joButton("Delete Inventory").selectEvent.subscribe(function() {

var inv_name = new joRecord({"name":""});
	
});
	var card = new joCard([
	    new joOption(slct).selectEvent.subscribe(function(value){
			switch(value){
			case "0":
				App.stack.push(joCache.get("sheet"));
				break;
			case "1":
				App.stack.push(joCache.get("sfs"));
				break;
			case "2":
				App.stack.push(joCache.get("inventory"));
				break;
			default:
				break;
			}
		}),
		new joFlexrow([row1col1,row1col2]),
		new joFlexrow([row2col1,row2col2]),
		new joFlexrow([
			new joLabel("Inventory Name"), 
			new joInput(/*inv_name.link("name")*/),
			save_button, 
			load_button,
			delete_button])
	]).setTitle("Player Inventory");
	return card;
});

