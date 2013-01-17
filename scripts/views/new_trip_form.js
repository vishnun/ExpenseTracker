ExpenseTracker.newTripView = (function(){
  var instance,
  init = function(){
    var models = [],
        thisView=$("#new-trip-form");
    return {
      registerModel: function(model){
        models.push(model);
      }
    }
  };
  return {
    getInstance: function(options){
      if(instance === undefined){
        instance = init();
      }
      return instance;
    }
  }
})();