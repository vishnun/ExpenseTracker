var Expense = function(){
  var expenseDetails = {};
  expenseDetails.paidForMembers = [];
  return {
    setPayer: function(member){
      expenseDetails.payer = member;
    },
    getPayer: function(){
      return expenseDetails.payer;
    },
    setPaidForMembers: function(members){
      expenseDetails.paidForMembers = members;
    },
    getPaidForMembers: function(){
      return expenseDetails.paidForMembers;
    },
    setAmount: function(amount){
      expenseDetails.amount = amount;
    },
    getAmount: function(){
      return expenseDetails.amount;
    },
    setDescription: function(description){
      expenseDetails.description = description;
    },
    getDescription: function(){
      return expenseDetails.description;
    }
  }
};