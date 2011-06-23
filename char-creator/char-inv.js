joCache.set("inventory", function() {
	var slct = ["Login/Chat","Action Console","Spells/Feats/Skills","Inventory","Character Sheet"];
//load a saved object or start with a blank one to store an inventory	
	/*if (Data.init()) {	
		var nu = new joRecord(JSON.parse(Data.load("")));
		alert('loaded old');
	} else {
		var nu = new joRecord(Blank_inventory);
	}*/
	var nu = Blank_inventory; //blank data storage object
	var od = new joRecord({arr:[1,2,3]});
	//od.getProperty("arr")[1]
	var inv_index = 0; //index of a selected item
	var equ_index = 0; //index of a selected equipped item
	//dropdown selector for inventory items
	var invent = new joSelect([1,2,3,4,5]);
	invent.selectEvent.subscribe(function(value, list){
		inv_index = value;
		name_field.setData(nu.id[value]);
		quant_field.setData(nu.quants[value]);
		desc_field.setData(nu.descr[value]);
		stat_field.setData(nu.mods[value]);
		roll_field.setData(nu.rolls[value]);
	});
	//dropdown selector for equipped items items
	var equipped = new joSelect(od.getProperty("arr"))
	equipped.selectEvent.subscribe(function(value, list){
		equ_index = value;
		name_field.setData(nu.id[value]);
		quant_field.setData(nu.quants[value]);
		desc_field.setData(nu.descr[value]);
		stat_field.setData(nu.mods[value]);
		roll_field.setData(nu.rolls[value]);
	});
	//adds a selected item to the equipped list (and will apply any mods?)
	var equip_item = new joButton("Equip Selected Item").selectEvent.subscribe(function(){
		od.getProperty("arr").push(nu.id[inv_index]);
		alert(od.getProperty("arr"));
		nu.equiped[inv_index] = true;
	});
	//removes an item from the equipped list
	var unequip_item = new joButton("Equip Selected Item").selectEvent.subscribe(function(){
		
	});
	//get a value from a jorecord that contains an array more easily
	var gp = function(record, prop, index){
		return record.getProperty(prop)[index];
	};
	//append a value top the end of an array in a jorecord
	var sp = function(record, prop, data){
		record.getProperty(prop).push(data);
        record.getDelegate(prop).changeEvent.fire();
	};
	//remove an item from an array in a jorecord
	var rp = function(record, prop, index){
		record.getProperty(prop).splice(index, 1);
	};
	
//item list
	var row1col1 = new joGroup([
		new joLabel("Inventory"), 
		invent, 
		new joFlexrow([
			new joButton("Equip Selected Item")])]);
//item attributes
	var row1col2 = new joGroup([
		new joLabel("Selected Item Attributes"), 
		new joFlexrow([
			new joLabel("Name").setStyle({width: "35px"}),
			name_field = new joInput().setStyle({width: "35px"})]),
		new joFlexrow([
			new joLabel("Quantity").setStyle({width: "35px"}),
			quant_field = new joInput().setStyle({width: "35px"})]),
		new joFlexrow([
			new joLabel("Description").setStyle({width: "35px"}),
			desc_field = new joTextarea().setStyle({width:"35px",minHeight:"100px",maxHeight: "300px"})]),
		new joFlexrow([
			new joLabel("Stat Mods?").setStyle({width: "35px"}),
			stat_field = new joInput().setStyle({width: "35px"})]),
		new joFlexrow([
			new joLabel("Rolls?").setStyle({width: "35px"}),
			roll_field = new joInput().setStyle({width: "35px"})])
		]);
//equipped list
	var row2col1 = new joGroup([
		new joLabel("List of Equipped"), 
		equipped, 
		new joButton("Remove Selected")]);
//add item to list	
	var row2col2 = new joGroup([
		new joFlexrow([
			new joButton("Roll Item")
		])
	]).setStyle({maxHeight:"600px"});
	
	var slct = ["Character Sheet","Spells/Feats/Skills","Inventory"];
	
	
//TODO: Give this a little error handling
var save_button = new joButton("Save Changes").selectEvent.subscribe(function() {
	Data.save(sheet_name.getProperty("name"), nu.getData());
	alert('Data Saved as "' + inv_name.getProperty("name") + '"!');
}); 
//TODO: Give this a little error handling
var load_button = new joButton("Load Inventory").selectEvent.subscribe(function() {
	var test = Data.load(inv_name.getProperty("name"));
	nu.setData(test);
	alert('Data loaded from "' + inv_name.getProperty("name") + '"!');
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

