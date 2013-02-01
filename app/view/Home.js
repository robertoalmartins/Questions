Ext.define('Inspec.view.Home', {
	extend: 'Ext.Container',
	xtype: 'Home',
	alias: "widget.Home",
	id:"splashScreen",
 
	config: {
		layout: {
			type: 'card'
		},
		items: [{
			xtype: 'panel',
			docked: 'top',
			id: 'splashToolbar'
			
		},{

			xtype: 'toolbar',
			docked: 'top',
			title:'Usuário: Roberto',
			id:'homeUser'
			
		},
		{
			layout: {
				type : 'vbox',
				pack : 'center',
				align: 'stretch'
			},
			defaults: {
				xtype: 'container',
				flex : 1,
				layout: {
					type : 'hbox',
					align: 'middle'
				},
				defaults: {
					xtype : 'panel',
					flex  : 1,
					margin: 10
				}
			},
			scrollable: {
				direction: 'vertical'
			},
			
			items: [
			{	items: [
				{
					xtype:"button",
					html: "<div class=\'iconMenu\'><img src='resources/images/pesagem-mp.png' /> <h2> Responder Questionários </h2></div>",
					height:'150px',
					id: "acetitol"
				}
				]
			}
			]

		},
		{
			xtype: 'toolbar',
			docked: 'bottom',
			id: 'footerToolbar'

		}],

		listeners: [
		{
			delegate: "#acetitol",
			event: "tap",
			fn: "onButton1"
		}]
	},
	onButton1: function(){
		this.fireEvent("openInspec1",this);
	}

});
