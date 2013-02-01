Ext.define("Inspec.view.InspecEditor1",{
	extend: "Ext.form.Panel",
	requires: "Ext.form.FieldSet",
	xtype: "InspecEditor1",
	config: {
		scrollable: "vertical",
		items: [{
			xtype: "toolbar",
			docked: "top",
			title: "Responder questionários",
			
			items: [{
				xtype: "button",
				ui: "back",
				text: "Voltar",
				itemId: "backButton"
			}
			]},
			{
				xtype: "toolbar",
				docked: "bottom",
				id: 'footerToolbar'
			},
			{
				xtype: "fieldset",
				
				items: [
				{
					xtype: "textareafield",
					name: "question",
					clearIcon: false,
					cls: 'i-question',
					disabled: false,
					height:"150px"
					
				}
				]
			},
			{
				xtype: "fieldset",
				title: 'Selecione',
				instructions: 'Pressione o botão',
				items: [
				
				{
					xtype: 'radiofield',
					name: 'team',
					label: 'Sim',
					value: 'redteam'
				},
				{
					xtype: 'radiofield',
					name: 'team',
					label: 'Não',
					value: 'blueteam'
				}
				]
			},
			{
				xtype: "fieldset",
				
				items: [
				
				{
					xtype: 'button',
					text: 'Salvar',
					ui: 'confirm',
					itemId: "backButton"
				}
				]
			}

			],
			listeners: [
			{
				delegate: "#backButton",
				event: "tap",
				fn: "onBackButtonTap"
			}
			]
		},
		onBackButtonTap: function(){
			this.fireEvent("backList", this);
		}
	});