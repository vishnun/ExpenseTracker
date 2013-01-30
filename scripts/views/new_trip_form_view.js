var newTripView = (function(){
  var instance,
    init = function(){
      var models = [],
        self = this,
        thisPageName = 'new-trip-form',
        bindEventListeners = function(){
          $("#submit-group").on('click',function(){
            var memberListEl = $(".group-list li"),
              members = [];
            for(var index = 0, len=memberListEl.length;index<len;index++){
              var member = new MemberModel();
              member.setDetails({
                name: $(memberListEl[index]).find("input.name").val(),
                phone: $(memberListEl[index]).find("input.phone").val()
              });
              members.push(member);
            }
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