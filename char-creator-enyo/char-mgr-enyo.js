
var nu = Blank_Sheet;

enyo.kind({
	name: "enyo.Canon.lico_char_edit",
	kind: enyo.VFlexBox,
	blah:Blank_Sheet,
	test:function(insend){
		var temp = insend.name;
		var temp2 = insend.value;
		eval("nu."+temp+"="+"'"+temp2+"'");
		enyo.log(nu.race);
	},
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
						{kind: "Input", name:"name1", hint:"Character Name", value:nu.char_name},
						{kind: "Input", name:"race", hint:"Race", value:nu.race, onchange:'test'},
						{kind: "Input", name:"alignment", hint:"Alignment", value:nu.align},
						{kind: "Input", name:"class1", hint:"Class", value:nu.cclass}
					]},
					{kind: "RowGroup",flex: 1, components: [
						{kind: "Input", name:"level", hint:"Character Level", value:nu.level},
						{kind: "Input", name:"tot_xp", hint:"Total XP", value:nu.tot_xp},
						{kind: "Input", name:"xp_change", hint:"XP Change", value:nu.xp_ch},
						{kind: "Input", name:"next_lvl", hint:"Next Level", value:nu.nex_lvl_xp}
					]},
					{kind: "RowGroup",flex: 1, components: [
						{kind: "Input", name:"diety", hint:"Diety", value:nu.diety},
						{kind: "Input", name:"size", hint:"Character Size", value:nu.size},
						{kind: "Input", name:"age", hint:"Character Age", value:nu.age},
						{kind: "Input", name:"gender", hint:"Gender", value:nu.gender}
					]},
					{kind: "RowGroup",flex: 1, components: [
						{kind: "Input", name:"height", hint:"Height", value:nu.height},
						{kind: "Input", name:"weight", hint:"Weight", value:nu.weight},
						{kind: "Input", name:"eye_color", hint:"Eye Color", value:nu.eyes},
						{kind: "Input", name:"hair_color", hint:"Hair Color", value:nu.hair}
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
							{kind:"Input", name:"str", style:"margin:-10px 0px -10px 0px", value:nu.str},
							{kind:"Input", name:"dex", style:"margin:-10px 0px -10px 0px", value:nu.dex},
							{kind:"Input", name:"con", style:"margin:-10px 0px -10px 0px", value:nu.con},
							{kind:"Input", name:"int", style:"margin:-10px 0px -10px 0px", value:nu.int1},
							{kind:"Input", name:"wis", style:"margin:-10px 0px -10px 0px", value:nu.wis},
							{kind:"Input", name:"cha", style:"margin:-10px 0px -10px 0px", value:nu.cha}
						]},
						{kind:"Group",style:"width:36px", components:[ //read only
							{className: "enyo-picker-label", content: "Mod"},
							{kind:"Input", name:"str_mod", style:"margin:-10px 0px -10px 0px", value:nu.str_mod},
							{kind:"Input", name:"dex_mod", style:"margin:-10px 0px -10px 0px", value:nu.dex_mod},
							{kind:"Input", name:"con_mod", style:"margin:-10px 0px -10px 0px", value:nu.con_mod},
							{kind:"Input", name:"int_mod", style:"margin:-10px 0px -10px 0px", value:nu.int_mod},
							{kind:"Input", name:"wis_mod", style:"margin:-10px 0px -10px 0px", value:nu.wis_mod},
							{kind:"Input", name:"cha_mod", style:"margin:-10px 0px -10px 0px", value:nu.cha_mod}
						]},
						{kind:"Group",style:"width:36px", components:[
							{className: "enyo-picker-label", content: "Temp"},
							{kind:"Input", name:"temp_str", style:"margin:-10px 0px -10px 0px", value:nu.temp_str},
							{kind:"Input", name:"temp_dex", style:"margin:-10px 0px -10px 0px", value:nu.temp_dex},
							{kind:"Input", name:"temp_con", style:"margin:-10px 0px -10px 0px", value:nu.temp_con},
							{kind:"Input", name:"temp_int", style:"margin:-10px 0px -10px 0px", value:nu.temp_int},
							{kind:"Input", name:"temp_wis", style:"margin:-10px 0px -10px 0px", value:nu.temp_wis},
							{kind:"Input", name:"temp_cha", style:"margin:-10px 0px -10px 0px", value:nu.temp_con}
						]},
						{kind:"Group",flex: 1, components:[
							{kind:"HFlexBox", style:"margin:-10px 0px -10px 0px",flex: 1, components:[
								{kind:"RowGroup",flex: 1, caption:"Total HP", components:[
									{kind:"Input", name:"tot_hp", value:nu.tot_hp}
								]},
								{className: "enyo-picker-label", content: "="},
								{kind:"RowGroup",flex: 1, caption:"Current HP", components:[
									{kind:"Input", name:"cur_hp", value:nu.cur_hp}
								]},
								{kind:"RowGroup",flex: 1, caption:"Nonlethal", components:[
									{kind:"Input", name:"non_leth", value:nu.non_leth}
								]},
								{kind:"Spacer", style:"margin:0px -15px 0px -15px"},
								{kind:"RowGroup",flex: 1, caption:"Hit Dice", components:[
									{kind:"Input", name:"hit_d", value:nu.hit_d}
								]},
								{kind:"RowGroup", flex: 1,caption:"Damage Cut", components:[
									{kind:"Input", name:"dmg_cut", value:nu.dmg_cut}
								]}
							]},
							{kind:"HFlexBox", style:"margin:-10px 0px -10px 0px",flex: 1, components:[
								{kind:"RowGroup",flex: 1, caption:"Total AC", components:[
									{kind:"Input", name:"tot_ac", value:nu.tot_ac}
								]},
								{className: "enyo-picker-label", content: "="},
								{kind:"RowGroup",flex: 1, caption:"Armor AC", components:[
									{kind:"Input", name:"armor", value:nu.armor}
								]},
								{kind:"RowGroup",flex: 1, caption:"Shield AC", components:[
									{kind:"Input", name:"shield", value:nu.shield}
								]},
								{kind:"RowGroup",flex: 1, caption:"Dex Mod", components:[
									{kind:"Input", name:"dex_mod2", value:nu.dex_mod}
								]},
								{kind:"RowGroup", flex: 1,caption:"Misc Mod", components:[
									{kind:"Input", name:"misc_ac", value:nu.misc_ac}
								]}
							]},
							{kind:"HFlexBox", style:"margin:-10px 0px -10px 0px",style:"width:300px",flex: 1, components:[
								{kind:"RowGroup",flex: 1, caption:"Touch AC", components:[
									{kind:"Input", name:"touch", value:nu.touch}
								]},
								{kind:"RowGroup",flex: 1, caption:"Flat Footed", components:[
									{kind:"Input", name:"flat_foot", value:nu.flat_foot}
								]}
							]},
							{kind:"HFlexBox", style:"margin:-10px 0px -10px 0px",flex: 1, components:[
								{kind:"RowGroup",flex: 1, caption:"INIT", components:[
									{kind:"Input", name:"init", value:nu.init}
								]},
								{className: "enyo-picker-label", content: "="},
								{kind:"RowGroup",flex: 1, caption:"Dex Mod", components:[
									{kind:"Input", name:"dex_mod3", value:nu.dex_mod}
								]},
								{kind:"RowGroup",flex: 1, caption:"Misc Mod", components:[
									{kind:"Input", name:"misc_init", value:nu.misc_init}
								]},
								{kind:"Spacer", style:"margin:0px -10px 0px -10px"},
								{kind:"RowGroup",flex: 1, caption:"Speed", components:[
									{kind:"Input", name:"speed", value:nu.speed}
								]},
								{kind:"RowGroup",flex: 1, caption:"Armor Type", components:[
									{kind:"Input", name:"armor_type", value:nu.armor_type}
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
							{kind:"Input", name:"fort_tot", style:"margin:-10px 0px -10px 0px", value:nu.fort_tot},
							{kind:"Input", name:"reflex_tot", style:"margin:-10px 0px -10px 0px", value:nu.reflex_tot},
							{kind:"Input", name:"will_tot", style:"margin:-10px 0px -10px 0px", value:nu.will_tot}
						]},
						{className: "enyo-picker-label", content: "="},
						{kind:"Group",style:"width:37px", components:[
							{className: "enyo-picker-label", content: "Base"},
							{kind:"Input", name:"base_fort", style:"margin:-10px 0px -10px 0px", value:nu.base_fort},
							{kind:"Input", name:"base_reflex", style:"margin:-10px 0px -10px 0px", value:nu.base_reflex},
							{kind:"Input", name:"base_will", style:"margin:-10px 0px -10px 0px", value:nu.base_will},
						]},
						{kind:"Group",style:"width:37px", components:[
							{className: "enyo-picker-label", content: "Ability"},
							{kind:"Input", name:"con_mod2", style:"margin:-10px 0px -10px 0px", value:0},
							{kind:"Input", name:"dex_mod4", style:"margin:-10px 0px -10px 0px", value:0},
							{kind:"Input", name:"wis_mod2", style:"margin:-10px 0px -10px 0px", value:0},
						]},
						{kind:"Group",style:"width:37px", components:[
							{className: "enyo-picker-label", content: "Misc"},
							{kind:"Input", name:"misc_fort", style:"margin:-10px 0px -10px 0px", value:nu.misc_fort},
							{kind:"Input", name:"misc_reflex", style:"margin:-10px 0px -10px 0px", value:nu.misc_reflex},
							{kind:"Input", name:"misc_will", style:"margin:-10px 0px -10px 0px", value:nu.misc_will},
						]},
						{kind:"Group",style:"width:37px", components:[
							{className: "enyo-picker-label", content: "Temp"},
							{kind:"Input", name:"temp_fort", style:"margin:-10px 0px -10px 0px", value:nu.temp_fort},
							{kind:"Input", name:"temp_reflex", style:"margin:-10px 0px -10px 0px", value:nu.temp_reflex},
							{kind:"Input", name:"temp_will", style:"margin:-10px 0px -10px 0px", value:nu.temp_will},
						]},
						{kind:"Spacer"},
						{kind:"Group",style:"width:50px", components:[
							{className: "enyo-picker-label", style:"margin:-11px 0px -11px 0px", content: "ATTACK"},
							{className: "enyo-picker-label", style:"margin:-15px 0px -15px 0px", content: "MELEE"},
							{className: "enyo-picker-label", style:"margin:-15px 0px -15px 0px", content: "RANGE"}
						]},
						{kind:"Group",style:"width:37px", components:[//read only
							{className: "enyo-picker-label", content: "T.A.B."},
							{kind:"Input", name:"mel_tab", style:"margin:-10px 0px -10px 0px", value:nu.mel_tab},
							{kind:"Input", name:"ran_tab", style:"margin:-10px 0px -10px 0px", value:nu.ran_tab}
						]},
						{className: "enyo-picker-label", content: "="},
						{kind:"Group",style:"width:37px", components:[
							{className: "enyo-picker-label", content: "B.A.B."},
							{kind:"Input", name:"mel_bab", style:"margin:-10px 0px -10px 0px", value:nu.mel_bab},
							{kind:"Input", name:"ran_bab", style:"margin:-10px 0px -10px 0px", value:nu.ran_bab}
						]},
						{kind:"Group",style:"width:37px", components:[
							{className: "enyo-picker-label", content: "Mods"},
							{kind:"Input", name:"mel_misc", style:"margin:-10px 0px -10px 0px", value:nu.mel_misc},
							{kind:"Input", name:"ran_misc", style:"margin:-10px 0px -10px 0px", value:nu.ran_misc}
						]},
						{kind:"Group",style:"width:37px", components:[
							{className: "enyo-picker-label", content: "Temp"},
							{kind:"Input", name:"mel_temp", style:"margin:-10px 0px -10px 0px", value:nu.mel_temp},
							{kind:"Input", name:"ran_temp", style:"margin:-10px 0px -10px 0px", value:nu.ran_temp}
						]}		
					]}
				]}
			]}
		]}
	]});
