'use strict';

angular.module('myconfig', ['adf'])
.config(function(dashboardProvider){
  
  dashboardProvider
    .myconfig('mySimpleConfig', {
      test: "TestMe"
    });

    
});


