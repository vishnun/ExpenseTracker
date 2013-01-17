//Using Module pattern for Models
var ExpenseTracker ={};
ExpenseTracker.member=(function(){
  var memberDetails={};
  return {
    setName: function(name){
      memberDetails.name = name;
    },
    getName: function(){
      return memberDetails.name;
    },
    setEmail: function(email){
      memberDetails.email = email;
    },
    getEmail: function(){
      return memberDetails.email;
    }
  };
})();


ExpenseTracker.tripMModel= (function(){
  var groupMembersList=[];
  return {
    addGroupMember: function(members){
      groupMembersList = members;
    }
  }
})();