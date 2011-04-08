// initialize jo
jo.load();

// setup a stack and screen
var stack = new joStackScroller();
var scn = new joScreen(stack);
var row1col1 = new joGroup([
	new joLabel("Name: "),
	new joLabel("Race: "),
	new joLabel("Alignment: "),
	new joLabel("Class: ")]);
var row1col2 = new joGroup([
	new joLabel("Level: "),
	new joLabel("Total XP: "),
	new joLabel("XP Change: "),
	new joLabel("Next Level: ")]);
var row1col3 = new joGroup([
	new joLabel("Diety: "),
	new joLabel("Size: "),
	new joLabel("Age: "),
	new joLabel("Gender: ")]);
var row1col4 = new joGroup([
	new joLabel("Height: "),
	new joLabel("Weight: "),,
	new joLabel("Eye Color: "),
	new joLabel("Hair Color: ")]);		
//contains ability score information
var row2col1 = new joGroup([
	new joFlexrow([new joLabel("Ability").setStyle({width: "35px"}),new joLabel("Score").setStyle({width: "35px"}),new joLabel("Mod").setStyle({width: "35px"}),new joLabel("Temp").setStyle({width: "35px"})]).setStyle({width: "225px"}),
	new joDivider(),
	new joFlexrow([new joLabel("STR").setStyle({width: "35px"}),new joInput("").setStyle({width: "35px"}),new joInput("").setStyle({width: "35px"}),new joInput("").setStyle({width: "35px"})]).setStyle({width: "225px"}),
	new joFlexrow([new joLabel("DEX").setStyle({width: "35px"}),new joInput("").setStyle({width: "35px"}),new joInput("").setStyle({width: "35px"}),new joInput("").setStyle({width: "35px"})]).setStyle({width: "225px"}),
	new joFlexrow([new joLabel("CON").setStyle({width: "35px"}),new joInput("").setStyle({width: "35px"}),new joInput("").setStyle({width: "35px"}),new joInput("").setStyle({width: "35px"})]).setStyle({width: "225px"}),
	new joFlexrow([new joLabel("INT").setStyle({width: "35px"}),new joInput("").setStyle({width: "35px"}),new joInput("").setStyle({width: "35px"}),new joInput("").setStyle({width: "35px"})]).setStyle({width: "225px"}),
	new joFlexrow([new joLabel("WIS").setStyle({width: "35px"}),new joInput("").setStyle({width: "35px"}),new joInput("").setStyle({width: "35px"}),new joInput("").setStyle({width: "35px"})]).setStyle({width: "225px"}),
	new joFlexrow([new joLabel("CHA").setStyle({width: "35px"}),new joInput("").setStyle({width: "35px"}),new joInput("").setStyle({width: "35px"}),new joInput("").setStyle({width: "35px"})]).setStyle({width: "225px"})
]);
//contains HP, AC, INIT information
var row2col2 = new joGroup([
	new joFlexrow([new joLabel("Total HP").setStyle({width: "35px"}),new joLabel("Crnt HP").setStyle({width: "35px"}),new joLabel("Nonlethel").setStyle({width: "35px"}),new joLabel("Hit Dice").setStyle({width: "35px"}),new joLabel("Dmg Cut").setStyle({width: "35px"})]).setStyle({width: "450px"}),
	new joFlexrow([new joInput().setStyle({width: "35px"}),new joInput().setStyle({width: "35px"}),new joInput().setStyle({width: "35px"}),new joInput().setStyle({width: "35px"}),new joInput().setStyle({width: "35px"})]).setStyle({width: "450px"}),
	new joDivider(),
	new joFlexrow([new joLabel("Total AC").setStyle({width: "35px"}),new joLabel("Armor").setStyle({width: "35px"}),new joLabel("Shield").setStyle({width: "35px"}),new joLabel("Dex Mod").setStyle({width: "35px"}),new joLabel("Misc Mod").setStyle({width: "35px"})]).setStyle({width: "375px"}),
	new joFlexrow([new joInput().setStyle({width: "35px"}),new joInput().setStyle({width: "35px"}),new joInput().setStyle({width: "35px"}),new joInput().setStyle({width: "35px"}),new joInput().setStyle({width: "35px"})]).setStyle({width: "375px"}),
	new joDivider(),
	new joFlexrow([new joLabel("Touch AC").setStyle({width: "35px"}), new joInput().setStyle({width: "35px"}), new joLabel("Flat-Footed").setStyle({width: "35px"}),new joInput().setStyle({width: "35px"})]).setStyle({width: "250px"}),
	new joDivider(),
	new joFlexrow([new joLabel("INIT").setStyle({width: "35px"}),new joLabel("Dex Mod").setStyle({width: "35px"}),new joLabel("Misc Mod").setStyle({width: "35px"}),new joLabel("Speed").setStyle({width: "35px"}),new joLabel("Armor Type").setStyle({width: "35px"})]).setStyle({width: "450px"}),
	new joFlexrow([new joInput().setStyle({width: "35px"}),new joInput().setStyle({width: "35px"}),new joInput().setStyle({width: "35px"}),new joInput().setStyle({width: "35px"}),new joInput().setStyle({width: "35px"})]).setStyle({width: "450px"})
]);
//Contains saving throws 
var row3col1 = new joGroup([
	new joFlexrow([new joLabel("Saving Throws").setStyle({width: "35px"}),new joLabel("Total").setStyle({width: "35px"}),new joLabel("Base").setStyle({width: "35px"}),new joLabel("Ability Mod").setStyle({width: "35px"}),new joLabel("Misc Mod").setStyle({width: "35px"}),new joLabel("Temp Mod").setStyle({width: "35px"})]).setStyle({width: "500px"}),
	new joDivider(),
	new joFlexrow([new joLabel("FORT").setStyle({width: "35px"}),new joInput().setStyle({width: "35px"}),new joInput().setStyle({width: "35px"}),new joInput().setStyle({width: "35px"}),new joInput().setStyle({width: "35px"}),new joInput().setStyle({width: "35px"})]).setStyle({width: "500px"}),
	new joFlexrow([new joLabel("REFLEX").setStyle({width: "35px"}),new joInput().setStyle({width: "35px"}),new joInput().setStyle({width: "35px"}),new joInput().setStyle({width: "35px"}),new joInput().setStyle({width: "35px"}),new joInput().setStyle({width: "35px"})]).setStyle({width: "500px"}),
	new joFlexrow([new joLabel("WILL").setStyle({width: "35px"}),new joInput().setStyle({width: "35px"}),new joInput().setStyle({width: "35px"}),new joInput().setStyle({width: "35px"}),new joInput().setStyle({width: "35px"}),new joInput().setStyle({width: "35px"})]).setStyle({width: "500px"})
]);	
//Contains melee/ranged attack bonuses
var row3col2 = new joGroup([
	new joFlexrow([new joLabel("").setStyle({width: "35px"}),new joLabel("T.A.B.").setStyle({width: "35px"}),new joLabel("B.A.B.").setStyle({width: "35px"}),new joLabel("Mods").setStyle({width: "35px"}),new joLabel("Temp").setStyle({width: "35px"})]),
	new joFlexrow([new joLabel("Melee").setStyle({width: "35px"}),new joInput().setStyle({width: "35px"}),new joInput().setStyle({width: "35px"}),new joInput().setStyle({width: "35px"}),new joInput().setStyle({width: "35px"})]),
	new joFlexrow([new joLabel("Ranged").setStyle({width: "35px"}),new joInput().setStyle({width: "35px"}),new joInput().setStyle({width: "35px"}),new joInput().setStyle({width: "35px"}),new joInput().setStyle({width: "35px"})])
]);	
 
var slct = ["Character Sheet","Skills/Spells/Feats","Inventory"];
// create our view card
var card = new joCard([
    new joFlexrow([new joOption(slct)]),
	new joFlexrow([row1col1,row1col2,row1col3,row1col4]),
	new joFlexrow([row2col1,row2col2]),
	new joFlexrow([row3col1,row3col2])
]);

// put the card on our view stack
stack.push(card);
