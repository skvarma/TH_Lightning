({
	helperMethod : function() {
		
	},
    createItem: function(component, newItem) {
        var items = component.get("v.items");

        var action = component.get("c.saveItem");
        action.setParams({"campingItem":newItem});

        action.setCallback(this, function(response){
           var state = response.getState();

            if (component.isValid() && (state === "SUCCESS")){
                items.push(newItem);
                component.set("v.items", items);
            }
            else {
                 console.log("Failed Save  with state: " + state);
            }
        });

        $A.enqueueAction(action);

 
//        var newItem = JSON.parse(JSON.stringify(newItem));
//
//        console.log("Items before 'create': " + JSON.stringify(items));
//		items.push(newItem);
//		component.set("v.items", items);
//		console.log("Items after 'create': " + JSON.stringify(items));
    },
    resetCampaignItem : function(component) {
        component.set("v.newItem",{ 'sobjectType': 'Camping_Item__c',
                    'Name': '',
                    'Quantity__c': 0,
                    'Price__c': 0,
                    'Packed__c': false });
		
	},
	validateCampingItemForm : function(component) {
         // Simplistic error checking
                var validCampingItem = true;

                // Name must not be blank
                var nameField = component.find("name");
                var campingItem = nameField.get("v.value");
                if ($A.util.isEmpty(campingItem)){
                    validCampingItem = false;
                    nameField.set("v.errors", [{message:"Camping Item name can't be blank."}]);
                }
                else {
                    nameField.set("v.errors", null);
                }

                // Price must not be blank
                var priceField = component.find("price");
                var price = priceField.get("v.value");
                if ($A.util.isEmpty(price)){
                    validCampingItem = false;
                    priceField.set("v.errors", [{message:"Camping Item Price can't be blank."}]);
                }
                else {
                    priceField.set("v.errors", null);
                }

                // Quantity must not be blank
                var qtyField = component.find("quantity");
                var quantity = qtyField.get("v.value");
                if ($A.util.isEmpty(quantity)){
                    validCampingItem = false;
                    qtyField.set("v.errors", [{message:"Camping Item Quantity can't be blank."}]);
                }
                else {
                    qtyField.set("v.errors", null);
                }
                return validCampingItem;

    }

})