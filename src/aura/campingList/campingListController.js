({
	myAction : function(component, event, helper) {
		
	},
    clickCreateCampingItem : function(component, event, helper) {



        // If we pass error checking, do some real work
        if(helper.validateCampingItemForm(component)){

            var newItem = component.get("v.newItem");
            helper.createItem(component,newItem);
            helper.resetCampaignItem(component);
        }
	},
	doInit : function(component, event, helper) {

	    var action = component.get("c.getItems");

        action.setCallback(this, function(response) {
                    var state = response.getState();
                    if (component.isValid() && state === "SUCCESS") {
                        component.set("v.items", response.getReturnValue());
                    }
                    else {
                        console.log("Failed with state: " + state);
                    }
                });


	    $A.enqueueAction(action);

    },
})