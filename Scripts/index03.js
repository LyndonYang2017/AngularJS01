/// <reference path="angular.js" />

//var myApp = angular.module("myModule", []);

//myApp.controller("myController", function ($scope) {
//    var employee = {
//        firstName: "Daivd",
//        lastName: "Hastings",
//        gender: "Male"
//    };

//    $scope.employee = employee;
//});

var myApp = angular
                .module("myModule", [])
                .controller("myController", function ($scope) {
                    var employee = {
                        firstName: "Daivd",
                        lastName: "Hastings",
                        gender: "Male"
                    };

                    $scope.employee = employee;
                });