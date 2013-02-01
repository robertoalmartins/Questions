Ext.define("Inspec.controller.HomeControl",{
	extend: "Ext.app.Controller",
	config: {
		refs: {
			HomeView: "Home",
		},
		control: {
			HomeView: {
				openInspec1: "activateList1",
				openInspec2: "activateList2",
				openInspec3: "activateList3",
				openInspec4: "activateList4"
			}
		}
	},
	//Treansitions.
	slideLeftTransition: { type: "slide", direction: "left"},
	slideRightTransition: { type: "slide", direction: "right"},

	activateList1: function(){
		Ext.Viewport.animateActiveItem("List1", this.slideLeftTransition);
	},
	activateList2: function(){
		Ext.Viewport.animateActiveItem("List2", this.slideLeftTransition);
	},
	activateList3: function(){
		Ext.Viewport.animateActiveItem("List3", this.slideLeftTransition);
	},
	activateList4: function(){
		Ext.Viewport.animateActiveItem("List4", this.slideLeftTransition);
	}

})