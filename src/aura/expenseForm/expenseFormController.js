/**
 * Created by skvarma on 2017-02-08.
 */
({
    clickCreateExpense: function(component, event, helper) {
            if(helper.validateExpenseForm(component)){
                // Create the new expense
                var newExpense = component.get("v.newExpense");
                helper.createExpense(component, newExpense);
                component.set("v.newExpense",{'sobjectType': 'Expense__c',
                                                                 'Name': '',
                                                                 'Amount__c': 0,
                                                                 'Client__c': '',
                                                                 'Date__c': '',
                                                                 'Reimbursed__c': false })
            }
     },
})