Ext.application({
	name: "Inspec",
	
	models: ["ModelInspec"],
	stores: ["List1StoreInspec"],
	controllers: ["HomeControl", "List1ControlInspec"],
	views: ["Home", "List1", "InspecEditor1"],

	launch : function(){
		
		var Home = {
			xtype: "Home"
		};
		
		var InspecEditor1 = {
			xtype: "InspecEditor1"
		};

		var List1 = {
			xtype: "List1"
		};


        Ext.Viewport.add([Home, List1, InspecEditor1]);

    }
})