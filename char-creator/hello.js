// initialize jo
jo.load();

// setup a stack and screen
var stack = new joStackScroller();
var scn = new joScreen(stack);
var group1 = new joGroup([
	new joLabel("Name"),
	new joInput(""),
	new joLabel("Race"),
	new joInput(""),
	new joLabel("Alignment"),
	new joInput(""),
	new joLabel("Class"),
	new joInput("")]);
var group2 = new joGroup([
	new joLabel("Level"),
	new joInput("").setStyle({width: "35px"}),
	new joLabel("Total XP"),
	new joInput("").setStyle({width: "75px"}),
	new joLabel("XP Change"),
	new joInput("").setStyle({width: "75px"}),
	new joLabel("Next Level"),
	new joInput("").setStyle({width: "75px"})]);
var group3 = new joGroup([
	new joLabel("Diety"),
	new joInput("").setStyle({width: "150px"}),
	new joLabel("Size"),
	new joInput("").setStyle({width: "150px"}),
	new joLabel("Age"),
	new joInput("").setStyle({width: "150px"}),
	new joLabel("Gender"),
	new joInput("").setStyle({width: "150px"})]);
var group4 = new joGroup([
	new joLabel("Height"),
	new joInput("").setStyle({width: "75px"}),
	new joLabel("Weight"),
	new joInput("").setStyle({width: "75px"}),
	new joLabel("Eye Color"),
	new joInput("").setStyle({width: "75px"}),
	new joLabel("Hair Color"),
	new joInput("").setStyle({width: "75px"})]);		

var statGroup1 = new joGroup([
	new joFlexrow([new joLabel("Ability").setStyle({width: "35px"}),new joLabel("Score").setStyle({width: "35px"}),new joLabel("Mod").setStyle({width: "35px"}),new joLabel("Temp").setStyle({width: "35px"})]),
	new joFlexrow([new joLabel("STR").setStyle({width: "35px"}),new joInput("").setStyle({width: "35px"}),new joInput("").setStyle({width: "35px"}),new joInput("").setStyle({width: "35px"})]),
	new joFlexrow([new joLabel("DEX").setStyle({width: "35px"}),new joInput("").setStyle({width: "35px"}),new joInput("").setStyle({width: "35px"}),new joInput("").setStyle({width: "35px"})]),
	new joFlexrow([new joLabel("CON").setStyle({width: "35px"}),new joInput("").setStyle({width: "35px"}),new joInput("").setStyle({width: "35px"}),new joInput("").setStyle({width: "35px"})]),
	new joFlexrow([new joLabel("INT").setStyle({width: "35px"}),new joInput("").setStyle({width: "35px"}),new joInput("").setStyle({width: "35px"}),new joInput("").setStyle({width: "35px"})]),
	new joFlexrow([new joLabel("WIS").setStyle({width: "35px"}),new joInput("").setStyle({width: "35px"}),new joInput("").setStyle({width: "35px"}),new joInput("").setStyle({width: "35px"})]),
	new joFlexrow([new joLabel("CHA").setStyle({width: "35px"}),new joInput("").setStyle({width: "35px"}),new joInput("").setStyle({width: "35px"}),new joInput("").setStyle({width: "35px"})])
]);

var statGroup2 = new joGroup();

var slct = ["Character Sheet","Skills/Spells/Feats","Inventory"];
// create our view card
var card = new joCard([
    new joFlexrow([new joOption(slct)]),
	new joFlexrow([group1, group2, group3, group4]),
	new joFlexrow([statGroup1,statGroup2]),
    new joButton("OK").selectEvent.subscribe(function() {
        stack.hide();
    })
]);

// put the card on our view stack
stack.push(card);
