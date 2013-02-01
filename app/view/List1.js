Ext.define("Inspec.view.List1",{
    extend: "Ext.Container",
    xtype:"List1",
    requires: "Ext.dataview.List",
    
    config: {
        layout:{
            type: "fit"
        },
        items: [{
            xtype: "toolbar",
            title: "Responder questionários",
            docked: "top",
            items: [{
                xtype: "button",
                ui: "back",
                text: "Home",
                itemId: "backHome"
            },{
                xtype: "spacer"
            } ]
        },{
            xtype: "list",
            store: "List1StoreInspec",
            itemId: "InspecList",
            loadingText: "Loading Wods...",
            emptyText: "<div class=\"list-empty\">Sem questionarios.</div>",
            onItemDisclosure: true,
            grouped: true,
            itemTpl: "<div class=\"list-item\">{question}</div>"         

        },{
            xtype: 'toolbar',
            docked: 'bottom',
            id: 'footerToolbar'
        }

        ],
        listeners: [{
            delegate: "#InspecList",
            event: "disclose",
            fn: "onInspecListDisclose"
        },{
            delegate: "#backHome",
            event: "tap",
            fn: "onBackHomeTap"
        }]
    },
    onInspecListDisclose: function(list, record, target, index, evt, options){
        this.fireEvent("editTap", this, record);
    },
    onBackHomeTap: function(){
        this.fireEvent("HomeTap", this);
    }
});