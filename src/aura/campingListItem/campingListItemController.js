({
    packItem : function(component, event, helper) {
        var btnClicked = event.getSource();
        btnClicked.set("v.disabled",true);
        
        var campingItem = component.get("v.item");
        campingItem.Packed__c = true;
        component.set("v.item",campingItem);
        
		//component.set("v.item.Packed__c",true);	
	}
    
    
})