'use strict';

angular.module('sample', [])
.config(function(dashboardProvider){
  
  dashboardProvider
    .myconfig('mySimpleConfig', {
      test: "TestMe"
    });

    
});


