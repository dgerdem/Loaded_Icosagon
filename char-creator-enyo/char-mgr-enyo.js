var nu = new Blank_Sheet("lol OOP");
enyo.log(nu);

enyo.kind({
	name: "enyo.Canon.lico_char_edit",
	kind: enyo.VFlexBox,
	components: [
		{kind: "Scroller", flex: 1, components: [
			{kind:"Toolbar", components: [
				{kind: "IntegerPicker", label: "Character Sheet", min: 0, max: 10},
				{kind: "Button", caption:"Save"},
				{kind: "Button", caption:"Load"},
				{kind: "Button", caption:"Delete"},
				{kind:"Spacer"},
				{kind:"RadioToolButtonGroup", components:[
					{label: 'Sheet', value: 0},
					{label: 'SFS', value: 1},
					{label: 'Items', value: 2}
				]}
			]},
			{kind: "DividerDrawer" ,flex: 1, caption: "Character Information", components: [
				{kind: "HFlexBox", components: [
					{kind: "RowGroup",flex: 1, components: [
						{kind: "Input", name:"name1", hint:"Character Name"},
						{kind: "Input", name:"race", hint:"Race"},
						{kind: "Input", name:"alignment", hint:"Alignment"},
						{kind: "Input", name:"class1", hint:"Class"}
					]},
					{kind: "RowGroup",flex: 1, components: [
						{kind: "Input", name:"level", hint:"Character Level"},
						{kind: "Input", name:"tot_xp", hint:"Total XP"},
						{kind: "Input", name:"xp_change", hint:"XP Change"},
						{kind: "Input", name:"next_lvl", hint:"Next Level"}
					]},
					{kind: "RowGroup",flex: 1, components: [
						{kind: "Input", name:"diety", hint:"Diety"},
						{kind: "Input", name:"size", hint:"Character Size"},
						{kind: "Input", name:"age", hint:"Character Age"},
						{kind: "Input", name:"gender", hint:"Gender"}
					]},
					{kind: "RowGroup",flex: 1, components: [
						{kind: "Input", name:"height", hint:"Height"},
						{kind: "Input", name:"weight", hint:"Weight"},
						{kind: "Input", name:"eye_color", hint:"Eye Color"},
						{kind: "Input", name:"hair_color", hint:"Hair Color"}
					]}
				]}
			]},
		
			{kind: "DividerDrawer",open:false ,flex: 1, caption: "Player Stats", components: [
				{kind:"Group", components:[
					{kind: "HFlexBox", components: [
						{kind:"Group",style:"width:36px", components:[
							{className: "enyo-picker-label", style:"margin:-11px 0px -11px 0px", content: "Ability"},
							{className: "enyo-picker-label", style:"margin:-15px 0px -15px 0px", content: "STR"},
							{className: "enyo-picker-label", style:"margin:-15px 0px -15px 0px", content: "DEX"},
							{className: "enyo-picker-label", style:"margin:-15px 0px -15px 0px", content: "CON"},
							{className: "enyo-picker-label", style:"margin:-15px 0px -15px 0px", content: "INT"},
							{className: "enyo-picker-label", style:"margin:-17px 0px -17px 0px", content: "WIS"},
							{className: "enyo-picker-label", style:"margin:-11px 0px -15px 0px", content: "CHA"}
						]},
						{kind:"Group",style:"width:36px", components:[
							{className: "enyo-picker-label", content: "Score"},
							{kind:"Input", name:"str", style:"margin:-10px 0px -10px 0px"},
							{kind:"Input", name:"dex", style:"margin:-10px 0px -10px 0px"},
							{kind:"Input", name:"con", style:"margin:-10px 0px -10px 0px"},
							{kind:"Input", name:"int", style:"margin:-10px 0px -10px 0px"},
							{kind:"Input", name:"wis", style:"margin:-10px 0px -10px 0px"},
							{kind:"Input", name:"cha", style:"margin:-10px 0px -10px 0px"}
						]},
						{kind:"Group",style:"width:36px", components:[ //read only
							{className: "enyo-picker-label", content: "Mod"},
							{kind:"Input", name:"str_mod", style:"margin:-10px 0px -10px 0px"},
							{kind:"Input", name:"dex_mod", style:"margin:-10px 0px -10px 0px"},
							{kind:"Input", name:"con_mod", style:"margin:-10px 0px -10px 0px"},
							{kind:"Input", name:"int_mod", style:"margin:-10px 0px -10px 0px"},
							{kind:"Input", name:"wis_mod", style:"margin:-10px 0px -10px 0px"},
							{kind:"Input", name:"cha_mod", style:"margin:-10px 0px -10px 0px"}
						]},
						{kind:"Group",style:"width:36px", components:[
							{className: "enyo-picker-label", content: "Temp"},
							{kind:"Input", name:"temp_str", style:"margin:-10px 0px -10px 0px"},
							{kind:"Input", name:"temp_dex", style:"margin:-10px 0px -10px 0px"},
							{kind:"Input", name:"temp_con", style:"margin:-10px 0px -10px 0px"},
							{kind:"Input", name:"temp_int", style:"margin:-10px 0px -10px 0px"},
							{kind:"Input", name:"temp_wis", style:"margin:-10px 0px -10px 0px"},
							{kind:"Input", name:"temp_cha", style:"margin:-10px 0px -10px 0px"}
						]},
						{kind:"Group",flex: 1, components:[
							{kind:"HFlexBox", style:"margin:-10px 0px -10px 0px",flex: 1, components:[
								{kind:"RowGroup",flex: 1, caption:"Total HP", components:[
									{kind:"Input", name:"tot_hp"}
								]},
								{className: "enyo-picker-label", content: "="},
								{kind:"RowGroup",flex: 1, caption:"Current HP", components:[
									{kind:"Input", name:"cur_hp"}
								]},
								{kind:"RowGroup",flex: 1, caption:"Nonlethal", components:[
									{kind:"Input", name:"non_leth"}
								]},
								{kind:"Spacer", style:"margin:0px -15px 0px -15px"},
								{kind:"RowGroup",flex: 1, caption:"Hit Dice", components:[
									{kind:"Input", name:"hit_d"}
								]},
								{kind:"RowGroup", flex: 1,caption:"Damage Cut", components:[
									{kind:"Input", name:"dmg_cut"}
								]}
							]},
							{kind:"HFlexBox", style:"margin:-10px 0px -10px 0px",flex: 1, components:[
								{kind:"RowGroup",flex: 1, caption:"Total AC", components:[
									{kind:"Input", name:"tot_ac"}
								]},
								{className: "enyo-picker-label", content: "="},
								{kind:"RowGroup",flex: 1, caption:"Armor AC", components:[
									{kind:"Input", name:"armor"}
								]},
								{kind:"RowGroup",flex: 1, caption:"Shield AC", components:[
									{kind:"Input", name:"shield"}
								]},
								{kind:"RowGroup",flex: 1, caption:"Dex Mod", components:[
									{kind:"Input", name:"dex_mod2"}
								]},
								{kind:"RowGroup", flex: 1,caption:"Misc Mod", components:[
									{kind:"Input", name:"misc_ac"}
								]}
							]},
							{kind:"HFlexBox", style:"margin:-10px 0px -10px 0px",style:"width:300px",flex: 1, components:[
								{kind:"RowGroup",flex: 1, caption:"Touch AC", components:[
									{kind:"Input", name:"touch"}
								]},
								{kind:"RowGroup",flex: 1, caption:"Flat Footed", components:[
									{kind:"Input", name:"flat_foot"}
								]}
							]},
							{kind:"HFlexBox", style:"margin:-10px 0px -10px 0px",flex: 1, components:[
								{kind:"RowGroup",flex: 1, caption:"INIT", components:[
									{kind:"Input", name:"init"}
								]},
								{className: "enyo-picker-label", content: "="},
								{kind:"RowGroup",flex: 1, caption:"Dex Mod", components:[
									{kind:"Input", name:"dex_mod3"}
								]},
								{kind:"RowGroup",flex: 1, caption:"Misc Mod", components:[
									{kind:"Input", name:"misc_init"}
								]},
								{kind:"Spacer", style:"margin:0px -10px 0px -10px"},
								{kind:"RowGroup",flex: 1, caption:"Speed", components:[
									{kind:"Input", name:"speed"}
								]},
								{kind:"RowGroup",flex: 1, caption:"Armor Type", components:[
									{kind:"Input", name:"armor_type"}
								]},
						
							]}
						]}	
					]}
				]},
				{kind:"Group", components: [
					{kind: "HFlexBox", components: [
						{kind:"Group",style:"width:50px", components:[
							{className: "enyo-picker-label", style:"margin:-11px 0px -11px 0px", content: "Saves"},
							{className: "enyo-picker-label", style:"margin:-15px 0px -15px 0px", content: "FORT"},
							{className: "enyo-picker-label", style:"margin:-15px 0px -15px 0px", content: "REFLEX"},
							{className: "enyo-picker-label", style:"margin:-15px 0px -15px 0px", content: "WILL"},
						]},
						{kind:"Group",style:"width:37px", components:[//read only
							{className: "enyo-picker-label", content: "Total"},
							{kind:"Input", name:"fort_tot", style:"margin:-10px 0px -10px 0px"},
							{kind:"Input", name:"reflex_tot", style:"margin:-10px 0px -10px 0px"},
							{kind:"Input", name:"will_tot", style:"margin:-10px 0px -10px 0px"},

						]},
						{className: "enyo-picker-label", content: "="},
						{kind:"Group",style:"width:37px", components:[
							{className: "enyo-picker-label", content: "Base"},
							{kind:"Input", name:"base_fort", style:"margin:-10px 0px -10px 0px"},
							{kind:"Input", name:"base_reflex", style:"margin:-10px 0px -10px 0px"},
							{kind:"Input", name:"base will", style:"margin:-10px 0px -10px 0px"},
						]},
						{kind:"Group",style:"width:37px", components:[
							{className: "enyo-picker-label", content: "Ability"},
							{kind:"Input", name:"con_mod2", style:"margin:-10px 0px -10px 0px"},
							{kind:"Input", name:"dex_mod4", style:"margin:-10px 0px -10px 0px"},
							{kind:"Input", name:"wis_mod2", style:"margin:-10px 0px -10px 0px"},
						]},
						{kind:"Group",style:"width:37px", components:[
							{className: "enyo-picker-label", content: "Misc"},
							{kind:"Input", name:"misc_fort", style:"margin:-10px 0px -10px 0px"},
							{kind:"Input", name:"misc_reflex", style:"margin:-10px 0px -10px 0px"},
							{kind:"Input", name:"misc_will", style:"margin:-10px 0px -10px 0px"},
						]},
						{kind:"Group",style:"width:37px", components:[
							{className: "enyo-picker-label", content: "Temp"},
							{kind:"Input", name:"temp_fort", style:"margin:-10px 0px -10px 0px"},
							{kind:"Input", name:"temp_reflex", style:"margin:-10px 0px -10px 0px"},
							{kind:"Input", name:"temp_will", style:"margin:-10px 0px -10px 0px"},
						]},
						{kind:"Spacer"},
						{kind:"Group",style:"width:50px", components:[
							{className: "enyo-picker-label", style:"margin:-11px 0px -11px 0px", content: "ATTACK"},
							{className: "enyo-picker-label", style:"margin:-15px 0px -15px 0px", content: "MELEE"},
							{className: "enyo-picker-label", style:"margin:-15px 0px -15px 0px", content: "RANGE"}
						]},
						{kind:"Group",style:"width:37px", components:[//read only
							{className: "enyo-picker-label", content: "T.A.B."},
							{kind:"Input", name:"mel_tab", style:"margin:-10px 0px -10px 0px"},
							{kind:"Input", name:"ran_tab", style:"margin:-10px 0px -10px 0px"}
						]},
						{className: "enyo-picker-label", content: "="},
						{kind:"Group",style:"width:37px", components:[
							{className: "enyo-picker-label", content: "B.A.B."},
							{kind:"Input", name:"mel_bab", style:"margin:-10px 0px -10px 0px"},
							{kind:"Input", name:"ran_bab", style:"margin:-10px 0px -10px 0px"}
						]},
						{kind:"Group",style:"width:37px", components:[
							{className: "enyo-picker-label", content: "Mods"},
							{kind:"Input", name:"mel_misc", style:"margin:-10px 0px -10px 0px"},
							{kind:"Input", name:"ran_misc", style:"margin:-10px 0px -10px 0px"}
						]},
						{kind:"Group",style:"width:37px", components:[
							{className: "enyo-picker-label", content: "Temp"},
							{kind:"Input", name:"mel_temp", style:"margin:-10px 0px -10px 0px"},
							{kind:"Input", name:"ran_temp", style:"margin:-10px 0px -10px 0px"}
						]}		
					]}
				]}
			]}
		]}
	]});
