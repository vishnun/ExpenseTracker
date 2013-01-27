var tripsListView = (function(){
  var instance,
  init = function(){
    var models = [],
      self = this,
      thisPageName = appConstants.pageIds.tripsList,
    bindEventListeners = function(){
      console.log("Listening Events");
      $("#add-new-trip-btn").on('click',function(){
        navigator.changePage("new-trip-form");
        var trip = newTripView.getInstance();
      });
    };
    bindEventListeners();
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