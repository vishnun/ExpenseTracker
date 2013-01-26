var tripsList = (function(){
  var instance,
  init = function(){
    var models = [],
      self = this,
      thisPageName = 'trips-list',
    bindEventListeners = function(){
      $("#add-new-trip-btn").on('click',function(){
        navigator.changePage("new-trip-form");
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