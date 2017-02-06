({
	helperMethod : function() {
		
	},
    createCampingItem: function(component, newItem) {
        var items = component.get("v.items");
 
        var newItem = JSON.parse(JSON.stringify(newItem));
 
        console.log("Items before 'create': " + JSON.stringify(items));
		items.push(newItem);
		component.set("v.items", items);
		console.log("Items after 'create': " + JSON.stringify(items));
    },
    resetCampaignItem : function(component) {
        component.set("v.newItem",{ 'sobjectType': 'Camping_Item__c',
                    'Name': '',
                    'Quantity__c': 0,
                    'Price__c': 0,
                    'Packed__c': false });
		
	}
})