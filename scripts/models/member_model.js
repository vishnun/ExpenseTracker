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
    setPhone: function(phone){
      memberDetails.phone = phone;
    },
    getPhone: function(){
      return memberDetails.phone;
    },
    setDetails: function(data){
      if(!data){
        alert('Data Not entered');
        return;
      }
      if(data.name)
        this.setName(data.name);
      if(data.phone)
        this.setPhone(data.phone);
      if(data.email)
        this.setPhone(data.email);
    }
  };
};