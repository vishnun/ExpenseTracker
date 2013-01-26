//Using Module pattern for Models
var Trip = function(){
  var trip = {};
  trip.group = [];
  trip.expenses = [];
  return {
    setTripName: function(tripName){
      trip.tripname = tripName;
    },
    getTripName: function(){
      return trip.tripname;
    },
    addGroupMember: function(member){
      trip.group.push(member);
    }
  }
};