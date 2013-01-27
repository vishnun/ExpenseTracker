var navigator = function(){
  var currentPage=appConstants.pageIds.homePage,
      homePage = appConstants.pageIds.homePage;
  $("#"+homePage).show();


  var urlChange = function(hashData){
    console.log("Thi PAge => " + hashData.pageName);
    if(!hashData.pageName){
      return false;
    }
    switch(hashData.pageName){
      case "new-trip-form":
        var newTrip = newTripView.getInstance();
    }
    $("#"+currentPage).hide();
    $("#"+hashData.pageName).show();
    currentPage = hashData.pageName;

  };

  var bindGlobalEventListeners = function(){
    window.onhashchange = function(){
      var urlHash = window.location.hash;
      urlHash = urlHash.replace('#','').split('/');
      urlChange({
        pageName: urlHash[0]
      });
    };
  };
  bindGlobalEventListeners();
  return {
    changePage: function(pageName){
      if(!pageName){
        pageName = homePage;
      }
      $("#"+pageName).show();
      $("#"+currentPage).hide();
      currentPage = pageName;
    }
  };
}();