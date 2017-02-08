/**
 * Created by skvarma on 2017-02-07.
 */

public with sharing class CampingListController {

    @AuraEnabled
    public static List<Camping_Item__c> getItems(){

        String[] fieldList = new String[]{'Name', 'Price__c', 'Quantity__c', 'Packed__c'};

        Map<String,SObjectField> fieldsMap = Schema.sObjectType.Camping_Item__c.fields.getMap();

        for (String field:fieldList){
            if (!fieldsMap.get(field).getDescribe().isAccessible()) {
                throw new System.NoAccessException();
                return null;
            }
        }

        List<Camping_Item__c> campingItemsList = [Select Name, Price__c, Quantity__c, Packed__c From Camping_Item__c];

        return campingItemsList;
    }

    @AuraEnabled
    public static Camping_Item__c saveItem(Camping_Item__c campingItem){

        upsert campingItem;
        return campingItem;
    }

}