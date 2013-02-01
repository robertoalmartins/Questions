Ext.define("Inspec.store.List1StoreInspec",{
    extend: "Ext.data.Store",
    
    config: {
        model: "Inspec.model.ModelInspec",
        autoLoad: true,
        proxy: {
            type: 'ajax',
            url : 'a.json', 
            reader: {
                type: 'json',
                rootProperty:'List1'}
        },
        sorters: 'title',
        grouper: {
            sortProperty: "title",
            direction: "DESC",
            groupFn: function (record) {

                if (record && record.data.title) {
                    return record.data.title.toString();
                } else {
                    return '';
                }
            }
        }
    }


});