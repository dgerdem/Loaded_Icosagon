App = {
	load: function() {
		jo.load();	
		if (Data.init()) {	
			var nu = new joRecord(JSON.parse(Data.load("test")));
			alert('loaded old');
		} else {
			var nu = new joRecord(Blank_sheet);
		}		
		this.scn = new joScreen(
			new joContainer([
				new joFlexcol([
					this.nav = new joNavbar(),
					this.stack = new joStackScroller()
				])
			]));
		this.nav.setStack(this.stack);
		
		//subscribe to change event
		//ugh...so much interaction
		nu.changeEvent.subscribe(function(prop, rec) {
			if (prop === "str" || prop === "temp_str") { //strength
				var temp = Math.floor(((parseInt(nu.getProperty("str"))+parseInt(nu.getProperty("temp_str"))) - 10) / 2);
				nu.setProperty("str_mod", temp);
			} else if (prop === "dex" || prop === "temp_dex") { //dexterity
				var temp = Math.floor(((parseInt(nu.getProperty("dex"))+parseInt(nu.getProperty("temp_dex"))) - 10) / 2);
				nu.setProperty("dex_mod", temp);
			} else if (prop === "con" || prop === "temp_con") { //constitution
				var temp = Math.floor(((parseInt(nu.getProperty("con"))+parseInt(nu.getProperty("temp_con"))) - 10) / 2);
				nu.setProperty("con_mod", temp);
			} else if (prop === "int" || prop === "temp_int") { //intelligence
				var temp = Math.floor(((parseInt(nu.getProperty("int"))+parseInt(nu.getProperty("temp_int"))) - 10) / 2);
				nu.setProperty("int_mod", temp);
			} else if (prop === "wis" || prop === "temp_wis") { //wisdom
				var temp = Math.floor(((parseInt(nu.getProperty("wis"))+parseInt(nu.getProperty("temp_wis"))) - 10) / 2);
				nu.setProperty("wis_mod", temp);
			} else if (prop === "cha" || prop === "temp_cha") { //charisma
				var temp = Math.floor(((parseInt(nu.getProperty("cha"))+parseInt(nu.getProperty("temp_cha"))) - 10) / 2);
				nu.setProperty("cha_mod", temp);
			//total ac	
			} else if (prop === "armor" || prop === "shield" || prop === "dex_mod" || prop === "misc_ac") {
				var temp = 10 + parseInt(nu.getProperty("armor")) + parseInt(nu.getProperty("shield")) + parseInt(nu.getProperty("dex_mod")) + parseInt(nu.getProperty("misc_ac"));
				nu.setProperty("tot_ac", temp);
			} else if (prop === "dex_mod" || prop === "misc_init"){ //initiative
				var temp = parseInt(nu.getProperty("misc_init")) + parseInt(nu.getProperty("dex_mod"));
				nu.setProperty("init", temp);
			} else if (prop === "base_fort" || prop === "con_mod" || prop === "misc_fort" || prop === "temp_fort") {
				var temp = parseInt(nu.getProperty("base_fort"))+parseInt(nu.getProperty("con_mod"))+parseInt(nu.getProperty("misc_fort"))+parseInt(nu.getProperty("temp_fort"));
				nu.setProperty("fort_tot", temp);
			} else if (prop === "base_reflex" || prop === "dex_mod" || prop === "misc_reflex" || prop === "temp_reflex") {
				var temp = parseInt(nu.getProperty("base_reflex"))+parseInt(nu.getProperty("dex_mod"))+parseInt(nu.getProperty("misc_reflex"))+parseInt(nu.getProperty("temp_reflex"));
				nu.setProperty("reflex_tot", temp);
			} else if (prop === "base_will" || prop === "wis_mod" || prop === "misc_will" || prop === "temp_will") {
				var temp = parseInt(nu.getProperty("base_will"))+parseInt(nu.getProperty("wis_mod"))+parseInt(nu.getProperty("misc_will"))+parseInt(nu.getProperty("temp_will"));
				nu.setProperty("will_tot", temp);
			} else if (prop === "mel_bab" || prop === "mel_misc" || prop === "mel_temp") {
				var temp = parseInt(nu.getProperty("mel_bab"))+parseInt(nu.getProperty("mel_misc"))+parseInt(nu.getProperty("size_mod"))+parseInt(nu.getProperty("mel_temp"));
				nu.setProperty("mel_tab", temp);
			} else if (prop === "ran_bab" || prop === "ran_misc" || prop === "ran_temp") {
				var temp = parseInt(nu.getProperty("ran_bab"))+parseInt(nu.getProperty("ran_misc"))+parseInt(nu.getProperty("ran_temp"));
				nu.setProperty("ran_tab", temp);
			}		
		}, this);
		
// create our view card
joCache.set("sheet", function() {
	
	var row1col1 = new joGroup([
	new joFlexrow([
		new joLabel("Name:").setStyle({width: "35px"}),
		new joInput(nu.link("char_name")).setStyle({width: "100px"})]),
	new joFlexrow([
		new joLabel("Race:").setStyle({width: "35px"}),
		new joInput(nu.link("race")).setStyle({width: "100px"})]),
	new joFlexrow([
		new joLabel("Alignment:").setStyle({width: "35px"}),
		new joInput(nu.link("align")).setStyle({width: "100px"})]),
	new joFlexrow([
		new joLabel("Class:").setStyle({width: "35px"}),
		new joInput(nu.link("cclass")).setStyle({width: "100px"})])]);
	
var row1col2 = new joGroup([
	new joFlexrow([
		new joLabel("Level:").setStyle({width: "35px"}),
		new joInput(nu.link("level")).setStyle({width: "35px"})]),
	new joFlexrow([
		new joLabel("Total XP:").setStyle({width: "35px"}),
		new joInput(nu.link("tot_xp")).setStyle({width: "35px"})]),
	new joFlexrow([
		new joLabel("XP Change:").setStyle({width: "35px"}),
		new joInput(nu.link("xp_ch")).setStyle({width: "35px"})]),
	new joFlexrow([
		new joLabel("Next Level:").setStyle({width: "35px"}),
		new joInput(nu.link("nex_lvl_xp")).setStyle({width: "35px"})])]);
	
var row1col3 = new joGroup([
	new joFlexrow([
		new joLabel("Diety:").setStyle({width: "35px"}),
		new joInput(nu.link("diety")).setStyle({width: "35px"})]),
	new joFlexrow([
		new joLabel("Size:").setStyle({width: "35px"}),
		new joInput(nu.link("size")).setStyle({width: "35px"})]),
	new joFlexrow([
		new joLabel("Age:").setStyle({width: "35px"}),
		new joInput(nu.link("age")).setStyle({width: "35px"})]),
	new joFlexrow([
		new joLabel("Gender:").setStyle({width: "35px"}),
		new joInput(nu.link("gender")).setStyle({width: "35px"})])]);
	
var row1col4 = new joGroup([
	new joFlexrow([
		new joLabel("Height:").setStyle({width: "35px"}),
		new joInput(nu.link("height")).setStyle({width: "35px"})]),
	new joFlexrow([
		new joLabel("Weight:").setStyle({width: "35px"}),
		new joInput(nu.link("weight")).setStyle({width: "35px"})]),
	new joFlexrow([
		new joLabel("Eye Color:").setStyle({width: "35px"}),
		new joInput(nu.link("eyes")).setStyle({width: "35px"})]),
	new joFlexrow([
		new joLabel("Hair Color:").setStyle({width: "35px"}),
		new joInput(nu.link("hair")).setStyle({width: "35px"})])]);		
//contains ability score information
var row2col1 = new joGroup([
	new joFlexrow([
		new joLabel("Ability").setStyle({width: "35px"}),
		new joLabel("Score").setStyle({width: "35px"}),
		new joLabel("Mod").setStyle({width: "35px"}),
		new joLabel("Temp").setStyle({width: "35px"})]).setStyle({width: "225px"}),
	new joDivider(),
	new joFlexrow([
		new joLabel("STR").setStyle({width: "35px"}),
		new joInput(nu.link("str")).setStyle({width: "35px"}),
		new joInput(nu.link("str_mod")).setStyle({width: "35px"}),
		new joInput(nu.link("temp_str")).setStyle({width: "35px"})]).setStyle({width: "225px"}),
	new joFlexrow([
		new joLabel("DEX").setStyle({width: "35px"}),
		new joInput(nu.link("dex")).setStyle({width: "35px"}),
		new joInput(nu.link("dex_mod")).setStyle({width: "35px"}),
		new joInput(nu.link("temp_dex")).setStyle({width: "35px"})]).setStyle({width: "225px"}),
	new joFlexrow([
		new joLabel("CON").setStyle({width: "35px"}),
		new joInput(nu.link("con")).setStyle({width: "35px"}),
		new joInput(nu.link("con_mod")).setStyle({width: "35px"}),
		new joInput(nu.link("temp_con")).setStyle({width: "35px"})]).setStyle({width: "225px"}),
	new joFlexrow([
		new joLabel("INT").setStyle({width: "35px"}),
		new joInput(nu.link("int")).setStyle({width: "35px"}),
		new joInput(nu.link("int_mod")).setStyle({width: "35px"}),
		new joInput(nu.link("temp_int")).setStyle({width: "35px"})]).setStyle({width: "225px"}),
	new joFlexrow([
		new joLabel("WIS").setStyle({width: "35px"}),
		new joInput(nu.link("wis")).setStyle({width: "35px"}),
		new joInput(nu.link("wis_mod")).setStyle({width: "35px"}),
		new joInput(nu.link("temp_wis")).setStyle({width: "35px"})]).setStyle({width: "225px"}),
	new joFlexrow([
		new joLabel("CHA").setStyle({width: "35px"}),
		new joInput(nu.link("cha")).setStyle({width: "35px"}),
		new joInput(nu.link("cha_mod")).setStyle({width: "35px"}),
		new joInput(nu.link("temp_cha")).setStyle({width: "35px"})]).setStyle({width: "225px"})
]);
//contains HP, AC, INIT information
var row2col2 = new joGroup([
	new joFlexrow([
		new joLabel("Total HP").setStyle({width: "35px"}),
		new joLabel("Crnt HP").setStyle({width: "35px"}),
		new joLabel("Nonlethel").setStyle({width: "35px"}),
		new joLabel("Hit Dice").setStyle({width: "35px"}),
		new joLabel("Dmg Cut").setStyle({width: "35px"})]).setStyle({width: "450px"}),
	new joFlexrow([
		new joInput(nu.link("tot_hp")).setStyle({width: "35px"}),
		new joInput(nu.link("cur_hp")).setStyle({width: "35px"}),
		new joInput(nu.link("non_leth")).setStyle({width: "35px"}),
		new joInput(nu.link("hit_d")).setStyle({width: "35px"}),
		new joInput(nu.link("dmg_cut")).setStyle({width: "35px"})]).setStyle({width: "450px"}),
	new joDivider(),
	new joFlexrow([
		new joLabel("Total AC").setStyle({width: "35px"}),
		new joLabel("Armor AC").setStyle({width: "35px"}),
		new joLabel("Shield AC").setStyle({width: "35px"}),
		new joLabel("Dex Mod").setStyle({width: "35px"}),
		new joLabel("Misc Mod").setStyle({width: "35px"})]).setStyle({width: "375px"}),
	new joFlexrow([//*********************messed up labels
		new joInput(nu.link("tot_ac")).setStyle({width: "35px"}),
		new joInput(nu.link("armor")).setStyle({width: "35px"}),
		new joInput(nu.link("shield")).setStyle({width: "35px"}),
		new joInput(nu.link("dex_mod")).setStyle({width: "35px"}),
		new joInput(nu.link("misc_ac")).setStyle({width: "35px"})]).setStyle({width: "375px"}),
	new joDivider(),
	new joFlexrow([
		new joLabel("Touch AC").setStyle({width: "35px"}), 
		new joInput(nu.link("touch")).setStyle({width: "35px"}), 
		new joLabel("Flat-Footed").setStyle({width: "35px"}),
		new joInput(nu.link("flat_foot")).setStyle({width: "35px"})]).setStyle({width: "250px"}),
	new joDivider(),
	new joFlexrow([
		new joLabel("INIT").setStyle({width: "35px"}),
		new joLabel("Dex Mod").setStyle({width: "35px"}),
		new joLabel("Misc Mod").setStyle({width: "35px"}),
		new joLabel("Speed").setStyle({width: "35px"}),
		new joLabel("Armor Type").setStyle({width: "35px"})]).setStyle({width: "450px"}),
	new joFlexrow([
		new joInput(nu.link("init")).setStyle({width: "35px"}),
		new joInput(nu.link("dex_mod")).setStyle({width: "35px"}),
		new joInput(nu.link("misc_init")).setStyle({width: "35px"}),
		new joInput(nu.link("speed")).setStyle({width: "35px"}),
		new joInput(nu.link("armor_type")).setStyle({width: "35px"})]).setStyle({width: "450px"})
]);
//Contains saving throws 
var row3col1 = new joGroup([
	new joFlexrow([
		new joLabel("Saving Throws").setStyle({width: "35px"}),
		new joLabel("Total").setStyle({width: "35px"}),
		new joLabel("Base").setStyle({width: "35px"}),
		new joLabel("Ability Mod").setStyle({width: "35px"}),
		new joLabel("Misc Mod").setStyle({width: "35px"}),
		new joLabel("Temp Mod").setStyle({width: "35px"})]).setStyle({width: "500px"}),
	new joDivider(),
	new joFlexrow([
		new joLabel("FORT").setStyle({width: "35px"}),
		new joInput(nu.link("fort_tot")).setStyle({width: "35px"}),
		new joInput(nu.link("base_fort")).setStyle({width: "35px"}),
		new joInput(nu.link("con_mod")).setStyle({width: "35px"}),
		new joInput(nu.link("misc_fort")).setStyle({width: "35px"}),
		new joInput(nu.link("temp_fort")).setStyle({width: "35px"})]).setStyle({width: "500px"}),
	new joFlexrow([
		new joLabel("REFLEX").setStyle({width: "35px"}),
		new joInput(nu.link("reflex_tot")).setStyle({width: "35px"}),
		new joInput(nu.link("base_reflex")).setStyle({width: "35px"}),
		new joInput(nu.link("dex_mod")).setStyle({width: "35px"}),
		new joInput(nu.link("misc_reflex")).setStyle({width: "35px"}),
		new joInput(nu.link("temp_reflex")).setStyle({width: "35px"})]).setStyle({width: "500px"}),
	new joFlexrow([
		new joLabel("WILL").setStyle({width: "35px"}),
		new joInput(nu.link("will_tot")).setStyle({width: "35px"}),
		new joInput(nu.link("base_will")).setStyle({width: "35px"}),
		new joInput(nu.link("wis_mod")).setStyle({width: "35px"}),
		new joInput(nu.link("misc_will")).setStyle({width: "35px"}),
		new joInput(nu.link("temp_will")).setStyle({width: "35px"})]).setStyle({width: "500px"})
]);	
//Contains melee/ranged attack bonuses
var row3col2 = new joGroup([
	new joFlexrow([
		new joLabel("").setStyle({width: "35px"}),
		new joLabel("T.A.B.").setStyle({width: "35px"}),
		new joLabel("B.A.B.").setStyle({width: "35px"}),
		new joLabel("Mods").setStyle({width: "35px"}),
		new joLabel("Temp").setStyle({width: "35px"})]),
	new joFlexrow([
		new joLabel("Melee").setStyle({width: "35px"}),
		new joInput(nu.link("mel_tab")).setStyle({width: "35px"}),
		new joInput(nu.link("mel_bab")).setStyle({width: "35px"}),
		new joInput(nu.link("mel_misc")).setStyle({width: "35px"}),
		new joInput(nu.link("mel_temp")).setStyle({width: "35px"})]),
	new joFlexrow([
		new joLabel("Ranged").setStyle({width: "35px"}),
		new joInput(nu.link("ran_tab")).setStyle({width: "35px"}),
		new joInput(nu.link("ran_bab")).setStyle({width: "35px"}),
		new joInput(nu.link("ran_misc")).setStyle({width: "35px"}),
		new joInput(nu.link("ran_temp")).setStyle({width: "35px"})])
]);	
//TODO: Give this a little error handling
var save_button = new joButton("Save Changes").selectEvent.subscribe(function() {
	Data.save(sheet_name.getProperty("name"), nu.getData());
	alert('Data Saved as "' + sheet_name.getProperty("name") + '"!');
}); 
//TODO: Give this a little error handling
var load_button = new joButton("Load Sheet").selectEvent.subscribe(function() {
	var test = Data.load(sheet_name.getProperty("name"));
	nu.setData(test);
	alert('Data loaded from "' + sheet_name.getProperty("name") + '"!');
});
//TODO: create this function and add error handling
var delete_button = new joButton("Delete Sheet").selectEvent.subscribe(function() {
	
});
//change nu property, and it updates
var sheet_name = new joRecord({"name":""});

var slct = ["Character Sheet","Spells/Feats/Skills","Inventory"];

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
		new joFlexrow([row1col1,row1col2,row1col3,row1col4]),
		new joFlexrow([row2col1,row2col2]),
		new joFlexrow([row3col1,row3col2]),
		new joFlexrow([
			new joLabel("Sheet Name"), 
			new joInput(sheet_name.link("name")),
			save_button, 
			load_button,
			delete_button])
	]).setTitle("Character Sheet");
	return card;
});
this.stack.push(joCache.get("sheet"));
	}
};

