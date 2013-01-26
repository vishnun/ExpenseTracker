var navigator = function(){
  var currentPage="trips-list";
  $("#"+currentPage).show();
  return {
    changePage: function(pageName){
      console.log("Change Page");
      $("#"+pageName).show();
      $("#"+currentPage).hide();
      currentPage = pageName;
    }
  };
}();