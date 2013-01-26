var TripsList = function(){
  var Trips = [];
  return {
    addTrip: function(trip){
      Trips.push(trip);
    },
    getTripsCount: function(){
      return Trips.length();
    }
  }
};
