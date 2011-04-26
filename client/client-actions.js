
joCache.set("action", function() {

var slct = ["Login/Chat","Action Console","Spells/Feats/Skills","Inventory","Character Sheet"];
//attack rolls
var row1col1 = new joGroup([
	new joLabel("Choose Attack"),
	new joFlexrow([
		new joSelect(['test']),/*need select event*/
		new joLabel("Mods").setStyle({width: "35px"}),
		new joInput().setStyle({width: "35px"})]),
	new joLabel("Secondary Attack"),
	new joFlexrow([
		new joSelect(['test']),/*need select event*/
		new joLabel("Mods").setStyle({width: "35px"}),
		new joInput().setStyle({width: "35px"})]),
	new joButton("Rollin'")		
]);

//skill rolls
var row1col2 = new joGroup([
	new joLabel("Skill Roll"),
	new joFlexrow([
		new joSelect(['test']),/*need select event*/
		new joLabel("Mods").setStyle({width: "35px"}), 
		new joInput().setStyle({width: "35px"})]),
	new joButton("They see me rollin'")
]);
//ability checks and saves
var row1col3 = new joGroup([
	new joLabel("Ability Checks"),
	new joFlexrow([
		new joSelect(['test']),/*need select event*/ 
		new joButton("Check yo self!")]),
	new joLabel("Saving Throws"),
	new joFlexrow([
		new joSelect(['test']),/*need select event*/ 
		new joButton("Save me Jebus!")])
]);
//spell and maybe feats caster
var row2col1 = new joGroup([
	new joLabel("Put something cool here for casting spells")
]);



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
		new joFlexrow([row1col1,row1col2,row1col3]),
		new joFlexrow([row2col1])
	]).setTitle("Action Console");
	return card;
});

