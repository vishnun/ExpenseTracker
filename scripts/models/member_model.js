var MemberModel = function(){
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
    },
    setPhone: function(email){
      memberDetails.email = email;
    },
    getPhone: function(){
      return memberDetails.email;
    }
  };
};