Ext.define("Inspec.controller.List1ControlInspec",{
	extend: "Ext.app.Controller",
	config: {
		refs: {
			InspecEditor1View: "InspecEditor1",
			List1View: "List1"
		},
		control: {
			InspecEditor1View: {
				backList: "activateInspecList1"
			},
			List1View: {
				editTap: "onEdit",
				HomeTap: "activateHome"
			}
		}
	},

	slideLeftTransition: { type: "slide", direction: "left"},
	slideRightTransition: { type: "slide", direction: "right"},

	activeteInspecEditor1: function(record){
		var InspecEditor1View = this.getInspecEditor1View();
		InspecEditor1View.setRecord(record);
		Ext.Viewport.animateActiveItem("InspecEditor1", this.slideLeftTransition);
	},
	activateInspecList1: function(){
		Ext.Viewport.animateActiveItem("List1", this.slideRightTransition);
	},
	activateHome: function(){
		Ext.Viewport.animateActiveItem("Home", this.slideRightTransition);
	},
	
	onEdit: function(list, record){
	 	this.activeteInspecEditor1(record);
	}
	
});