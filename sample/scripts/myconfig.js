'use strict';

angular.module('myconfig', ['adf', 'myModule'])
.config(function(dashboardProvider, helloWorldProvider){
  
  helloWorldProvider.setName('Daniels');

  dashboardProvider
    .myconfig('mySimpleConfig', {
      test: "TestMexx1"
    });

    
});


