'use strict';

var myApp = angular.module('myModule', []);

myApp.provider('helloWorld', function() {
    // In the provider function, you cannot inject any
    // service or factory. This can only be done at the
    // "$get" method.
 
    this.name = 'Default';
 
    this.$get = function() {
        var name = this.name;
        return {
            sayHello: function() {
                return "Hello, " + name + "!"
            }
        }
    };
 
    this.setName = function(name) {
        this.name = name;
    };
});