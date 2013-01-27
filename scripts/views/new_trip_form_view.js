var newTripView = (function(){
  var instance,
    init = function(){
      var models = [],
        self = this,
        thisPageName = 'new-trip-form',
        bindEventListeners = function(){
          $("#submit-group").on('click',function(){
            //Update Model
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