Ext.define("Inspec.model.ModelInspec",{
	extend: "Ext.data.Model",
	config: {
		fields: [
			{ name: "id", type: 'int'},
			{ name: "dateCreated", type: "date", dateFormat: "c"},
			{ name: "title", type: "string"},
			{ name: "question", type: "string"}
		]
	}
}); 