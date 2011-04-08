App = {
	load: function() {
		jo.load();
		this.scn = new joScreen(
			new joContainer([
				new joFlexcol([
					this.nav = new joNavbar(),
					this.stack = new joStackScroller()
				])
			]));
		this.nav.setStack(this.stack);
		
		var slct = ["Login/Chat","Action Console","Spells/Feats/Skills","Inventory","Character Sheet"];
//holds info for login
		var row1col1 = new joGroup([
			new joFlexrow([new joLabel("Player name").setStyle({width: "35px"}),new joInput().setStyle({width: "35px"})]),
			new joFlexrow([new joLabel("Password").setStyle({width: "35px"}),new joInput().setStyle({width: "35px"})]),
			new joFlexrow([new joLabel("Host IP").setStyle({width: "35px"}),new joInput().setStyle({width: "35px"})]),
			new joFlexrow([new joLabel("Host Port").setStyle({width: "35px"}),new joInput().setStyle({width: "35px"})]),
			new joButton("Log In")	
		]);
//holds an output console
		var row1col2 = new joGroup([
			new joLabel("Output Console"),
			new joFlexcol([new joTextarea().setStyle({minHeight: "100px",maxHeight: "100px"})])
		]); 
//private chat box
		var row2col1 = new joGroup([
			new joFlexrow([new joLabel("Player").setStyle({width: "35px"}), new joSelect(["player1","player2","player3"])]),
			new joLabel("Private Messages"),
			new joFlexcol([new joTextarea().setStyle({minHeight: "100px",maxHeight: "100px"})]),
			new joButton("Send Message to ")
		]);
//all chat (needs work
		var row2col2 = new joGroup([
			new joFlexrow([new joLabel("Player").setStyle({width: "35px"}), new joSelect(["player1","player2","player3"])]),
			new joLabel("Public Messages"),
			new joFlexcol([new joTextarea().setStyle({minHeight: "100px",maxHeight: "100px"})]),
			new joButton("Send Message to all")
		]);		
//sets up the joCache for on-demand retrieval
		joCache.set("login", function() {
			return new joCard([
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
				new joFlexrow([row1col1,row1col2]),
				new joFlexrow([row2col1,row2col2])
			]).setTitle("Login and Chat");
		});
		
		this.stack.push(joCache.get("login"));
	}
};
